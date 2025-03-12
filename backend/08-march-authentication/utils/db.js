import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Export a function that connects to mongodb

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
    });
};

export default db;
