import express from "express";
import { postLogin, postSignUp } from "../controllers/userController.js";
import { verifyJWT } from "../auth/jwt.js";

const userRouter = express.Router();

// Login & Sign Up
userRouter.post("/login",postLogin);
userRouter.post("/signup", postSignUp);

// Restfull API
userRouter.post("/upload", )

export default userRouter;