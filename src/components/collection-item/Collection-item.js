import React from "react";
import { connect } from "react-redux";

import { AddItemToCart } from "../../redux/cart/cart.action";
import Button from "../button/Button";
import "./collection-item.scss";

const CollectionItem = ({ item, onAddItem }) => {
  const addToCart = () => onAddItem(item);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <div className="name">{item.name}</div>
        <div className="price">${item.price}</div>
      </div>
      <Button clicked={addToCart}>Add to cart</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onAddItem: item => dispatch(AddItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
