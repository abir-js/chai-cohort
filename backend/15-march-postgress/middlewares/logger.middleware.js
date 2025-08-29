import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const logMiddleware = (req, res, next) => {
  const logData = `[${new Date().toISOString()}] - ${req.method} - ${
    req.url
  }\n`;
  const logFile = path.join(__dirname, "../logs/request.log");

  fs.appendFile(logFile, logData, (err) => {
    if (err) {
      console.log("Error in log file", err);
    }
  });

  next();
};
