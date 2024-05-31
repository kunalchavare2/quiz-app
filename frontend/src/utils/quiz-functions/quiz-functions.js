import Axios from "axios";
import {
  QUIZ_ALL_EXAMS_URL,
  QUIZ_EXAM_SUBMIT_URL,
  QUIZ_LEADERBOARD_URL,
  QUIZ_TOPICS_SUBMIT_URL,
} from "../constant/url-const";
import Cookies from "universal-cookie";

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

export const handleSubmitExam = async (data) => {
  console.log(data);
  try {
    const cookies = new Cookies();
    const response = await Axios.post(
      QUIZ_EXAM_SUBMIT_URL,
      JSON.stringify(data),
      { ...getHeaders() }
    );

    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
  }
};

export const handleSubmitTopics = async (data) => {
  try {
    const cookies = new Cookies();
    const response = await Axios.post(
      QUIZ_TOPICS_SUBMIT_URL,
      JSON.stringify(data),
      { ...getHeaders() }
    );

    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
  }
};

export const getAllExams = async () => {
  try {
    const response = await Axios.get(QUIZ_ALL_EXAMS_URL, {
      ...getHeaders(),
    });

    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
  }
};

export const getLeaderBoard = async () => {
  try {
    const response = await Axios.get(QUIZ_LEADERBOARD_URL, {
      ...getHeaders(),
    });

    return Promise.resolve(response);
  } catch (error) {
    Promise.reject(error);
  }
};
