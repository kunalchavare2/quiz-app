import mongoose from "mongoose";
const { Schema } = mongoose;

/** Question model */
/**
 * Represents a question schema for a quiz application.
 * @constructor
 * @param {Object} schema - The schema definition for the question.
 * @param {Object} schema.type - The type of the question.
 * @param {Object} schema.difficulty - The difficulty level of the question.
 * @param {Object} schema.category - The category of the question.
 * @param {Object} schema.question - The question text.
 * @param {Object} schema.correct_answer - The correct answer of the question.
 * @param {Array} schema.incorrect_answers - The incorrect answers of the question.
 * @param {Object} options - The options for the schema.
 * @param {boolean} options.strict - Whether to apply strict mode to the schema.
 */
const QuestionModel = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: [{ type: String }],
  },
  { strict: false }
);

/**
 * Creates a Mongoose model for the question schema.
 * @type {mongoose.Model}
 */
const Question = mongoose.model("quiz_data", QuestionModel);

export default Question;
