import express from "express";
import {
  deleteImage,
  getSavedImage,
  getUserInfo,
  postLogin,
  postSignUp,
  postUpload,
  putUpdateInfo,
  saveImage,
} from "../controllers/userController.js";
import { verifyJWT } from "../auth/jwt.js";

const userRouter = express.Router();

// Login & Sign Up
userRouter.post("/login", postLogin);
userRouter.post("/signup", postSignUp);

// User Management
userRouter.get("/get-info/:userId", verifyJWT, getUserInfo);
userRouter.put("/update-info", verifyJWT, putUpdateInfo);

// Image Mangement
userRouter.post("/upload", verifyJWT, postUpload);
userRouter.post("/save-image/:imageId", verifyJWT, saveImage);
userRouter.get("/get-saved-image/", verifyJWT, getSavedImage);
userRouter.delete("/delete-image/:imageId", verifyJWT, deleteImage)

export default userRouter;
