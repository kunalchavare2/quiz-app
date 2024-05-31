import { ACCESS_TOKEN_SECRET } from "../env.js";
import jwt from "jsonwebtoken";

/**
 * @description Function to create the JWT token for given user
 * @param {User} user
 * @returns {string} Token
 */
const generateToken = function (user) {
  const access_token = jwt.sign({ email: user.email }, ACCESS_TOKEN_SECRET, {
    expiresIn: 90000,
  });
  return access_token;
};

export default generateToken;
