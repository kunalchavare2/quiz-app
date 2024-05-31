import React from "react";
import { SignUpPageStyle } from "./SignUpPage.styled";
import SignUpForm from "../../components/Organisams/SignUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <SignUpPageStyle>
      <SignUpForm />
    </SignUpPageStyle>
  );
};

export default SignUpPage;
