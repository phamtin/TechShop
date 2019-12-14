import React from "react";

import { createStructuredSelector } from "reselect";
import {
  selectorCartItems,
  selectorCartTotal
} from "../../redux/cart/cart.selector";
import "./checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  total: selectorCartTotal
});

export default connect(mapStateToProps, null)(Checkout);
