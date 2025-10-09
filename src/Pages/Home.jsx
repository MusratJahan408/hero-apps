import React from "react";
import HeroSection from "../Components/HeroSection";
import { Link } from "react-router";
import AppsCard from "../Components/AppsCard";
import useApps from "../Hooks/useApps";

const Home = () => {
  const { apps, loading, error } = useApps();

  const trendingApps = apps.slice(0, 8);
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] text-2xl mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 container mx-auto">
        {trendingApps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
      <Link to="/apps" className="mt-10 mb-10 md:mb-20 flex justify-center">
        <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Home;
