import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import { FaDAndD } from "react-icons/fa";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
