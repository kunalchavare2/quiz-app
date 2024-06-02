import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const ExamWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid black;
  /* margin: 1rem; */
`;

export const ExamHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  gap: 1rem;

  @media (${device.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const ExamQuestions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
