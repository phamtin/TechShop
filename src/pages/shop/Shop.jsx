import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collecttion-preview/Collection-preview";

const Shop = props => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page" style={{ padding: "20px 70px" }}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
