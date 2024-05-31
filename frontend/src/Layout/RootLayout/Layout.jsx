import React from "react";
import { Outlet } from "react-router-dom";
import GlobalStyles from "../../styles/globalstyles";
import Header from "../../components/Molecules/Header/Header";
import { LayoutStyle, OutletStyle } from "./Layout.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <LayoutStyle>
      <GlobalStyles />
      <Header />
      <OutletStyle>
        <Outlet />
      </OutletStyle>
      <ToastContainer position="bottom-center" theme="colored" />
    </LayoutStyle>
  );
};

export default Layout;
