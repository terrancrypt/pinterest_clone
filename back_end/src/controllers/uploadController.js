import multer from "multer";
import convertString from "../helpers/convertString.js";

const storage = multer.diskStorage({
  destination: process.cwd() + "/public/img",
  filename: (req, file, callback) => {
    const fileNameFormated = convertString(file.originalname);

    const newName = new Date().getTime() + "_" + fileNameFormated;
    callback(null, newName);
  },
});
const upload = multer({
  storage,
});

export default upload;