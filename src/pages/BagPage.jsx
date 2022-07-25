import React from "react";
import Header from "../modules/header/Header";
import BagSection from "../modules/bagSection/BagSection";

function BagPage() {
  return (
    <div>
      <Header headerColor="var(--main-black)" />
      <BagSection />
    </div>
  );
}

export default BagPage;
