import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import { fetchShopData } from "../../redux/shoppage/shop.action";
import {
  firestore,
  transformCollectionSnapshot
} from "../../firebase/firebase.utils";
import Category from "../category/Category";
import { connect } from "react-redux";

const Shop = ({ match, onFetchData }) => {
  const unsubcribeSnapshot = null;

  useEffect(() => {
    const dataRef = firestore.collection("data");
    dataRef.onSnapshot(async snapshot => {
      const collectionMap = transformCollectionSnapshot(snapshot);
      onFetchData(collectionMap);
    });
  }, [onFetchData]);

  return (
    <div className="shop-page" style={{ padding: "20px 10px" }}>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={Category} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onFetchData: collectionMap => {
    dispatch(fetchShopData(collectionMap));
  }
});

export default connect(null, mapDispatchToProps)(Shop);
