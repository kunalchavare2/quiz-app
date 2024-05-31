import React from "react";
import NotFoundPageStyle from "./NotFoundPage.styled";
import InfoTypes from "../../components/Organisams/InfoTypes/InfoTypes";

const NotFoundPage = () => {
  return (
    <NotFoundPageStyle>
      <InfoTypes type="pageNotFound" />
    </NotFoundPageStyle>
  );
};

export default NotFoundPage;
