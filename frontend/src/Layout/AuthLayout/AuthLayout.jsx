import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthLayoutStyle } from "./AuthLayout.styled";

const AuthLayout = () => {
  return (
    <AuthLayoutStyle>
      <Outlet />
      <ToastContainer position="bottom-center" theme="colored" />
    </AuthLayoutStyle>
  );
};

export default AuthLayout;
