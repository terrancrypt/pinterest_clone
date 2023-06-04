import jwt from "jsonwebtoken";

// Generate Token
const generateToken = (data) => {
  const token = jwt.sign({ data }, "node31", {
    algorithm: "HS256",
    expiresIn: "1d",
  });
  return token;
};

// Check Token
const checkToken = (token) => {
  return jwt.verify(token, "node31");
};

// Decode Token
const decodeToken = async (token) => {
  return jwt.decode(token);
   
};

const verifyJWT = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (checkToken(token)) {
      next();
    }
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export { generateToken, checkToken, decodeToken, verifyJWT };
