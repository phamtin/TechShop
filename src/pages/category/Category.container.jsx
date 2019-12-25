import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectorIsCollectionLoaded } from "../../redux/shoppage/shoppage.selector";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import Category from "./Category";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectorIsCollectionLoaded(state)
});

const CategoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CategoryContainer;
