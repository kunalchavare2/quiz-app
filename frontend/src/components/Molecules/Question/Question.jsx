import React from "react";
import {
  AnsList,
  QuestionInfo,
  QuestionTitle,
  QuestionWrapper,
} from "./Question.styled";

const Question = (props) => {
  const { answer, question, index } = props;


  return (
    <QuestionWrapper>
      <QuestionTitle>
        {index} {question.question}
      </QuestionTitle>
      <QuestionInfo>
        <span>Category : {question.category}</span>
        <span>Difficulty : {question.difficulty}</span>
      </QuestionInfo>
      <AnsList>
        {[...question.incorrect_answers, question.correct_answer].map(
          (data) => {
            if (data === answer && answer === question.correct_answer) {
              return <li className="correct">{data}</li>;
            }

            if (data === answer && answer !== question.correct_answer) {
              return <li className="wrong">{data}</li>;
            }

            if (data === question.correct_answer) {
              return <li className="correct-ans">{data}</li>;
            }
            
            return <li>{data}</li>;
          }
        )}
      </AnsList>
    </QuestionWrapper>
  );
};

export default Question;
