import React from "react";
import "./validation-error.css";

const ValidationError = ({ children }) => {
  return <span className="validation-error">{children}</span>;
};

export default ValidationError;
