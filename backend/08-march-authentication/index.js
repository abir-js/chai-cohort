import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//?cors
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/abir", (req, res) => {
  res.status(200).json({ message: "Abir!" });
});

//? Connecting to database
await db();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
