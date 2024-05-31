import React from "react";
import { TopicStyle } from "./Topic.styled";

const Topic = ({ title = "default", onClick = () => {}, ...props }) => {
  let newRandomColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16) + "50";

  newRandomColor = newRandomColor === "#ffffff?" ? "#000000" : newRandomColor;

  return (
    <TopicStyle color={newRandomColor} {...props} onClick={onClick}>
      {title.replace(":", "-")}
    </TopicStyle>
  );
};

export default Topic;
