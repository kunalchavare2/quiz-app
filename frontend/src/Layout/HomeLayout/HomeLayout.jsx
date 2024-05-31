import React from "react";
import { Outlet } from "react-router-dom";
import { OutletStyle } from "./HomeLayout.styled";

const HomeLayout = () => {
  return (
    <>
      <OutletStyle>
        <Outlet />
      </OutletStyle>
    </>
  );
};

export default HomeLayout;
