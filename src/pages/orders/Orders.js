import React, { useEffect } from "react";
import { connect } from "react-redux";

import { selectorCurrentUser } from "../../redux/user/user.selector";
import { selectorAllOrders } from "../../redux/orders/order.selector";
import { fetchOrder } from "../../redux/orders/order.action";
import OneOrder from "../../components/one-order/OneOrder";
import { createStructuredSelector } from "reselect";
import { OrdersContainer, TitleContainer } from "./order.style";
import Spinner from "../../components/spinner/Spinner";

const Orders = ({ currentUser, fetchOrders, orders }) => {
  useEffect(() => {
    if (currentUser) {
      fetchOrders(currentUser.id);
    }
  }, [fetchOrders, currentUser]);

  return (
    <>
      {currentUser ? (
        <OrdersContainer>
          <TitleContainer>All your orders: </TitleContainer>
          {orders.map((order, idx) => (
            <OneOrder key={idx} order={order} />
          ))}
        </OrdersContainer>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectorCurrentUser,
  orders: selectorAllOrders
});

const mapDispatchToProps = dispatch => ({
  fetchOrders: id => dispatch(fetchOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
