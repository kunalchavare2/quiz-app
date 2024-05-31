import styled from "styled-components";

export const TopicStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  border-radius: 8px;
  height: 100%;
  border: 1px solid gray;
  background-color: ${(props) => props.color};
  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }
`;
