import React from "react";
import { ExamHeader, ExamQuestions, ExamWrapper } from "./Exam.styled";
import Question from "../Question/Question";

const Exam = (props) => {
  const {
    totalQuestions,
    totalCorrectAnswers,
    userScore,
    totalScore,
    questions,
    createdAt,
    index,
  } = props;

  const date = new Date(createdAt);
  return (
    <ExamWrapper>
      <ExamHeader>
        <h1>Exam Number : {index}</h1>
        <span>Total Questions: {totalQuestions}</span>
        <span>Correct Answers: {totalCorrectAnswers}</span>
        <span>
          Score: {userScore}/{totalScore}
        </span>
        <span>Date: {date.toDateString()}</span>
      </ExamHeader>
      <ExamQuestions>
        {questions.map((question, index) => (
          <Question {...question} index={index + 1} />
        ))}
      </ExamQuestions>
    </ExamWrapper>
  );
};

export default Exam;
