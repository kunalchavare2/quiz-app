import React, { useState } from "react";
import "./Header.styled.js";
import HeaderStyle, {
  Avatar,
  HeaderNavStyle,
  HeaderWrapper,
  Wrapper,
} from "./Header.styled.js";
import Logo from "../../Atoms/Logo/Logo.jsx";

import { useNavigate } from "react-router-dom";
import IconButton from "../../Atoms/IconButton/IconButton.jsx";
import { ReactComponent as Icon } from "../../../assets/images/image.svg";
import Button from "../../Atoms/Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/AuthSlice/AuthSlice.js";
import NavIcon from "../../Atoms/NavIcon/NavIcon.jsx";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <HeaderStyle>
      <HeaderWrapper>
        <Logo showText={true} />
        <HeaderNavStyle>
          <NavIcon icon={""} text="Home" link="/home" hideIcon={true} />
          <NavIcon
            icon={""}
            text="Topics"
            link="/home/topics"
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="Users Topics"
            link="/home/select"
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="My Exams"
            link="/home/exams"
            hideIcon={true}
          />
          <NavIcon
            icon={""}
            text="Leaderboard"
            link="/home/leaderboard"
            hideIcon={true}
          />
        </HeaderNavStyle>
        <Wrapper>
          <Avatar>
            <IconButton
              width="40px"
              height="40px"
              onClick={() => setOpen(!isOpen)}
            >
              <Icon />
            </IconButton>
            <Modal
              isOpen={isOpen}
              setOpen={setOpen}
              callback={() => {
                dispatch(logout());
                navigate("/auth/login");
              }}
            />
          </Avatar>
        </Wrapper>
      </HeaderWrapper>
    </HeaderStyle>
  );
};

Header.propTypes = {
  /**
   * This will decide which type of header it is
   */
  // type: PropTypes.oneOf(["denger", "warning", "default"]),
  // title: PropTypes.string,
};

Header.defaultProps = {
  // type: "default",
  // title: "Hello",
};

export default Header;
