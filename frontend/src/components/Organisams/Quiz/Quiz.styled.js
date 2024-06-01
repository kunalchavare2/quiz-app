import styled from "styled-components";
import { list } from "./Quiz.styled";

export const QuizWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  list-style-type: disc;
  padding-left: 1rem;
  color: gray;
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
`;

export const QuizForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
`;
