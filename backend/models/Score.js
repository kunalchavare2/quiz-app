import mongoose from "mongoose";
import { User } from "./user.js";
const { Schema } = mongoose;

/** Score model */
/**
 * Represents a Score schema for MongoDB.
 * @constructor
 * @param {mongoose.Schema} schema - The mongoose schema.
 * @param {mongoose.model} model - The mongoose model.
 */
const ScoreModal = new Schema({
  /**
   * The user's ID.
   * @type {mongoose.SchemaTypes.ObjectId}
   * @memberof ScoreModal
   * @required
   */
  user: { type: mongoose.SchemaTypes.ObjectId, ref: User, required: true },

  /**
   * The total score of the user.
   * @type {Number}
   * @memberof ScoreModal
   * @required
   */
  totalScore: { type: Number, required: true },

  /**
   * The total number of attempted exams.
   * @type {Number}
   * @memberof ScoreModal
   * @required
   */
  totalAttemptedExams: { type: Number, required: true },

  /**
   * The total number of correct answers.
   * @type {Number}
   * @memberof ScoreModal
   * @required
   */
  totalCorrectAnswers: { type: Number, required: true },

  /**
   * The total number of wrong answers.
   * @type {Number}
   * @memberof ScoreModal
   * @required
   */
  totalWrongAnswers: { type: Number, required: true },

  /**
   * The average score of the user.
   * @type {Number}
   * @memberof ScoreModal
   * @required
   */
  averageScore: { type: Number, required: true },
});

/**
 * Mongoose model for Score.
 * @type {mongoose.model}
 * @constant
 * @memberof module:models/score
 */
const Score = mongoose.model("score", ScoreModal);

export default Score;
