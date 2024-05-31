import React, { useEffect, useState } from "react";
import {
  Instructions,
  List,
  QuizForm,
  QuizResult,
  QuizWrapper,
  Title,
} from "./Quiz.styled";
import Axios from "axios";
import { QUIZ_EXAM_URL } from "../../../utils/constant/url-const";
import LoadingImg from "../../Atoms/Loading/LoadingImg";
import Button from "./../../Atoms/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import RadioButtonV2 from "./../../Atoms/RadioButtonV2/RadioButtonV2";
import { FormProvider, useForm } from "react-hook-form";
import {
  getHeaders,
  handleSubmitExam,
} from "../../../utils/quiz-functions/quiz-functions";
import { toast } from "react-toastify";

import Trophy from "../../../assets/images/trophy.png";

const Quiz = () => {
  const [status, setStatus] = useState({
    loading: true,
    data: [],
    error: null,
  });

  const [results, setResults] = useState();

  const [quiz, setQuiz] = useState({
    questions: [],
    answers: [],
    isSubmitted: false,
    isStarted: false,
    currQues: 0,
  });

  const navigate = useNavigate();
  const methods = useForm();
  const location = useLocation();

  useEffect(() => {
    if (status.data.length === 0) {
      Axios.get(QUIZ_EXAM_URL + location.search, { ...getHeaders() })
        .then((response) => {
          console.log(response);
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

            setQuiz((prev) => ({
              ...prev,
              questions: parsedData.questions,
            }));

            setStatus({
              loading: false,
              data: parsedData,
              error: null,
            });
          }
        })
        .catch((err) => {
          setStatus({
            loading: false,
            data: [],
            error: err.message,
          });
        });
    }
  }, [status.data.length]);

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
          console.log(err);
        });
    }
  }, [quiz, status]);

  const onSubmit = methods.handleSubmit(async (data) => {
    const answer = {
      id: quiz.questions[quiz.currQues]["_id"],
      answer: data[quiz.currQues],
    };
    console.log(quiz);

    const present = quiz.answers.find(
      (answer) => answer.id === quiz.questions[quiz.currQues]["_id"]
    );

    if (!present) {
      setQuiz((prev) => ({
        ...prev,
        answers: [...prev.answers, answer],
      }));
    }

    if (quiz.currQues < quiz.questions.length - 1) {
      setQuiz((prev) => ({
        ...prev,
        currQues: prev.currQues + 1,
      }));

      methods.reset();
    } else {
      setQuiz((prev) => ({
        ...prev,
        isSubmitted: true,
      }));
    }
  });

  if (status.loading) {
    return (
      <QuizWrapper>
        <LoadingImg />
      </QuizWrapper>
    );
  }

  if (status.error) {
    console.log(status.error);
    return (
      <QuizWrapper>
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

  if (!quiz.isStarted && !quiz.isSubmitted) {
    return (
      <QuizWrapper>
        <Instructions>
          <Title>Instructions For Quiz!</Title>
          <List>
            <li>The quiz consists of multiple-choice questions.</li>
            <li>Use the "Submit" button to proceed to the next question.</li>
            <li>Once selected, your answer will be highlighted.</li>
            <li>
              Once you have answered all the questions, click on the "Submit
              Quiz" button to finalize your answers.
            </li>
            <li>Finally, relax and enjoy the quiz! Good luck!</li>
          </List>
          <Button
            title="Start Quiz"
            onClick={() => setQuiz((prev) => ({ ...prev, isStarted: true }))}
          />
        </Instructions>
      </QuizWrapper>
    );
  }

  if (quiz.isStarted) {
    return (
      <QuizWrapper>
        <FormProvider {...methods}>
          <QuizForm noValidate onSubmit={(e) => e.preventDefault()}>
            <Title>Question {quiz.questions[quiz.currQues].question}</Title>

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

  if (quiz.isSubmitted || true) {
    return (
      <QuizWrapper>
        <QuizResult>
          <div className="result-icon">
            <img src={Trophy} alt="trophy" />
          </div>
          <Title>Congratulations</Title>
          <span className="score-title">Your Score</span>
          <span className="score">
            <span className="score-actual">{results.totalCorrectAnswers}</span>/
            {results.totalQuestions}
          </span>
          <span className="score-description">
            You did a great job, Learn more by taking <span>quiz another</span>
          </span>
          <Button
            title="Go Back"
            onClick={() => {
              setQuiz((prev) => ({
                answers: [],
                questions: [],
                isSubmitted: false,
                isStarted: false,
                currQues: 0,
              }));
              navigate("/home");
            }}
          />
        </QuizResult>
      </QuizWrapper>
    );
  }

  return <QuizWrapper></QuizWrapper>;
};

export default Quiz;
