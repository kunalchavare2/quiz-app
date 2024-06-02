"use strict";

import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import GenerateToken from "../utils/generateToken.js";

const saltRounds = 10;

/**
 * @name register
 * @function
 * @description -  Registers a new user in the system.
 * @param {Object} request - The request object containing the user data.
 * @param {Object} response - The response object to send back to the client.
 * @param {Function} next - The next middleware function in the chain.
 *
 * @returns {Object} - A JSON response with a success message and a flag indicating if the account was created.
 *
 * @throws {Error} - If there is an error during the registration process.
 *
 */
export const register = async (request, response, next) => {
  try {
    const userModal = new User({ ...request.body });

    if (
      "email" in request.body &&
      "password" in request.body &&
      "name" in request.body
    ) {
      // Checking if the user is already registered
      const user = await User.findOne({ email: userModal.email });

      if (user) {
        return response.status(200).json({
          message: "Already have an account!",
          isAccountCreated: false,
        });
      } else {
        // Encrypting the password
        const hashPassword = await bcrypt.hash(userModal.password, saltRounds);

        // Creating the user to the modal
        const hashUser = new User({ ...request.body, password: hashPassword });

        // Saving the user to the database
        const createdUser = await hashUser.save();

        return response.status(200).json({
          message: "Account successfully created",
          isAccountCreated: true,
        });
      }
    } else {
      return response.status(400).json({
        message: "Email and password are required",
        isAccountCreated: false,
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send(error.message);
  }
};

/**
 * @function login
 * @description - Handles user login.
 * @param {Object} request - The request object containing the user's email and password.
 * @param {Object} response - The response object to send back to the client.
 * @param {Function} next - The next middleware function in the chain.
 *
 * @returns {Object} - A JSON response with a success message, a flag indicating if the user is logged in, and the user's details.
 * If the user is already logged in, the function returns the user's details.
 * If the user is not logged in, the function checks if the email and password are provided.
 * If the email and password are provided, the function checks if the user exists in the database.
 * If the user exists, the function compares the provided password with the hashed password in the database.
 * If the passwords match, the function generates an access token and returns the user's details along with the access token.
 * If the passwords do not match, the function returns an error message indicating that the email/password is incorrect.
 * If the email and password are not provided, the function returns an error message indicating that they are required.
 * If any other error occurs during the login process, the function returns a server error message.
 *
 * @throws {Error} - If there is an error during the login process.
 */
export const login = async (request, response, next) => {
  if (request.user) {
    return response.status(200).json({
      message: "User is logged in",
      isLoggedIn: true,
      user: {
        email: request.user.email,
        name: request.user.name,
        id: request.user.id.toString(),
      },
    });
  }

  try {
    if ("email" in request.body && "password" in request.body) {
      const userModal = new User({ ...request.body });

      // Checking user is  present in the database
      const user = await User.findOne({ email: userModal.email });

      if (user) {
        // Comparing the user password with encrypted password
        const isMatched = await bcrypt.compare(
          userModal.password,
          user.password
        );

        if (isMatched) {
          // Generating the access token
          const accessToken = GenerateToken(user);

          return response.status(200).json({
            message: "User is logged in.",
            isLoggedIn: true,
            user: {
              email: user.email,
              name: user.name,
              id: user.id.toString(),
              userType: user.userType,
              accessToken: accessToken,
            },
            accessToken: accessToken,
          });
        } else {
          return response.status(401).json({
            message: "Email/password is incorrect",
            isLoggedIn: false,
          });
        }
      } else {
        return response
          .status(200)
          .json({ message: "There is no account associated with this email." });
      }
    } else {
      return response.status(400).json({
        message: "Email and password are required",
        isAccountCreated: false,
      });
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

/**
 * Validates if a user is logged in.
 *
 * @function validateUser
 * @param {Object} request - The request object containing the user's information.
 * @param {Object} response - The response object to send back to the client.
 * @param {Function} next - The next middleware function in the chain.
 *
 * @returns {Object} - A JSON response with a success message, a flag indicating if the user is logged in, and the user's details.
 * If the user is logged in, the function returns the user's details.
 * If the user is not logged in, the function throws an error indicating that the user is not logged in.
 *
 * @throws {Error} - If the user is not logged in.
 */
export const validateUser = async (request, response, next) => {
  if (request.user) {
    return response.status(200).json({
      message: "User is logged in",
      isLoggedIn: true,
      user: {
        email: request.user.email,
        name: request.user.name,
        id: request.user.id.toString(),
      },
    });
  }

  try {
    throw new Error("User is not logged in");
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
