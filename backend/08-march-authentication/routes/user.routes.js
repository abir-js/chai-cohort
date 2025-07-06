import { Router } from "express";
import { registerUser, verifyUser } from "../controllers/user.controllers.js";

const router = Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);

export default router;
