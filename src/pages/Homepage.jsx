import React from "react";
import TopSection from "../modules/topSection/TopSection";
import CategorySection from "../modules/categorySection/CategorySection";
import SaleSection from "../modules/saleSection/SaleSection";
import InstagramSection from "../modules/instagramSection/InstagramSection";
import Header from "../modules/header/Header";

function Homepage() {
  return (
    <div>
      <Header headerColor="var(--main-white)" />
      <TopSection />
      <CategorySection />
      <SaleSection />
      <InstagramSection />
    </div>
  );
}

export default Homepage;
