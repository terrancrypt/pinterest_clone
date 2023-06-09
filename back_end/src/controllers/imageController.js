import { PrismaClient } from "@prisma/client";
import { errorCode, failCode, successCode } from "../config/response.js";
import { decodeToken } from "../auth/jwt.js";

const prisma = new PrismaClient();

const getAllImages = async (req, res) => {
  try {
    const dataImages = await prisma.images.findMany();

    successCode(res, dataImages, "Get all images success!");
  } catch {
    failCode(res, "Server error!");
  }
};

const getImagesByName = async (req, res) => {
  try {
    const { name } = req.params;

    const dataImages = await prisma.images.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });

    successCode(res, dataImages, "Success!");
  } catch (error) {
    failCode(res, "Server error!");
  }
};

const getDetailImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const dataImage = await prisma.images.findUnique({
      where: {
        img_id: Number(imageId),
      },
      include: {
        users: true,
      },
    });

    if(!dataImage){
      failCode(res, "Image does not exist!");
      return;
    }

    successCode(res, dataImage, "Success!");
  } catch (error) {
    errorCode(res, "Server error!");
  }
};

// Comment
const postAddComment = async (req, res) => {
  try {
    const { imageId } = req.params;
    const { token } = req.headers;
    const { comment } = req.body;
    const {
      data: { user_id },
    } = await decodeToken(token);

    const dataCmt = await prisma.comments.create({
      data: {
        user_id,
        img_id: Number(imageId),
        content: comment,
        cmt_date: new Date(),
      },
    });

    successCode(res, dataCmt, "Comment success!");
  } catch (error) {
    errorCode(res, "Server error!");
  }
};

const getImageComment = async (req, res) => {
  try {
    const { imageId } = req.params;

    const { comments } = await prisma.images.findUnique({
      where: {
        img_id: Number(imageId),
      },
      include: {
        comments: true,
      },
    });

    successCode(res, comments, "Get comment success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const getImageSaved = async (req, res) => {
  try {
    const { imageId } = req.params;

    const data = await prisma.save_images.findUnique({
      where: {
        img_id: Number(imageId),
      },
    });

    let status = {
      saveStatus: Boolean,
    };

    if (data) {
      status.saveStatus = true;
    } else {
      status.saveStatus = false;
    }

    console.log(data, status);

    successCode(res, status, "Get save status success");
  } catch (error) {
    errorCode(res, "Server error!");
  }
};

const getImageByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const { images } = await prisma.users.findUnique({
      where: {
        user_id: Number(userId),
      },
      include: {
        images: true,
      },
    });

    successCode(res, images, "Success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

export {
  getAllImages,
  getImagesByName,
  getDetailImage,
  postAddComment,
  getImageComment,
  getImageSaved,
  getImageByUser,
};
