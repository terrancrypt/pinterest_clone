import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { decodeToken, generateToken } from "../auth/jwt.js";
import { errorCode, failCode, successCode } from "../config/response.js";

const prisma = new PrismaClient();

const postLogin = async (req, res) => {
  try {
    const { email, passWord } = req.body;

    const checkUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (checkUser) {
      const checkPass = bcrypt.compareSync(passWord, checkUser.pass_word);

      if (checkPass) {
        const infoUser = { ...checkUser, pass_word: "" };
        const token = generateToken(checkUser);
        const dataRes = { ...infoUser, token };

        successCode(res, dataRes, "Login success!");
      } else {
        failCode(res, "Incorrect password!");
      }
    } else {
      res.send("Incorrect email!");
    }
  } catch (error) {
    errorCode(res, "Server error!");
  }
};

const postSignUp = async (req, res) => {
  try {
    const { fullName, email, passWord, age } = req.body;

    const hashPass = bcrypt.hashSync(passWord, 10);

    const checkEmail = await prisma.users.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    if (checkEmail) {
      failCode(res, "Email already exists!");
    } else {
      const user = await prisma.users.create({
        data: {
          full_name: fullName,
          email,
          pass_word: hashPass,
          age,
        },
      });
      successCode(res, user, "Account successfully created!");
    }
  } catch (error) {
    errorCode(res, "Server error!");
  }
};

const postUpload = async (req, res) => {
  try {
    const { name, url, desc } = req.body;
    const { token } = req.headers;
    const tokenDecode = await decodeToken(token);

    const dataUpload = await prisma.images.create({
      data: {
        name,
        url,
        description: desc,
        user_id: tokenDecode.data.user_id,
      },
    });

    successCode(res, dataUpload, "Upload success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const saveImage = async (req, res) => {
  try {
    const { imageId } = req.params;
    const { token } = req.headers;
    const {
      data: { user_id },
    } = await decodeToken(token);

    const dataSave = await prisma.save_images.findUnique({
      where: {
        img_id: Number(imageId),
      },
    });

    if (dataSave) {
      await prisma.save_images.delete({
        where: {
          img_id: Number(imageId),
        },
      });
      successCode(res, "You have successfully unsaved this photo!");
      return;
    }

    await prisma.save_images.create({
      data: {
        user_id,
        img_id: Number(imageId),
        saved_date: new Date(),
      },
    });

    successCode(res, "Saved success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const getUserInfo = async (req, res) => {
  try {
    const { userId } = req.params;

    const dataUser = await prisma.users.findUnique({
      where: {
        user_id: Number(userId),
      },
    });

    successCode(res, dataUser, "Get user info success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const getSavedImage = async (req, res) => {
  try {
    const { token } = req.headers;
    const {
      data: { user_id },
    } = await decodeToken(token);

    const dataSavedImage = await prisma.users.findMany({
      where: {
        user_id,
      },
    });

    successCode(res, dataSavedImage, "Get saved image success!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const deleteImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    // Kiểm tra tham chiếu trong bảng comments
    const hasReferencesComment = await prisma.comments.findFirst({
      where: {
        img_id: Number(imageId),
      },
    });

    if (hasReferencesComment) {
      // Xóa các tham chiếu trong bảng comments
      await prisma.comments.deleteMany({
        where: {
          img_id: Number(imageId),
        },
      });
    }

    // Kiểm tra các tham chiếu trong bảng save_images
    const hasReferencesSaved = await prisma.save_images.findFirst({
      where: {
        img_id: Number(imageId),
      },
    });

    if (hasReferencesSaved) {
      // Xóa các tham chiếu trong bảng save_images
      await prisma.save_images.deleteMany({
        where: {
          img_id: Number(imageId),
        },
      });
    }

    await prisma.images.delete({
      where: {
        img_id: Number(imageId),
      },
    });

    successCode(res, "Delete image successfully!");
  } catch {
    errorCode(res, "Server error!");
  }
};

const putUpdateInfo = async (req, res) => {
  try {
    const { token } = req.headers;
    const { fullName, email, passWord, age, avatarUrl } = req.body;
    const {
      data: { user_id },
    } = await decodeToken(token);
    const hashPass = bcrypt.hashSync(passWord, 10);

    const dataUpdate = await prisma.users.update({
      where: {
        user_id,
      },
      data: {
        full_name: fullName,
        email,
        pass_word: hashPass,
        age,
        avatar: avatarUrl,
      },
    });

    successCode(res, dataUpdate, "Update info successfully!");
  } catch (error) {
    console.log(error);
    errorCode(res, "Server error!");
  }
};

export {
  postLogin,
  postSignUp,
  postUpload,
  saveImage,
  getUserInfo,
  getSavedImage,
  deleteImage,
  putUpdateInfo,
};
