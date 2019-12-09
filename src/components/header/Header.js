import React from "react";
import { Link } from "react-router-dom";

import "./header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = props => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/" className="option">
          Contact
        </Link>
        <Link to="/sign" className="option">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
