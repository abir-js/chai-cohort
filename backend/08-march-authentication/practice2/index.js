import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

// import all routes
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["get", "post", "allow", "delete"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/abir", (req, res) => {
  res.send("abir");
});

app.get("/register", (req, res) => {
  res.send("register");
});

// connect to db
db();

// routes
app.use("/api/v1/user", userRoutes);

app.listen(3000, () => {
  console.log(`app is listening on ${process.env.BASE_URL}`);
});
