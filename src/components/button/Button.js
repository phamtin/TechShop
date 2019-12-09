import React from "react";

import "./button.scss";

const Button = ({ children, ...otheProps }) => {
  return (
    <button className="custom-button" {...otheProps}>
      {children}
    </button>
  );
};

export default Button;
