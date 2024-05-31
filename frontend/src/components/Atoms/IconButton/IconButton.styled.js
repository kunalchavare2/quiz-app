import styled from "styled-components";

export const IconBtnStyle = styled.button`
  all: unset;
  border-radius: 300px;
  outline: transparent;
  border: none;
  overflow: hidden;
  width: ${(props) => props.width ?? "2rem"};
  height: ${(props) => props.height ?? "2rem"};
  font-size: ${(props) => props.size ?? "2rem"};

  svg {
    width: ${(props) => props.width ?? "2rem"};
    height: ${(props) => props.height ?? "2rem"};
  }
`;
