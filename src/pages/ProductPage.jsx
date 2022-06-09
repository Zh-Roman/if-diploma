import React from "react";
import Header from "../modules/header/Header";
import ProductSection from "../modules/productSection/ProductSection";

function ProductPage() {
  return (
    <div>
      <Header headerColor="var(--main-black)" />
      <ProductSection />
    </div>
  );
}

export default ProductPage;
