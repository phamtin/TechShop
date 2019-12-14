import React from "react";

import "./cartitem.scss";

const CartItem = ({ item: { name, price, quantity, imageUrl } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="detail">
          <span className="quantity">SL: {quantity}</span>
          <strong className="price">${quantity * price}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
