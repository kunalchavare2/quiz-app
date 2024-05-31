import styled from "styled-components";
import { color } from "../../../utils/constant/style-const";
import Button from "../Button/Button";

export const SearchStyle = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  width: 100%;
  border: 2px solid #d7dfe9;
  margin: 2rem 0;
  border-radius: 3px;
  max-width: 600px;
  padding: 0.5rem 1rem;

  .icon {
    /* position: absolute; */
    left: 1rem;
    fill: #9e9ea7;
    width: 1rem;
    height: 1rem;
  }
`;
export const Inputbar = styled.input`
  width: 100%;
  padding-left: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  font-size: 1rem;
  transition: 0.3s ease;
  background-color: ${color.white};

  &::placeholder {
    color: #7e858e99;
  }

  &:focus,
  &:hover {
  }
`;
export const IconBtn = styled(Button)`
  width: fit-content;
  right: 10px;
  border: none;
  padding: 0;
  background-color: transparent;
  color: ${color.denger};
`;
