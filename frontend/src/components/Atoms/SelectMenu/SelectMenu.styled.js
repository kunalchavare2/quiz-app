import styled from "styled-components";
import {
  color,
  fontSize,
  fontWeight,
} from "../../../utils/constant/style-const";

export const SelectMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;

  .label {
    font-family: inherit;
    font-size: 0.8rem;
    font-weight: ${fontWeight.medium};
    line-height: 16px;
    letter-spacing: 0.01em;
    text-align: left;
    color: ${"#7E858E"};
  }

  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    align-self: stretch;
  }
`;

const SelectMenuStyle = styled.select`
  font-family: inherit;
  width: 100%;
  padding: 0.4rem 0;
  padding-left: 0.3rem;
  border: 2px solid #d7dfe9;
  border-radius: 2px;
  outline: transparent;
  background-color: white;
  color: ${"#7E858E"};
  font-size: 1rem;
  transition: 0.3s ease;
  font-weight: ${fontWeight.regular};
  line-height: 24px;
  text-align: left;

  background-color: ${color.white};

  &::placeholder {
    color: #7e858e99;
  }

  &:focus,
  &:hover {
  }
`;

export default SelectMenuStyle;
