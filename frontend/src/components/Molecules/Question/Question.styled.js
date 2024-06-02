import styled from "styled-components";

export const QuestionWrapper = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
`;

export const QuestionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const QuestionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
`;

export const AnsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    padding: 0.5rem 0;
    padding-left: 0.5rem;
    border: 1px solid black;
  }

  .correct,
  .correct-ans {
    color: white;
    background-color: green;
  }

  .wrong {
    color: white;
    background-color: red;
  }
`;
