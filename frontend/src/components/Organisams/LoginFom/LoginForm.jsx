import React from "react";
import {
  LoginFormFooter,
  LoginFormHeader,
  LoginFormMain,
  LoginFormWrapper,
} from "./LoginForm.styled";
import InputBoxV2 from "../../Molecules/InputBoxV2/InputBoxV2";
import Cookies from "universal-cookie";

import {
  email_validation,
  password_validation,
} from "../../../utils/validations/inputValidations";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../../Atoms/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../../store/AuthSlice/AuthSlice";
import Axios from "axios";
import { LOGIN_URL } from "../../../utils/constant/url-const";

const LoginForm = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (formData) => {
    try {
      const cookies = new Cookies();


      const response = await Axios.post(
        LOGIN_URL,
        { email: formData.email, password: formData.password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("access_token")}`,
          },
        }
      );

      if (response.data.isLoggedIn) {
        if ("accessToken" in response.data) {
          cookies.set("access_token", response.data.accessToken);
        }
        dispatch(login());
        navigate("/home", { replace: true });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmit = methods.handleSubmit(handleLogin);

  return (
    <FormProvider {...methods}>
      <LoginFormWrapper>
        <LoginFormHeader>
          <h1 className="title">Log In</h1>
          <span className="sub-title">Enter your accounts details below.</span>
        </LoginFormHeader>
        <LoginFormMain
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
        >
          <InputBoxV2
            label="Email"
            type="email"
            onChange={() => {}}
            validation={email_validation.validation}
          />
          <InputBoxV2
            label="Password"
            type="password"
            onChange={() => {}}
            validation={password_validation.validation}
          />
          <Button onClick={onSubmit} title="Login" />
        </LoginFormMain>
        <LoginFormFooter>
          <div className="footer-top">
            <span>Don't have an account? </span>
            <Link to="/auth/signup">Sign Up</Link>
          </div>
          <div className="footer-bottom">
            <Link to="/reset-password">Forget your Password</Link>
          </div>
        </LoginFormFooter>
      </LoginFormWrapper>
    </FormProvider>
  );
};

export default LoginForm;
