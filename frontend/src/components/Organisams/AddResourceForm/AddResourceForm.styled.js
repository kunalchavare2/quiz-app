import styled from "styled-components";
import { fontWeight } from "../../../utils/constant/style-const";

export const AddResourceFormWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
  background-color: red;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

export const AddResourceFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 90%;
  max-width: 320px;
  align-self: stretch;

  .form-title {
    font-size: 32px;
    font-weight: ${fontWeight.regular};
    line-height: 40px;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;
