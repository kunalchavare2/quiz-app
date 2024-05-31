import styled from "styled-components";
import { color, fontSize } from "../../../utils/constant/style-const";
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  position: relative;

  .link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: ${color.blue500};
    text-decoration: none;
    align-self: strech;
  }
  .active {
    color: ${color.green100};
  }
  .active > p {
    color: ${color.green100};
  }
  .icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .icon {
    font-size: ${fontSize.titleLarge};
  }
  p {
    color: ${(props) => props.theme.primary};
    text-align: center;
    font-size: ${fontSize.captionRegular};
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const CountStyle = styled.div`
  background-color: ${color.denger};
  font-size: ${fontSize.captionSmall};
  color: ${color.white};
  width: 16px;
  height: 16px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  position: absolute;
  top: -0.6rem;
  right: -0.5rem;
`;
