import styled from "styled-components";
import { color, fontWeight } from "../../../utils/constant/style-const";

const StyledButton = styled.button`
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.color ?? "#2DCA73"};
  padding: 0.5rem 1.2rem 0.5rem 1.2rem;
  font-size: 1rem;
  color: ${color.white};
  font-weight: ${fontWeight.medium};
  line-height: 1.5rem;
  text-align: center;
  border-radius: 4px;
  gap: 20px;
  &:disabled {
    background-color: #7e858e;
    cursor: not-allowed;
  }
  &:disabled:hover {
    filter: brightness(100%);
    cursor: not-allowed;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export default StyledButton;
