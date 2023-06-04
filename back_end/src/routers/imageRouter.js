import express from "express";
import {
  getAllImages,
  getDetailImage,
  getImageByUser,
  getImageComment,
  getImageSaved,
  getImagesByName,
  postAddComment,
} from "../controllers/imageController.js";
import { verifyJWT } from "../auth/jwt.js";

const imageRouter = express.Router();

// Image
imageRouter.get("/get-all", verifyJWT, getAllImages);
imageRouter.get("/search/:name", verifyJWT, getImagesByName);
imageRouter.get("/get-detail-image/:imageId", verifyJWT, getDetailImage);
imageRouter.get("/get-image-by-user/:userId", verifyJWT, getImageByUser);

// Comment
imageRouter.post("/add-comment/:imageId", verifyJWT, postAddComment);
imageRouter.get("/get-comment/:imageId", verifyJWT, getImageComment);

// Saved Image
imageRouter.get("/get-save/:imageId", verifyJWT, getImageSaved);

export default imageRouter;
