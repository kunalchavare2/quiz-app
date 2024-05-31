import mongoose from "mongoose";

/**
 * Defines the schema for a quiz category.
 * @constructor
 * @property {String} name - The name of the quiz category.
 * @property {Number} id - The unique identifier of the quiz category.
 */

const TopicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: { type: Number, required: true },
});

/**
 * Creates a Mongoose model for a quiz category.
 * @type {mongoose.Model<mongoose.Document, mongoose.Model<mongoose.Document>>}
 */
const Topic = mongoose.model("quiz_categories", TopicSchema);

export default Topic;
