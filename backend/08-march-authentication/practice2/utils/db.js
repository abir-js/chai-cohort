import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((err) => {
      console.log("failed to connect to mongodb");
    });
};

export default db;