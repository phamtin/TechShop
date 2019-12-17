import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectorItems, selectorTotal } from "../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import Button from "../../components/button/Button";
import { EmptyCart } from "../../redux/cart/cart.action";
import "./checkout.scss";

const Checkout = ({ cartItems, total, emptyCart }) => {
  const [paid, setPaid] = useState(false);

  const pay = () => {
    emptyCart();
    alert("Paid successfully!");
    setPaid(true);
  };

  return (
    <div className="checkout-page">
      {paid ? <Redirect to="/" /> : null}
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Products</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <Button clicked={pay}>pay</Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectorItems,
  total: selectorTotal
});

const mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => dispatch(EmptyCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
