import React from "react";
import { Link } from "react-router";
import appImg from "../assets/app.png";
import playStoreImg from "../assets/playStore.png";
import heroImg from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div>
      <div className="container mx-auto text-center mt-10 md:mt-20">
        <h1 className="text-4xl md:text-7xl text-[#001931] font-bold">
          We Build
          <br />
          <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>
          <span> Apps</span>
        </h1>
        <p className="text-2xl text-[#627382] mt-4 px-5 md:px-0">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className=" my-10">
          <Link to="https://play.google.com/store/apps?hl=en" className="mr-4">
            <button className="btn py-6">
              <img className="w-8 h-8" src={playStoreImg} alt="" />
              <span className="font-semibold">Google Play</span>
            </button>
          </Link>
          <Link to="https://www.apple.com/app-store/">
            <button className="btn py-6">
              <img className="w-8 h-8" src={appImg} alt="" />
              <span className="font-semibold">App Store</span>
            </button>
          </Link>
        </div>
        <div className="flex justify-center px-8 md:px-0">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-10 md:p-20 text-center mb-10 md:mb-20">
        <h1 className="text-lg md:text-4xl font-bold text-white">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 mt-10">
          <div className="text-white space-y-4">
            <h4>Total Downloads</h4>
            <h1 className="text-6xl font-extrabold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-white space-y-4">
            <h4>Total Reviews</h4>
            <h1 className="text-6xl font-extrabold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="text-white space-y-4">
            <h4>Active Apps</h4>
            <h1 className="text-6xl font-extrabold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
