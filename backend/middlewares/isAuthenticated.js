import { ACCESS_TOKEN_SECRET } from "../env.js";
import { User } from "./../models/user.js";
import jwt from "jsonwebtoken";

/**
 * Middleware function to validate JWT token.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function in the stack
 *
 * @returns {void}
 */
const validateToken = async function (req, res, next) {
  // Log the request body for debugging purposes
  console.log(req.body);

  // Check if the request has headers and an authorization header
  if (req.headers && req.headers.authorization) {
    try {
      // Extract the token from the authorization header
      const token = req.headers.authorization.split(" ")[1];

      // Verify the token using the ACCESS_TOKEN_SECRET
      const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);

      // Find the user in the database using the email from the decoded token
      const user = await User.findOne({ email: decodedToken.email });

      // If the user is found, attach the user object to the request and call the next middleware
      if (user) {
        req.user = user;
        next();
      } else {
        // If the user is not found, set an error message in the request and call the next middleware
        req.error = "Invalid Token";
        next();
      }
    } catch (error) {
      // If there is an error verifying the token, set the error message in the request and call the next middleware
      req.error = error.message;
      next();
    }
  } else {
    // If the request does not have headers or an authorization header, set an error message in the request and call the next middleware
    req.error = "Invalid headers.";
    next();
  }
};

export default validateToken;
