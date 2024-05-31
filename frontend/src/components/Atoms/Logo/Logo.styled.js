import { styled } from "styled-components";
import { fontSize, fontWeight } from "../../../utils/constant/style-const";

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 82px;
  }
`;

export const BrandName = styled.div`
  font-size: ${fontSize.titleLarge};
  font-weight: ${fontWeight.semiBold};
`;

export default LogoStyle;
