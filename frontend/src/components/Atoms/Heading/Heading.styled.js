import styled, { css } from "styled-components";
import { fontSize, fontWeight } from "../../../utils/constant/style-const";

const HeadingTypes = styled.div`
  color: ${(props) => props.tcolor ?? "#171F46"};
  background-color: transparent;
  font-weight: ${fontWeight.semiBold};
  line-height: 24px;

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
export default HeadingTypes;
