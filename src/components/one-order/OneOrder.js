import React from "react";

import "./order.scss";

const OneOrder = ({ order }) => {
  return (
    <div className="all-items">
      <div className="description">
        <p className="title">Items:</p>
      </div>
      <div className="data">
        {order.map(oneItem => (
          <div key={oneItem.id} className="one-item">
            <h4>{oneItem.name}</h4>
            <p>${oneItem.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneOrder;
