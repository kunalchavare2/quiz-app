import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";

export const CheckBoxWrapper = styled.div`
  width: 100%;
  display: flex;

  label {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    background-color: ${color.gray100 + "77"};
    padding: 0.5rem;
  }
`;
