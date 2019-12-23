import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectorCurrentUser } from "../../redux/user/user.selector";
import { selectorCartIsShow } from "../../redux/cart/cart.selector";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  Option
} from "./header.style";
import "./header.scss";

const Header = ({ currentUser, isShow }) => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <Option to="/shop">Shop</Option>
        <Option to="/contact">Contact</Option>
        {currentUser ? (
          <Option as="div" onClick={handleSignOut}>
            Sign out
          </Option>
        ) : (
          <Option to="/sign">Sign in</Option>
        )}
        <CartIcon />
      </OptionsContainer>
      {isShow ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  isShow: selectorCartIsShow,
  currentUser: selectorCurrentUser
});

export default connect(mapStateToProps, null)(Header);
