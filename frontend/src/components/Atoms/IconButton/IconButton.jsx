import React from "react";
import { IconBtnStyle } from "./IconButton.styled";

const IconButton = ({ imgUrl, children, onClick, ...props }) => {
  return (
    <IconBtnStyle onClick={onClick} {...props}>
      {children}
    </IconBtnStyle>
  );
};

export default IconButton;
