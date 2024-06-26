import styled from "styled-components";
import { color, fontWeight } from "../../../utils/constant/style-const";

export const SignUpFormWrapper = styled.div`
  padding: 2rem;
  border-radius: 8px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  max-width: 350px;
  width: 100%;
  gap: 1rem;
`;

export const SignUpFormHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${color.black};
    margin-bottom: 1rem;
  }

  .sub-title {
    font-size: 1rem;
    font-weight: ${fontWeight.regular};
    color: #7e858e;
    margin-bottom: 1rem;
  }
`;

export const SignUpFormMain = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SignUpFormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: ${fontWeight.regular};
  color: #7e858e;
  margin-bottom: 1rem;

  a {
    color: #0b69ff;
    text-decoration: none;
  }
`;
