import React from "react";
import LogoStyle from "./Logo.styled";
import { ReactComponent as LogoSvg } from "../../../assets/images/NxtWave_logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ showText = true, ...props }) => {
  return (
    <Link to="/home" replace={true}>
      <LogoStyle {...props}>
        <LogoSvg />
      </LogoStyle>
    </Link>
  );
};

export default Logo;
