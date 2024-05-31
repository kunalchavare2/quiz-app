import mongoose from "mongoose";

/**
 * Defines the schema for a User document in MongoDB.
 * @constructor
 * @property {String} name - The user's name.
 * @property {String} email - The user's email.
 * @property {Number} [phone] - The user's phone number. Optional.
 * @property {String} password - The user's password.
 */

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: { type: Number, required: false },
  password: {
    type: String,
    required: true,
  },
});

/**
 * Creates a Mongoose model for a User document.
 * @type {mongoose.Model<mongoose.Document, mongoose.Model<any, any, any>>}
 */
const User = mongoose.model("User", UserSchema);

export { User };
