import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import logoImg from "../assets/logo.png";
import errorImg from "../assets/App-Error.png";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-3xl md:text-6xl font-bold flex">
          L<img className="w-14 h-14 animate-spin" src={logoImg} alt="" />
          ODING
        </h1>
      </div>
    );
  }
  return (
    <div className="mb-10 md:mb-20">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-[#627382] text-2xl mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10">
        <h1 className="text-2xl font-semibold mb-5 md:mb-0">
          ({searchApps.length}) Apps Found
        </h1>
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
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 container mx-auto">
        {searchApps.length > 0 ? (
          searchApps.map((app) => <AppsCard key={app.id} app={app}></AppsCard>)
        ) : (
          <div className="flex flex-col justify-center col-span-full">
            <img
              className="w-[400px] h-[400px] mx-auto mt-10 md:mt-20"
              src={errorImg}
              alt=""
            />
            <h1 className="text-3xl md:text-6xl font-bold text-center mt-5">
              OPPS!! APP NOT FOUND
            </h1>
            <p className="text-[#627382] mt-2 text-center">
              The App you are requesting is not found on our system. please try
              another apps
            </p>

            <div className="flex justify-center mt-10 mb-10 md:mb-20">
              <button
                onClick={() => setSearch("")}
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
              >
                Go Back!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
