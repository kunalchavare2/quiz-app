import mongoose from "mongoose";
import { User } from "./user.js";
import Topic from "./Topic.js";
const { Schema } = mongoose;

/** Selected Topic Modal  */
/**
 * SelectedTopicModal defines the structure of the SelectedTopic collection in MongoDB.
 * It includes a reference to the User model and an array of topics, each with a reference to the Topic model.
 * Each topic in the array has a unique topicId, a name, and is required.
 *
 * @constructor
 * @property {mongoose.SchemaTypes.ObjectId} user - Reference to the User model.
 * @property {Array.<{topicId: mongoose.SchemaTypes.ObjectId, name: string}>} topics - Array of topics.
 * @property {mongoose.SchemaTypes.ObjectId} topics.topicId - Reference to the Topic model.
 * @property {string} topics.name - Name of the topic.
 */

const SelectedTopicModal = new Schema({
  user: { type: mongoose.SchemaTypes.ObjectId, ref: User, required: true },
  topics: [
    {
      topicId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: Topic,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});

/**
 * SelectedTopic is a Mongoose model that represents the SelectedTopic collection in MongoDB.
 * It uses the SelectedTopicModal schema.
 *
 * @type {mongoose.Model<mongoose.Document, mongoose.Model<mongoose.Document>>}
 */
const SelectedTopic = mongoose.model("selected_topic", SelectedTopicModal);

export default SelectedTopic;
