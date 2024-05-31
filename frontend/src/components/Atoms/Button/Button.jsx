import StyledButton from "./Button.styled";
import PropTypes from "prop-types";

const Button = ({ title, onClick, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {title && title}
    </StyledButton>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
