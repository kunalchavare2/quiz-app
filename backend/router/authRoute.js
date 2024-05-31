import { Router } from "express";
const router = Router();

/** import controllers */
import * as AuthController from "./../controllers/authController.js";

/** Auth Routes API */

/**
 * @swagger
 * /api/users/register:
 *   paths:
 *      /api/users/register:
 *   post:
 *     summary: User registration
 *     description: Registers a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The password for the user account.
 *                 example: password123
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John Doe
 *     responses:
 *       '200':
 *         description: Successful registration. Returns a message indicating successful account creation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating successful account creation.
 *                   example: Account successfully created.
 *                 isAccountCreated:
 *                   type: boolean
 *                   description: Indicates whether the account was successfully created.
 *                   example: true
 *       '400':
 *         description: Bad Request. Missing email, password, or name in the request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating missing email, password, or name.
 *                   example: Email, password, and name are required.
 *                 isAccountCreated:
 *                   type: boolean
 *                   description: Indicates whether an account has been created.
 *                   example: false
 *       '201':
 *         description: Account already exists. Returns a message indicating that the user already has an account.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating that the user already has an account.
 *                   example: Already have an account!
 *                 isAccountCreated:
 *                   type: boolean
 *                   description: Indicates whether an account has been created.
 *                   example: false
 *       '500':
 *         description: Internal Server Error. Something went wrong on the server side.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: A message indicating the error that occurred on the server.
 *                   example: Internal Server Error.
 *
 */
router.post("/register", AuthController.register);

/**
 * @swagger
 * /api/users/login:
 *   paths:
 *      /api/users/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and generates an access token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The email address of the user.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: The password of the user.
 *                 example: password123
 *     responses:
 *       '200':
 *         description: Successful login. Returns user information and access token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating successful login.
 *                   example: User is logged in.
 *                 isLoggedIn:
 *                   type: boolean
 *                   description: Indicates whether the user is logged in.
 *                   example: true
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: The email address of the logged-in user.
 *                       example: user@example.com
 *                     name:
 *                       type: string
 *                       description: The name of the logged-in user.
 *                       example: John Doe
 *                     id:
 *                       type: string
 *                       description: The unique identifier of the logged-in user.
 *                       example: 6123456789abcdef12345678
 *                     accessToken:
 *                       type: string
 *                       description: The access token generated for the user.
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       '400':
 *         description: Bad Request. Missing email or password in the request body.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating missing email or password.
 *                   example: Email and password are required.
 *                 isAccountCreated:
 *                   type: boolean
 *                   description: Indicates whether an account has been created.
 *                   example: false
 *       '401':
 *         description: Unauthorized. Email or password is incorrect.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: A message indicating incorrect email or password.
 *                   example: Email/password is incorrect.
 *       '500':
 *         description: Internal Server Error. Something went wrong on the server side.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: A message indicating the error that occurred on the server.
 *                   example: Internal Server Error.
 *
 */
router.post("/login", AuthController.login);

export default router;
