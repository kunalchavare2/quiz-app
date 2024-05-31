import { Router } from "express";
const router = Router();

/** import middlewares */
import validateToken from "./../middlewares/isAuthenticated.js";

/** import controllers */
import * as QuizController from "./../controllers/quizController.js";

/** Quiz Routes API */

/**
 * @swagger
 * paths:
 *   /api/topics:
 *     get:
 *       summary: Get all topics
 *       description: Retrieves all topics available in the system.
 *       responses:
 *         '200':
 *           description: Successful response. Returns a list of all topics.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique identifier of the topic.
 *                       example: 6123456789abcdef12345678
 *                     name:
 *                       type: string
 *                       description: The name of the topic.
 *                       example: History
 *                     description:
 *                       type: string
 *                       description: The description of the topic.
 *                       example: Learn about historical events and figures.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 *                     example: Internal Server Error.
 */

router.get("/topics", QuizController.allTopics);

/**
 * @swagger
 * paths:
 *   /api/topics/select:
 *     post:
 *       summary: Select user topics
 *       description: Allows a user to select topics of interest.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the topic.
 *                     example: 6123456789abcdef12345678
 *                   name:
 *                     type: string
 *                     description: The name of the topic.
 *                     example: History
 *       responses:
 *         '200':
 *           description: Topics selected successfully. Returns the updated list of selected topics.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   user:
 *                     type: string
 *                     description: The user's ID.
 *                   topics:
 *                     type: array
 *                     description: List of selected topics.
 *                     items:
 *                       type: object
 *                       properties:
 *                         topicId:
 *                           type: string
 *                           description: The unique identifier of the topic.
 *                           example: 6123456789abcdef12345678
 *                         name:
 *                           type: string
 *                           description: The name of the topic.
 *                           example: History
 *         '401':
 *           description: Unauthorized. User authentication failed.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message indicating the cause of unauthorized access.
 *         '404':
 *           description: Not Found. Request body is missing.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Error message indicating that the request body is missing.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 */
router.post("/topics/select", validateToken, QuizController.selectTopics);
/**
 * @swagger
 * paths:
 *   /api/topics/select:
 *     get:
 *       summary: Get user topics
 *       description: Retrieves the topics selected by the authenticated user.
 *       responses:
 *         '200':
 *           description: User topics retrieved successfully. Returns the list of user-selected topics.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/SelectedTopic'
 *         '401':
 *           description: Unauthorized. User authentication failed.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message indicating the cause of unauthorized access.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 * components:
 *   schemas:
 *     SelectedTopic:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the selected topic.
 *           example: 6123456789abcdef12345678
 *         user:
 *           type: string
 *           description: The user's ID who selected the topic.
 *         topics:
 *           type: array
 *           description: List of selected topics.
 *           items:
 *             type: object
 *             properties:
 *               topicId:
 *                 type: string
 *                 description: The unique identifier of the topic.
 *                 example: 6123456789abcdef12345678
 *               name:
 *                 type: string
 *                 description: The name of the topic.
 *                 example: History
 */
router.get("/topics/select", validateToken, QuizController.usersTopics);

/**
 * @swagger
 * paths:
 *   /api/questions/{topicId}:
 *     get:
 *       summary: Get questions by topic
 *       description: Retrieves questions related to a specific topic.
 *       parameters:
 *         - in: path
 *           name: topicId
 *           required: true
 *           schema:
 *             type: string
 *           description: The ID of the topic for which questions are to be retrieved.
 *       responses:
 *         '200':
 *           description: Questions retrieved successfully. Returns a list of questions related to the specified topic.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Question'
 *         '400':
 *           description: Bad Request. Missing topic ID.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Error message indicating that the topic ID is required.
 *         '404':
 *           description: Not Found. Specified topic not found.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Error message indicating that the specified topic was not found.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the question.
 *           example: 6123456789abcdef12345678
 *         category:
 *           type: string
 *           description: The category or topic of the question.
 *           example: History
 *         question:
 *           type: string
 *           description: The question text.
 *           example: Who was the first president of the United States?
 *         correct_answer:
 *           type: string
 *           description: The correct answer to the question.
 *           example: George Washington
 *         incorrect_answers:
 *           type: array
 *           description: List of incorrect answer options for the question.
 *           items:
 *             type: string
 *             example: John Adams
 *             example: Thomas Jefferson
 *             example: Abraham Lincoln
 */
router.get("/questions/:topicId", QuizController.questionsByTopic);

/**
 * @swagger
 * paths:
 *   /api/quiz-exam:
 *     get:
 *       summary: Generate quiz exam
 *       description: Generates a quiz exam for the authenticated user.
 *       parameters:
 *         - in: query
 *           name: topicId
 *           schema:
 *             type: string
 *           description: Optional. The ID of the topic for which to generate the quiz exam.
 *       responses:
 *         '200':
 *           description: Quiz exam generated successfully. Returns a set of quiz questions and their count.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   questions:
 *                     type: array
 *                     description: List of quiz questions.
 *                     items:
 *                       $ref: '#/components/schemas/QuizQuestion'
 *                   count:
 *                     type: integer
 *                     description: The count of quiz questions generated.
 *         '401':
 *           description: Unauthorized. User authentication failed.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message indicating the cause of unauthorized access.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 * components:
 *   schemas:
 *     QuizQuestion:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the question.
 *           example: 6123456789abcdef12345678
 *         category:
 *           type: string
 *           description: The category or topic of the question.
 *           example: History
 *         question:
 *           type: string
 *           description: The question text.
 *           example: Who was the first president of the United States?
 *         correct_answer:
 *           type: string
 *           description: The correct answer to the question.
 *           example: George Washington
 *         incorrect_answers:
 *           type: array
 *           description: List of incorrect answer options for the question.
 *           items:
 *             type: string
 *             example: John Adams
 *             example: Thomas Jefferson
 *             example: Abraham Lincoln
 */

router.get("/quiz-exam", validateToken, QuizController.quizExam);

/**
 * @swagger
 * paths:
 *   /api/quiz-submit:
 *     post:
 *       summary: Submit quiz answers
 *       description: Submits the user's answers for a quiz exam and calculates the score.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The ID of the question.
 *                   answer:
 *                     type: string
 *                     description: The user's answer to the question.
 *       responses:
 *         '200':
 *           description: Quiz answers submitted successfully. Returns the user's score and exam statistics.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   userScore:
 *                     type: integer
 *                     description: The user's score for the submitted quiz.
 *                   totalScore:
 *                     type: integer
 *                     description: The total score possible for the quiz.
 *                   totalQuestions:
 *                     type: integer
 *                     description: The total number of questions in the quiz.
 *                   totalCorrectAnswers:
 *                     type: integer
 *                     description: The total number of correct answers submitted by the user.
 *         '401':
 *           description: Unauthorized. User authentication failed.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message indicating the cause of unauthorized access.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 */
router.post("/quiz-submit", validateToken, QuizController.quizSubmit);

/**
 * @swagger
 * paths:
 *   /api/all-exams:
 *     get:
 *       summary: Get all exams
 *       description: Retrieves detailed information about all exams taken by the authenticated user.
 *       responses:
 *         '200':
 *           description: Exams retrieved successfully. Returns aggregated data about all exams taken by the user.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique identifier of the exam.
 *                     user:
 *                       $ref: '#/components/schemas/User'
 *                     userScore:
 *                       type: integer
 *                       description: The user's score for the exam.
 *                     totalScore:
 *                       type: integer
 *                       description: The total score possible for the exam.
 *                     totalQuestions:
 *                       type: integer
 *                       description: The total number of questions in the exam.
 *                     totalCorrectAnswers:
 *                       type: integer
 *                       description: The total number of correct answers submitted by the user in the exam.
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: The date and time when the exam was created.
 *                     questions:
 *                       type: array
 *                       description: List of questions included in the exam with their details.
 *                       items:
 *                         $ref: '#/components/schemas/ExamQuestion'
 *         '401':
 *           description: Unauthorized. User authentication failed.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: Error message indicating the cause of unauthorized access.
 *         '500':
 *           description: Internal Server Error. Something went wrong on the server side.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   error:
 *                     type: string
 *                     description: A message indicating the error that occurred on the server.
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the user.
 *         name:
 *           type: string
 *           description: The name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user.
 *     ExamQuestion:
 *       type: object
 *       properties:
 *         question:
 *           type: object
 *           description: The details of the question included in the exam.
 *           properties:
 *             _id:
 *               type: string
 *               description: The unique identifier of the question.
 *             category:
 *               type: string
 *               description: The category or topic of the question.
 *             question:
 *               type: string
 *               description: The question text.
 *             correct_answer:
 *               type: string
 *               description: The correct answer to the question.
 *             incorrect_answers:
 *               type: array
 *               description: List of incorrect answer options for the question.
 *               items:
 *                 type: string
 */
router.get("/all-exams", validateToken, QuizController.allExams);

/**
 * @swagger
 * /api/leaderboard:
 *   get:
 *     summary: Retrieve leaderboard data sorted by average scores
 *     description: |
 *       This endpoint retrieves leaderboard data by sorting users based on their average scores.
 *     responses:
 *       '200':
 *         description: Successful response. Returns leaderboard data.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LeaderboardEntry'
 *       '500':
 *         description: Internal Server Error. An error occurred while processing the request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message indicating the cause of the failure.
 */

// Define LeaderboardEntry schema separately
/**
 * @swagger
 * components:
 *   schemas:
 *     LeaderboardEntry:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the leaderboard entry.
 *         user:
 *           type: string
 *           description: ID of the user associated with the entry.
 *         averageScore:
 *           type: number
 *           description: Average score of the user.
 *       required:
 *         - _id
 *         - user
 *         - averageScore
 */

router.get("/leaderboard", QuizController.leaderboard);

export default router;
