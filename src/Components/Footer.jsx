import React from "react";
import logoImg from "../assets/logo.png";
import facebookImg from "../assets/facebook.png";
import linkedinImg from "../assets/linkedin.png";
import exxImg from "../assets/exx.png";

const Footer = () => {
  return (
    <div className="bg-[#001931] px-10 md:px-0">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex gap-1 items-center mb-10 md:mb-0">
            <img className="w-10 h-10" src={logoImg} alt="" />
            <span className="font-bold text-white">HERO.IO</span>
          </div>
          <div>
            <h1 className="text-2xl font-medium text-white">Social Links</h1>
            <div className="flex gap-4 items-center mt-4 mb-6">
              <img src={facebookImg} alt="" />
              <img src={linkedinImg} alt="" />
              <img src={exxImg} alt="" />
            </div>
          </div>
        </div>
        <div className="border-t-1 border-t-[#E5E7EB]">
          <p className="text-[#FAFAFA] text-center mt-8">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
