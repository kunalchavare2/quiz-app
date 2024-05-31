import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const TopicsStyle = styled.div`
  padding: 2rem;
`;

export const TopicsGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 2rem;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  @media (${device.mobileL}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;



export const TopicWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
