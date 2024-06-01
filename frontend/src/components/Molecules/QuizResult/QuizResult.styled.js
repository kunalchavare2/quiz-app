import styled from "styled-components";

export const QuizResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 500px;
  width: 100%;

  .result-icon {
    width: 100px;

    img {
      max-width: 100%;
    }
  }

  .score-title {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  .score {
    font-size: 2rem;
    .score-actual {
      color: red;
    }
  }

  .score-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
`;
