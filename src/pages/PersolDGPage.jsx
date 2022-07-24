import React from "react";
import Header from "../modules/header/Header";
import PersolSection from "../modules/persolSection/PersolSection";
import { persolCollectionData } from "../configs/persolCollectionData";

function PersolDGPage() {
  return (
    <div>
      <Header headerColor="var(--main-white)" />
      <PersolSection persolCollectionData={persolCollectionData} />
    </div>
  );
}

export default PersolDGPage;
