import React from "react";
import Hero from "./Hero";
import Cards from "./Cards";
import Category from "./Category";
import Consultant from "./Consultant";
export default function HomePage() {
  return (
    <div>
      <Hero />
      <Cards />
      <Consultant />
      <Category />
    </div>
  );
}
