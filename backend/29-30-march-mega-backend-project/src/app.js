import express from "express";

const app = express();

// router imports
import healthCheckRouter from "./routes/healthckeck.route.js";

app.use("/api/v1/healthckeck", healthCheckRouter);

export default app;
