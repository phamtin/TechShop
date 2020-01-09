import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectorItems, selectorTotal } from "../../redux/cart/cart.selector";
import {
  selectorCurrentUser,
  selectorIsLoading
} from "../../redux/user/user.selector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { EmptyCart } from "../../redux/cart/cart.action";
import Button from "../../components/button/Button";
import "./checkout.scss";
import { pushPaidOrder } from "../../redux/user/user.actions";
import Spinner from "../../components/spinner/Spinner";

const Checkout = ({
  pushOrders,
  currentUser,
  cartItems,
  total,
  emptyCart,
  history,
  isLoading
}) => {
  const [paid, setPaid] = useState(false);

  const pay = () => {
    if (currentUser) {
      pushOrders(cartItems, currentUser.id);
      emptyCart();
      alert("Paid successfully!");
      setPaid(true);
    } else history.push("/sign");
  };

  const checkoutPage = (
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

  return isLoading ? <Spinner /> : checkoutPage;
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectorItems,
  total: selectorTotal,
  currentUser: selectorCurrentUser,
  isLoading: selectorIsLoading
});

const mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => dispatch(EmptyCart()),
    pushOrders: (order, userID) => dispatch(pushPaidOrder(order, userID))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
