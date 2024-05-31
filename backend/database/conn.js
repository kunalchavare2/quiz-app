import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using the provided Atlas URI.
 *
 * @async
 * @function connect
 * @returns {Promise<void>} - A promise that resolves when the database connection is established.
 * @throws Will throw an error if the database connection fails.
 *
 * @example
 * ```javascript
 * import connect from './database';
 *
 * (async () => {
 *   try {
 *     await connect();
 *     console.log('Connected to the database');
 *   } catch (error) {
 *     console.error('Failed to connect to the database:', error);
 *   }
 * })();
 * ```
 */
export default async function connect() {
  await mongoose.connect(process.env.ATLAS_URI);
  console.log("Database Connected");
}
