import React from "react";
import { connect } from "react-redux";

import * as action from "../../redux/cart/cart.action";
import "./checkoutItem.scss";

const CheckoutItem = ({ item, remote, increase, decrease }) => {
  const { name, imageUrl, price, quantity } = item;
  const handleRemove = () => remote(item);
  const handleIncrease = () => increase(item);
  const handleDecrease = () => decrease(item);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrease}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={handleIncrease}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemove}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  remote: item => dispatch(action.RemoveItem(item)),
  increase: item => dispatch(action.InscreaseQuantity(item)),
  decrease: item => dispatch(action.DescreaseQuantity(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
