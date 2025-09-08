import express from "express";
import axios from "axios";
import { Redis } from "ioredis";
import http from "http";
import { Server } from "socket.io";

const app = express();

const state = new Array(100).fill(false);

//  HTTP Server
const httpServer = http.createServer(app);
const io = new Server();

io.attach(httpServer);

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);
  socket.on('message', (data) => {
    io.emit('server-message', data) // broadcast to all clients
  });

  socket.on('checkbox-update', (data) => {
    state[data.index] = data.value
    io.emit('checkbox-update', data) // broadcast to all clients
  });

});

const port = process.env.PORT ?? 4000;

const redis = new Redis({ host: "localhost", port: Number(6379) });

app.use(express.static("./public"));

app.use(async function (req, res, next) {
  const key = "rate-limit";
  const value = await redis.get(key);

  if (value === null) {
    redis.set(key, 0);
    redis.expire(key, 20);
  }

  if (value && Number(value) > 100) {
    return res.status(429).json({
      message: "Too many requests",
    });
  }

  redis.incr(key);
  next();
});

app.get("/state", (req, res) => {
  return res.status(200).json({
    state,
  });
})

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

app.get("/books", async (req, res) => {
  // Check in cache
  const cachedValue = await redis.get("totalPageValue");
  if (cachedValue) {
    console.log("Cache hit ✅");

    return res.json({ totalPageCount: Number(cachedValue) });
  }

  const response = await axios.get(
    "https://api.freeapi.app/api/v1/public/books"
  );

  const totalPageCount = response.data?.data?.data?.reduce(
    (acc: number, curr: { volumeInfo: { pageCount?: number } }) =>
      !curr?.volumeInfo?.pageCount ? 0 : curr.volumeInfo.pageCount + acc,
    0
  );

  // Set in cache
  console.log("cache miss ❌");
  await redis.set("totalPageValue", totalPageCount);
  return res.json({ totalPageCount });
});

httpServer.listen(port, () =>
  console.log(`HTTP server is listening on port ${port}`)
);
