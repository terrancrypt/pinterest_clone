import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { generateToken } from "../auth/jwt.js";

const prisma = new PrismaClient();

const postLogin = async (req, res) => {
  try {
    const { email, passWord } = req.body;

    // const passDecode = bcrypt.compareSync();

    const checkUser = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    console.log(checkUser);

    if (checkUser) {
      const checkPass = bcrypt.compareSync(passWord, checkUser.pass_word);

      if(checkPass){
        const infoUser = {...checkUser, pass_word: ""};
        const token  = generateToken(checkUser);
        const dataRes = {...infoUser, token}
    
        res.send(dataRes);
      }else{
        res.send("Mật khẩu không đúng")
      }
      
    }else{
        res.send("Email sai")
    }
  } catch (error) {
    res.send("Lỗi backend");
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
      res.send("Email đã tồn tại");
    } else {
      const user = await prisma.users.create({
        data: {
          full_name: fullName,
          email,
          pass_word: hashPass,
          age,
        },
      });
      res.send(user);
    }
  } catch (error) {
    res.send("Lỗi backend");
  }
};

export { postLogin, postSignUp };
