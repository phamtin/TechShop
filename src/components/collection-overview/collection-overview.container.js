import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectorLoading } from "../../redux/shoppage/shoppage.selector";
import WithSpinner from "../with-spinner/WithSpinner";
import CollectionOverview from "./collection-overview";

//  isLoading is withSpinner's prop, not CollectionOverview
const mapStateToProps = createStructuredSelector({
  isLoading: selectorLoading
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
