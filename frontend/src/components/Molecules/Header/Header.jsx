import React, { useState } from "react";
import "./Header.styled.js";
import HeaderStyle, {
  Avatar,
  HeaderNavStyle,
  HeaderWrapper,
  Wrapper,
} from "./Header.styled.js";
import Logo from "../../Atoms/Logo/Logo.jsx";
import { IoIosClose, IoIosMenu } from "react-icons/io";

import { useNavigate } from "react-router-dom";
import { ReactComponent as Icon } from "../../../assets/images/image.svg";
import Modal from "../Modal/Modal.jsx";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/AuthSlice/AuthSlice.js";
import NavIcon from "../../Atoms/NavIcon/NavIcon.jsx";
import IconButton from "./../../Atoms/IconButton/IconButton";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [menu, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNav = (e) => {
    if (e.target.className === "icon-text") {
      setMenuOpen(false);
    }
  };

  return (
    <HeaderStyle>
      <HeaderWrapper>
        <Logo showText={true} />
        <HeaderNavStyle className={menu ? "open" : "close"} onClick={handleNav}>
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
          <IconButton
            width="40px"
            height="40px"
            className="closeBtn"
            onClick={() => setMenuOpen(false)}
          >
            <IoIosClose />
          </IconButton>
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
          <IconButton className="hamMenu" onClick={() => setMenuOpen(!menu)}>
            <IoIosMenu />
          </IconButton>
        </Wrapper>
      </HeaderWrapper>
    </HeaderStyle>
  );
};

export default Header;
