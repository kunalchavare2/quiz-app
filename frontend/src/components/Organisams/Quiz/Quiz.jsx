import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import {
  getExamQues,
  handleSubmitExam,
} from "./../../../utils/quiz-functions/quiz-functions";
import { toast } from "react-toastify";
import {
  Instructions,
  QuizWrapper,
  Title,
  List,
  QuizForm,
} from "./Quiz.styled";
import LoadingImg from "./../../Atoms/Loading/LoadingImg";
import Button from "../../Atoms/Button/Button";
import { quizInstructions } from "../../../utils/constant/quiz-const";
import RadioButtonV2 from "./../../Atoms/RadioButtonV2/RadioButtonV2";
import QuizResult from "./../../Molecules/QuizResult/QuizResult";

/**
 * The main Quiz component.
 *
 * @returns {JSX.Element} - The JSX for the Quiz component.
 */
const Quiz = () => {
  // State variables
  const [status, setStatus] = useState({
    loading: true, // Indicates whether the data is loading
    data: [], // The fetched data
    error: null, // Any error encountered during data fetching
  });

  const [results, setResults] = useState(); // The results of the quiz

  const [quiz, setQuiz] = useState({
    questions: [], // The fetched quiz questions
    answers: [], // The user's answers
    isSubmitted: false, // Indicates whether the quiz has been submitted
    isStarted: false, // Indicates whether the quiz has been started
    currQues: 0, // The index of the current question
  });

  const methods = useForm(); // The form methods from react-hook-form
  const location = useLocation(); // The current location object

  // Fetch quiz questions when the component mounts or the search query changes
  useEffect(() => {
    if (status.data.length === 0) {
      getExamQues(location.search)
        .then((results) => {

          setQuiz((prev) => ({
            ...prev,
            questions: results.questions,
          }));

          setStatus({
            loading: false,
            data: results,
            error: null,
          });
        })
        .catch((err) => {
          setStatus({
            loading: false,
            data: [],
            error: err.message,
          });
        });
    }
  }, [status.data.length, location.search]);

  // Submit quiz answers when all answers are provided and the quiz is submitted
  useEffect(() => {
    if (quiz.answers.length === status.data.count && quiz.isSubmitted) {
      handleSubmitExam(quiz.answers)
        .then((response) => {
          toast.success("Successfully submitted");

          setResults(response.data);

          setQuiz((prev) => ({
            answers: [],
            questions: [],
            isSubmitted: true,
            isStarted: false,
            currQues: 0,
          }));
        })
        .catch((err) => {
          toast.error("Something went wrong! Please try again.");
  
        });
    }
  }, [quiz, status]);

  /**
   * Handles the submission of quiz answers.
   *
   * @param {Object} data - The form data containing the selected answers.
   * @returns {void}
   */
  const onSubmit = methods.handleSubmit(async (data) => {
    // Create an answer object with the question id and selected answer
    const answer = {
      id: quiz.questions[quiz.currQues]["_id"],
      answer: data[quiz.currQues],
    };

    // Check if the answer for the current question is already present in the answers array
    const present = quiz.answers.find(
      (answer) => answer.id === quiz.questions[quiz.currQues]["_id"]
    );

    // If the answer is not present, add it to the answers array
    if (!present) {
      setQuiz((prev) => ({
        ...prev,
        answers: [...prev.answers, answer],
      }));
    }

    // If the current question is not the last question, move to the next question
    if (quiz.currQues < quiz.questions.length - 1) {
      setQuiz((prev) => ({
        ...prev,
        currQues: prev.currQues + 1,
      }));

      // Reset the form
      methods.reset();
    } else {
      // If the current question is the last question, set the isSubmitted flag to true
      setQuiz((prev) => ({
        ...prev,
        isSubmitted: true,
      }));
    }
  });

  // Render loading state
  if (status.loading) {
    return (
      <QuizWrapper>
        <LoadingImg />
      </QuizWrapper>
    );
  }

  // Render error state
  if (status.error) {
    return (
      <QuizWrapper>
        <p>{status.error}</p>
        <Button
          title="Refresh"
          onClick={() => {
            setStatus({
              loading: true,
              data: [],
              error: null,
            });
          }}
        />
      </QuizWrapper>
    );
  }

  // Render instructions
  if (!quiz.isStarted && !quiz.isSubmitted) {
    return (
      <QuizWrapper>
        <Instructions>
          <Title>Instructions For Quiz!</Title>
          <List>
            {quizInstructions.map((instruction, index) => (
              <li key={instruction.slice(1, 5) + index}>{instruction}</li>
            ))}
          </List>
          <Button
            title="Start Quiz"
            onClick={() => setQuiz((prev) => ({ ...prev, isStarted: true }))}
          />
        </Instructions>
      </QuizWrapper>
    );
  }

  // Render quiz questions
  if (quiz.isStarted) {
    return (
      <QuizWrapper>
        <FormProvider {...methods}>
          <QuizForm noValidate onSubmit={(e) => e.preventDefault()}>
            <Title>{quiz.questions[quiz.currQues].question}</Title>

            <div>
              {quiz.questions[quiz.currQues].incorrect_answers.map((ans) => (
                <RadioButtonV2
                  label={ans}
                  group={quiz.currQues.toString()}
                  name="quiz"
                  validation={{
                    required: {
                      value: true,
                      message: "required",
                    },
                  }}
                  value={ans}
                />
              ))}
            </div>

            <Button
              title={
                quiz.currQues === quiz.questions.length - 1
                  ? "Submit Exam"
                  : "Submit"
              }
              disabled={quiz.isSubmitted}
              onClick={onSubmit}
            />
          </QuizForm>
        </FormProvider>
      </QuizWrapper>
    );
  }

  // Render quiz results
  if (quiz.isSubmitted) {
    return (
      <QuizWrapper>
        <QuizResult results={results} setQuiz={setQuiz} />
      </QuizWrapper>
    );
  }
};

export default Quiz;
