import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const HomeStyle = styled.div`
  display: flex;
  height: 100%;
`;

export const HomeContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 700;
    }
  }

  @media (${device.mobileL}) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const HomeImage = styled.div`
  display: none;
  @media (${device.tablet}) {
    flex: 1;
    display: flex;
    align-items: center;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
