import express from "express";
import userRouter from "./userRouter.js";

const rootRouter = express.Router();

rootRouter.use("/user", userRouter);
// rootRouter.use("/image", imageRouter);

export default rootRouter;