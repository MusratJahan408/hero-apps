import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";

const Apps = () => {
  const { apps } = useApps();
  return (
    <div className="mb-10 md:mb-20">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-2xl mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="container mx-auto flex justify-between items-center mt-10">
        <h1 className="text-2xl font-semibold">(132) Apps Found</h1>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 container mx-auto">
        {apps.map((app) => (
          <AppsCard key={app.id} app={app}></AppsCard>
        ))}
      </div>
    </div>
  );
};

export default Apps;
