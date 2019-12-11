import React from "react";

import "./button.scss";

const Button = ({ children, clicked }) => {
  return (
    <button className="custom-button" onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
