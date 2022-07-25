import React from "react";
import Header from "../modules/header/Header";
import NewCollectionSection from "../modules/newCollectionSection/NewCollectionSection";
import { RenaissanceCollectionData } from "../configs/renaissanceCollectionData";
import useWindowSize from "../hooks/useWindowSize";
import AdaptiveNewCollection from "../modules/newCollectionSection/AdaptiveNewCollection";

function RenaissanceCollectionPage() {
  const windowWidth = useWindowSize().sizeWidth;
  const windowHeight = useWindowSize().sizeHeight;
  return (
    <div>
      <Header headerColor={RenaissanceCollectionData.color} />
      {windowWidth <= 850 && windowHeight > 539 ? (
        <AdaptiveNewCollection collectionData={RenaissanceCollectionData} />
      ) : (
        <NewCollectionSection collectionData={RenaissanceCollectionData} />
      )}
    </div>
  );
}

export default RenaissanceCollectionPage;
