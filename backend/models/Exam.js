import mongoose from "mongoose";
import { User } from "./user.js";
import Question from "./Question.js";
const { Schema } = mongoose;

/** question model */

/**
 * Represents an Examination data schema.
 * @constructor
 * @property {mongoose.SchemaTypes.ObjectId} user - The user who took the examination.
 * @property {Number} userScore - The user's score in the examination.
 * @property {Number} totalScore - The total score of the examination.
 * @property {Number} totalQuestions - The total number of questions in the examination.
 * @property {Number} totalCorrectAnswers - The total number of correct answers in the examination.
 * @property {Date} createdAt - The date when the examination was created.
 * @property {Array} questions - An array of question objects.
 * @property {mongoose.SchemaTypes.ObjectId} questions.question - The question id.
 * @property {String} questions.answer - The user's answer to the question.
 * @property {Boolean} questions.correct - Whether the user's answer is correct or not.
 */

const ExamModal = new Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: User, required: true }, // The user who took the examination.
  userScore: { type: Number, required: true }, // The user's score in the examination.
  totalScore: { type: Number, required: true }, // The total score of the examination.
  totalQuestions: { type: Number, required: true }, // The total number of questions in the examination.
  totalCorrectAnswers: { type: Number, required: true }, // The total number of correct answers in the examination.
  createdAt: { type: Date, default: Date.now }, // The date when the examination was created.
  questions: [
    {
      question: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Question,
        required: true,
      }, // The question id.
      answer: { type: String, required: true }, // The user's answer to the question.
      correct: { type: Boolean, required: true }, // Whether the user's answer is correct or not.
    },
  ],
});

/**
 * Creates a Mongoose model for the Examination data schema.
 * @param {mongoose.Schema} schema - The schema for the Examination data.
 * @returns {mongoose.Model} - The Mongoose model for the Examination data.
 */
const Exam = mongoose.model("exam_data", ExamModal);

export default Exam;
