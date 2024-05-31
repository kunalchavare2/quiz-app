import React from "react";
import PropTypes from "prop-types";
import HeadingTypes from "./Heading.styled";

const Heading = ({ type, label, tcolor, ...props }) => {
  return (
    <HeadingTypes size={type} {...props}>
      {label}
    </HeadingTypes>
  );
};
Heading.propTypes = {
  type: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  tcolor: PropTypes.string,
};
Heading.defaultProps = {
  backgroundColor: null,
  tcolor: "#181725",
  type: "small",
  label: "fruits",
};
export default Heading;
