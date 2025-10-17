import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";

const router = Router();

// router.get("/healthcheck", healthCheck);
router.route("/").get(healthCheck);

export default router;
