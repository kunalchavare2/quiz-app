import React from "react";
import { IconBtnStyle } from "./IconButton.styled";

const IconButton = ({
  imgUrl,
  children,
  className = "",
  onClick,
  ...props
}) => {
  return (
    <IconBtnStyle className={className} onClick={onClick} {...props}>
      {children}
    </IconBtnStyle>
  );
};

export default IconButton;
