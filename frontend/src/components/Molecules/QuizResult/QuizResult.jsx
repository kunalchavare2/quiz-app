import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Atoms/Button/Button";
import { QuizResultStyle, Title } from "./QuizResult.styled";
import Trophy from "../../../assets/images/trophy.png";

const QuizResult = ({ results, setQuiz }) => {
  const  navigate  = useNavigate();

  return (
    <QuizResultStyle>
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
    </QuizResultStyle>
  );
};

export default QuizResult;
