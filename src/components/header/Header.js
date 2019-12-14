import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectorUserItems } from "../../redux/user/user.selector";
import { selectorCartIsShow } from "../../redux/cart/cart.selector";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import "./header.scss";

const Header = ({ currentUser, isShow }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={handleSignOut}
            style={{ cursor: "pointer" }}
          >
            Sign out
          </div>
        ) : (
          <Link to="/sign" className="option">
            Sign in
          </Link>
        )}
        <Link to="">
          <CartIcon />
        </Link>
      </div>
      {isShow ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isShow: selectorCartIsShow,
  currentUser: selectorUserItems
});

export default connect(mapStateToProps, null)(Header);
