import React from "react";
import { motion } from "framer-motion";
import { MdError } from "react-icons/md";
import "./InputError.css";

const InputError = ({ message }) => {
  return (
    <div className="wrapper">
      <motion.p {...framer_error} className="error-message">
        <MdError />
        <span className="message">{message}</span>
        <span className="error-pointer"></span>
      </motion.p>
    </div>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default InputError;
