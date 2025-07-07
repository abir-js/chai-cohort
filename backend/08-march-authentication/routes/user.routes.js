import { Router } from "express";
import {
  getme,
  loginUser,
  logout,
  registerUser,
  verifyUser,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", loginUser);
router.get("/profile", isLoggedIn, getme)
router.get("/logout", isLoggedIn, logout)

export default router;
