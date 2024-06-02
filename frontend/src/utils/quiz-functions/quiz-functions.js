import Axios from "axios";
import {
  QUIZ_ALL_EXAMS_URL,
  QUIZ_EXAM_SUBMIT_URL,
  QUIZ_EXAM_URL,
  QUIZ_LEADERBOARD_URL,
  QUIZ_TOPICS_SUBMIT_URL,
} from "../constant/url-const";
import Cookies from "universal-cookie";

/**
 * Function to generate headers for API requests.
 *
 * @returns {Object} - An object containing the necessary headers for API requests.
 *
 * @throws Will throw an error if the access token is not found in the cookies.
 *
 * @example
 * const headers = getHeaders();
 * console.log(headers);
 * // Output: { withCredentials: true, headers: { "Content-Type": "application/json", Authorization: "Bearer <access_token>" } }
 */
export const getHeaders = () => {
  const cookies = new Cookies();
  return {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("access_token")}`,
    },
  };
};

/**
 * Fetches the quiz questions from the server and shuffles the answers.
 *
 * @param {string} [search=""] - An optional search parameter to filter the quiz questions.
 *
 * @returns {Promise<any>} - A promise that resolves to the parsed quiz questions data or rejects with an error.
 *
 * @throws Will throw an error if the request fails or if the server returns an invalid response.
 *
 * @example
 * getExamQues()
 *.then(parsedData => {
 *     console.log(parsedData);
 *   })
 *.catch(error => {
 *     console.error(error);
 *   });
 */
export const getExamQues = async (search = "") => {
  try {
    const response = await Axios.get(QUIZ_EXAM_URL + search, {
     ...getHeaders(),
    });
    if (response.status === 200) {
      const parsedData = JSON.parse(JSON.stringify(response.data));

      // To shuffle the answers
      parsedData.questions.forEach((value, index) => {
        let shuffled = [...value.incorrect_answers]
         .map((value) => ({ value, sort: Math.random() }))
         .sort((a, b) => a.sort - b.sort)
         .map(({ value }) => value);

        parsedData.questions[index].incorrect_answers = shuffled;
      });
      console.log(parsedData);
      return Promise.resolve(parsedData);
    }
    return Promise.reject("Invalid response");
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Submits the user's exam answers to the server.
 *
 * @param {Object} data - The data to be sent to the server.
 * @param {Array} data.questions - The array of questions with user's answers.
 * @param {string} data.questions[].question - The question text.
 * @param {string} data.questions[].answer - The user's selected answer.
 * @param {number} data.questions[].questionId - The unique identifier of the question.
 *
 * @returns {Promise<any>} - A promise that resolves to the server response or rejects with an error.
 *
 * @throws Will throw an error if the request fails or if the server returns an invalid response.
 *
 * @example
 * handleSubmitExam({
 *   questions: [
 *     { question: 'What is JavaScript?', answer: 'Programming language', questionId: 1 },
 *     { question: 'What is React?', answer: 'Library for building user interfaces', questionId: 2 },
 *   ],
 * })
 *.then(response => {
 *     console.log(response.data);
 *   })
 *.catch(error => {
 *     console.error(error);
 *   });
 */
export const handleSubmitExam = async (data) => {

  try {
    const response = await Axios.post(
      QUIZ_EXAM_SUBMIT_URL,
      JSON.stringify(data),
      {...getHeaders() }
    );

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Submits the selected topics to the server for further exam generation.
 *
 * @param {Object} data - The data to be sent to the server.
 * @param {Array} data.topics - The selected topics for exam generation.
 *
 * @returns {Promise<any>} - A promise that resolves to the server response or rejects with an error.
 *
 * @throws Will throw an error if the request fails or if the server returns an invalid response.
 *
 * @example
 * handleSubmitTopics({ topics: ['JavaScript', 'React', 'Redux'] })
 * .then(response => {
 *     console.log(response.data);
 *   })
 * .catch(error => {
 *     console.error(error);
 *   });
 */
export const handleSubmitTopics = async (data) => {
  try {
    const response = await Axios.post(
      QUIZ_TOPICS_SUBMIT_URL,
      JSON.stringify(data),
      {...getHeaders() }
    );

    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Fetches all available exams from the server.
 *
 * @returns {Promise<any>} - A promise that resolves to the server response containing all available exams or rejects with an error.
 *
 * @throws Will throw an error if the request fails or if the server returns an invalid response.
 *
 * @example
 * getAllExams()
 * .then(response => {
 *     console.log(response.data);
 *   })
 * .catch(error => {
 *     console.error(error);
 *   });
 */
export const getAllExams = async () => {
  try {
    // Send a GET request to the server to fetch all available exams
    const response = await Axios.get(QUIZ_ALL_EXAMS_URL, {
     ...getHeaders(), // Include necessary headers for authentication
    });

    // Resolve the promise with the server response
    return Promise.resolve(response);
  } catch (error) {
    // Reject the promise with the error if the request fails
    return Promise.reject(error);
  }
};

/**
 * Fetches leaderboard data from the server.
 *
 * @returns {Promise<any>} - A promise that resolves to the leaderboard data or rejects with an error.
 *
 * @throws Will throw an error if the request fails or if the server returns an invalid response.
 *
 * @example
 * getLeaderBoard()
 *  .then(leaderboardData => {
 *     console.log(leaderboardData);
 *   })
 *  .catch(error => {
 *     console.error(error);
 *   });
 */
export const getLeaderBoard = async () => {
  try {
    const response = await Axios.get(QUIZ_LEADERBOARD_URL, {
     ...getHeaders(),
    });

    // Resolve the promise with the response data
    return Promise.resolve(response);
  } catch (error) {
    // Reject the promise with the error
    return Promise.reject(error);
  }
};
