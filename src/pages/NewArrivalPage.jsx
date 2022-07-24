import React from "react";
import Header from "../modules/header/Header";
import NewArrivalSection from "../modules/newArrivalSection/NewArrivalSection";

function NewArrivalPage() {
  return (
    <div>
      <Header headerColor="var(--main-black)" />
      <NewArrivalSection />
    </div>
  );
}

export default NewArrivalPage;
