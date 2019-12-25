import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CategoryContainer from "../category/Category.container";
import { fetchData } from "../../redux/shoppage/shop.action";

const Shop = ({ match, onFetchData }) => {
  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  return (
    <div className="shop-page" style={{ padding: "20px 15px" }}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route path={`${match.path}/:categoryId`} component={CategoryContainer} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData())
});

export default connect(null, mapDispatchToProps)(Shop);
