import React from "react";
import { AddResourceStyle } from "./AddResource.styled";
import formImage from "../../assets/images/background.png";
import AddResourceForm from "./../../components/Organisams/AddResourceForm/AddResourceForm";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const AddResource = () => {
  return (
    <AddResourceStyle imgUrl={formImage}>
      <div className="add-form">
        <AddResourceForm />
      </div>
      <div className="add-image"></div>
      <Link className="back-nav" to="/home/resources">
        <IoIosArrowBack />
        <span>Users</span>
      </Link>
    </AddResourceStyle>
  );
};

export default AddResource;
