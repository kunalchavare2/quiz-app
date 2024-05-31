import React from "react";
import {
  ButtonWrapper,
  HomeContent,
  HomeImage,
  HomeStyle,
} from "./Home.styled";
import { ReactComponent as HomeImg } from "../../../assets/images/home-img.svg";
import Button from "./../../Atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeStyle>
      <HomeContent>
        <h1>
          Welcome to the <span>Frontend Quiz!</span>
        </h1>
        <ButtonWrapper>
          <Button title="Start Quiz" onClick={() => navigate("/home/quiz")} />
          <Button
            title="Select Topic"
            color="#2660A4"
            onClick={() => navigate("/home/topics")}
          />
        </ButtonWrapper>
      </HomeContent>
      <HomeImage>
        <HomeImg />
      </HomeImage>
    </HomeStyle>
  );
};

export default Home;
