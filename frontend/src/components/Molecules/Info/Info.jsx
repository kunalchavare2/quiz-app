import React from "react";
import InfoStyle, { InfoImg, InfoMessage } from "./Info.styled";
import { PropTypes } from "prop-types";

const Info = ({ isSvg = true, img, message }) => {
  return (
    <InfoStyle>
      <InfoImg>
        {!isSvg && <img src={img} alt={message} />}
        {isSvg && img}
      </InfoImg>
      <InfoMessage>{message}</InfoMessage>
    </InfoStyle>
  );
};

Info.prototype = {
  // isSvg is ti check if image in svg or not
  isSvg: PropTypes.bool,
  //img is image component
  img: PropTypes.any.isRequired,
  // message contain text message about state
  message: PropTypes.string.isRequired,
};

export default Info;
