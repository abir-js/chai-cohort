import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Export a function that connects to db

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to Mongodb");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};

export default db;
