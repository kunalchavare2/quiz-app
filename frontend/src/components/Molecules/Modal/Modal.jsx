import React from "react";
import Button from "../../Atoms/Button/Button";
import { ModalStyle } from "./Modal.styled";
import { color } from "../../../utils/constant/style-const";

const Modal = ({ isOpen, setOpen, callback }) => {
  if (!isOpen) return null;

  return (
    <ModalStyle>
      <Button
        title="Logout"
        onClick={(e) => {
          callback(e);
          setOpen(false);
        }}
        color={color.denger}
      />
    </ModalStyle>
  );
};

export default Modal;
