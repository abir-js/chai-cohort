import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { logMiddleware } from "./middlewares/logger.middleware.js";
import fs from "fs";

//
import userRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync("./logs")) fs.mkdirSync("./logs");
app.use(logMiddleware);

// routes
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Home route" });
});

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
