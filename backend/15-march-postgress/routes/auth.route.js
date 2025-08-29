import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";

const userRouter = Router();

userRouter.get("/register", registerUser);

export default userRouter;
