import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

const InfoStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    aspect-ratio: 1/1;
  }
  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 30%;
  }
`;

export const InfoMessage = styled.div`
  text-align: center;
`;

export default InfoStyle;
