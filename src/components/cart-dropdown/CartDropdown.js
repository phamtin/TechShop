import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectorItems } from "../../redux/cart/cart.selector";
import { ToggleCartDropdown } from "../../redux/cart/cart.action";
import CartItem from "../cart-item/CartItem";
import Button from "../button/Button";
import "./cartDropdown.scss";

const CartDropdown = ({ items, history, toggleCartDropdown }) => {
  const handleCheckout = () => {
    toggleCartDropdown();
    return history.push("/checkout");
  };

  const renderItems = items.length ? (
    items.map(item => <CartItem key={item.id} item={item} />)
  ) : (
    <span className="empty-message">Your cart is empty</span>
  );

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{renderItems}</div>
      <Button clicked={handleCheckout}>Checkout</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectorItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(ToggleCartDropdown())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
