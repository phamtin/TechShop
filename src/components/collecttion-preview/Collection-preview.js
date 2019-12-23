import React from "react";

import "./collection-preview.scss";
import CollectionItem from "../collection-item/Collection-item";

const CollectionPreview = ({ title, items }) => {
  const renderItems = items
    .filter((_, idx) => idx < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);

  return (
    <div className="collection-preview">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">{renderItems}</div>
    </div>
  );
};

export default CollectionPreview;
