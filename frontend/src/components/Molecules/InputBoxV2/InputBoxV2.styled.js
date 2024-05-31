import styled from "styled-components";
import { color, fontWeight } from "../../../utils/constant/style-const";

export const InputBoxV2Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  position: relative;

  /* .error-message {
    left: ${(props) =>
    props.message && props.message.length > 8 ? "10%" : "30%"} !important;
  } */

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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const InputBar = styled.input`
  font-family: inherit;
  width: 100%;
  padding: 0.4rem 0;
  padding-left: 0.3rem;
  border: 2px solid #d7dfe9;
  border-radius: 2px;
  outline: transparent;
  background-color: white;
  color: ${(props) => props.color ?? "#171F46"};
  font-size: 0.9rem;
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

export const TextArea = styled.textarea`
  font-family: inherit;
  width: 100%;
  padding: 1rem;
  border: 2px solid #d7dfe9;
  border-radius: 2px;
  outline: transparent;
  background-color: white;
  color: ${(props) => props.color ?? "#171F46"};
  font-size: 0.9rem;
  line-height: 24px;
  text-align: left;
  transition: 0.3s ease;
  font-weight: ${fontWeight.regular};
  background-color: ${color.white};
  resize: ${(props) => props.resize};

  &::placeholder {
    color: #7e858e99;
  }

  &:focus,
  &:hover {
  }
`;
