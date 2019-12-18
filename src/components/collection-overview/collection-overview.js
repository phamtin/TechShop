import React from "react";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collecttion-preview/Collection-preview";
import { selectorCollections } from "../../redux/shoppage/shoppage.selector";
import { connect } from "react-redux";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collecttion-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectorCollections
});

export default connect(mapStateToProps, null)(CollectionOverview);
