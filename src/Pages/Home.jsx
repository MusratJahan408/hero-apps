import React from "react";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] text-2xl mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
    </div>
  );
};

export default Home;
