import styled, { css } from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

const CategoryTypes = styled.p`
  line-height: 16px;
  color: ${(props) => props.tcolor ?? "#7E858E"};
  background-color: transparent;
  font-weight: ${fontWeight.regular};

  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return fontSize.titleSmall;
      case "medium":
        return fontSize.titleMedium;
      case "large":
        return fontSize.titleLarge;
      default:
        return props.size;
    }
  }};
`;
export default CategoryTypes;
