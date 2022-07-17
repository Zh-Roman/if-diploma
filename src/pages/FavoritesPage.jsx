import React from "react";
import Header from "../modules/header/Header";
import FavoritesSection from "../components/favoritesSection/FavoritesSection";

function FavoritesPage() {
  return (
    <div>
      <Header headerColor="var(--main-black)" />
      <FavoritesSection />
    </div>
  );
}

export default FavoritesPage;
