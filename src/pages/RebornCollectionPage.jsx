import React from "react";
import Header from "../modules/header/Header";
import NewCollectionSection from "../modules/newCollectionSection/NewCollectionSection";
import { RebornCollectionData } from "../configs/rebornCollectionData";
import AdaptiveNewCollection from "../modules/newCollectionSection/AdaptiveNewCollection";
import useWindowSize from "../hooks/useWindowSize";

function RebornCollectionPage() {
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  return (
    <div>
      <Header headerColor={RebornCollectionData.color} />
      {windowWidth <= 850 && windowHeight > 539 ? (
        <AdaptiveNewCollection collectionData={RebornCollectionData} />
      ) : (
        <NewCollectionSection collectionData={RebornCollectionData} />
      )}
    </div>
  );
}

export default RebornCollectionPage;
