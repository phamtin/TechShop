import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import { fetchShopData } from "../../redux/shoppage/shop.action";
import Category from "../category/Category";
import { connect } from "react-redux";
import {
  firestore,
  transformCollectionSnapshot
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CategoryWithSpinner = WithSpinner(Category);

const Shop = ({ match, onFetchData }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const dataRef = firestore.collection("data");
    dataRef.onSnapshot(async snapshot => {
      const collectionMap = transformCollectionSnapshot(snapshot);
      onFetchData(collectionMap);
      setIsLoading(false);
    });
  }, [onFetchData]);

  return (
    <div className="shop-page" style={{ padding: "20px 10px" }}>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => (
          <CategoryWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onFetchData: collectionMap => dispatch(fetchShopData(collectionMap))
});

export default connect(null, mapDispatchToProps)(Shop);
