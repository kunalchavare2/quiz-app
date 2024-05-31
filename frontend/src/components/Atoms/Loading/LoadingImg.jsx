import React from "react";
import LoadingGif from "../../../assets/images/loading.svg";
import LoadingImgStyle from "./LoadingImg.styled";

const LoadingImg = ({ ...props }) => {
  return (
    <LoadingImgStyle {...props}>
      <img src={LoadingGif} alt="loading" />
    </LoadingImgStyle>
  );
};

export default LoadingImg;
