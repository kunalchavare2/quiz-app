import { FormProvider, useForm } from "react-hook-form";

import {
  SignUpFormHeader,
  SignUpFormWrapper,
  SignUpFormMain,
  SignUpFormFooter,
} from "./SignUpForm.styled";
import InputBoxV2 from "../../Molecules/InputBoxV2/InputBoxV2";
import {
  email_validation,
  name_validation,
  password_validation,
  repeat_pass_validation,
} from "../../../utils/validations/inputValidations";
import Button from "../../Atoms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";
import { REGISTER_URL } from "../../../utils/constant/url-const";

const SignUpForm = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const response = await Axios.post(REGISTER_URL, {
        name: formData.name,
        email: formData.email,
        password: formData.newpassword,
      });

      if (response.data.isAccountCreated) {
        toast.success(response.data.message);
        navigate("/auth/login", { replace: true });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const onSubmit = methods.handleSubmit(handleSignUp);
  return (
    <FormProvider {...methods}>
      <SignUpFormWrapper>
        <SignUpFormHeader>
          <h1 className="title">Sign Up</h1>
          <span className="sub-title">Enter your accounts details below.</span>
        </SignUpFormHeader>
        <SignUpFormMain
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <InputBoxV2
            label="Name"
            type="text"
            onChange={(e) => {}}
            validation={name_validation.validation}
          />
          <InputBoxV2
            label="Email"
            type="email"
            onChange={(e) => {}}
            validation={email_validation.validation}
          />
          <InputBoxV2
            label="New Password"
            type="password"
            validation={password_validation.validation}
            onChange={(e) => {}}
          />
          <InputBoxV2
            label="Repeat Password"
            type="password"
            validation={repeat_pass_validation.validation}
            onChange={(e) => {}}
            customValidate={(val, form) => {
              const pass = methods.getValues("newpassword");

              if (val !== pass) return "Passwords do not match";
            }}
          />
          <Button onClick={onSubmit} title="Sign Up" />
        </SignUpFormMain>
        <SignUpFormFooter>
          <div className="footer-top">
            <span>Already have an account? </span>
            <Link to="/auth/login">Log In</Link>
          </div>
        </SignUpFormFooter>
      </SignUpFormWrapper>
    </FormProvider>
  );
};

export default SignUpForm;
