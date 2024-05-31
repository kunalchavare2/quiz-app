import styled from "styled-components";
import { device } from "../../../utils/constant/style-const";

export const SelectTopicWrapper = styled.div``;

export const SelectTopicForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
`;

export const FormItemsWrapper = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  gap: 2rem;
  /* margin: 0 auto; */
  justify-items: start;
  align-items: baseline;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (${device.mobileL}) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;


export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
