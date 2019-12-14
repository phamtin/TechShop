import React from "react";

import "./button.scss";

const Button = ({ children, clicked, ...otherProps }) => {
  return (
    <button className="custom-button" onClick={clicked} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
