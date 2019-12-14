import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/cart/cart.action";
import "./collection-item.scss";
import Button from "../button/Button";

const CollectionItem = ({ item, onAddItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
      </div>
      <Button
        clicked={() => {
          onAddItem(item);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: item => dispatch(actions.AddItemToCart(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
