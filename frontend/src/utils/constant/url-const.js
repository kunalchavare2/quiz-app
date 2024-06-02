const SERVER_deploy_URL = "https://quiz-app-xux4.onrender.com/";

const SERVER_local_URL = "http://localhost:4001/";

export const SERVER_URL =
  process.env.REACT_APP_STAGE === "development"
    ? SERVER_local_URL
    : SERVER_deploy_URL;

console.log(SERVER_URL);

export const LOGIN_URL = SERVER_URL + "api/users/login";

export const VALIDATE_URL = SERVER_URL + "api/users/validate";

export const REGISTER_URL = SERVER_URL + "api/users/register";

export const QUIZ_EXAM_URL = SERVER_URL + "api/quiz-exam";

export const QUIZ_EXAM_SUBMIT_URL = SERVER_URL + "api/quiz-submit";

export const QUIZ_TOPICS_URL = SERVER_URL + "api/topics";

export const QUIZ_TOPICS_SUBMIT_URL = SERVER_URL + "api/topics/select";

export const QUIZ_ALL_EXAMS_URL = SERVER_URL + "api/all-exams";

export const QUIZ_LEADERBOARD_URL = SERVER_URL + "api/leaderboard";
