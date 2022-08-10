import React from "react";
import Header from "../modules/header/Header";
import NewCollectionSection from "../modules/newCollectionSection/NewCollectionSection";
import { RebornCollectionData } from "../configs/rebornCollectionData";
import AdaptiveNewCollection from "../modules/newCollectionSection/AdaptiveNewCollection";
import useWindowSize from "../hooks/useWindowSize";

function RebornCollectionPage() {
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  const windowWidthValue = 850;
  const windowHeightValue = 539;
  return (
    <div>
      <Header headerColor={RebornCollectionData.color} />
      {windowWidth <= windowWidthValue && windowHeight > windowHeightValue ? (
        <AdaptiveNewCollection collectionData={RebornCollectionData} />
      ) : (
        <NewCollectionSection collectionData={RebornCollectionData} />
      )}
    </div>
  );
}

export default RebornCollectionPage;
