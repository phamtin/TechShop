import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectorCartItemsCount } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";
import { ToggleCartDropdown } from "../../redux/cart/cart.action";
import "./cartIcon.scss";

const CartIcon = ({ toggleDropdown, countItem }) => {
  return (
    <div className="cart-icon" onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> {countItem} </span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  countItem: selectorCartItemsCount
});

const mapDispatchToProps = dispatch => {
  return {
    toggleDropdown: () => dispatch(ToggleCartDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
