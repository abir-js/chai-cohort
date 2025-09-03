import { Router } from "express";
import {
  registerUser,
  verifyUser,
  loginUser,
  getProfile,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controller.js";
import { isLoggedin } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);

router.post("/login", loginUser);
router.post("/logout", isLoggedin, logoutUser);

router.get("/profile", isLoggedin, getProfile);

router.post("/forgot-pass", isLoggedin, forgotPassword);
router.post("/reset-pass/:token", isLoggedin, resetPassword);

export default router;
