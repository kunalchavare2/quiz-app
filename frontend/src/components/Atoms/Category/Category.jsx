import React from "react";
import PropTypes from "prop-types";
import CategoryTypes from "./Category.styled";

const Category = ({ type, label, tcolor, ...props }) => {
  return (
    <CategoryTypes size={type} {...props}>
      {label}
    </CategoryTypes>
  );
};
Category.propTypes = {
  type: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  tcolor: PropTypes.string,
};
Category.defaultProps = {
  backgroundColor: null,
  tcolor: "#181725",
  type: "small",
  label: "fruits",
};
export default Category;
