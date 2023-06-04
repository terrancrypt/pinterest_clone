import https from "./config";

const userServices = {
  postLogin: (loginForm) => {
    return https.post("/user/login", loginForm);
  },
  postSignUp: (signUpForm) => {
    return https.post("/user/signup", signUpForm);
  },
  postUpload: (dataImage) =>{
    return https.post("/user/upload", dataImage);
  }
};

export default userServices;
