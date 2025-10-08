import React from "react";
import errorImg from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="container mx-auto flex-1 my-10 md:my-20">
        <div className="space-y-4 text-center">
          <img className="mx-auto px-10 md:px-0" src={errorImg} alt="" />
          <h1 className="text-2xl md:text-5xl font-semibold">
            Oops, page not found!
          </h1>
          <p className="text-[#627382] text-sm md:text-2xl">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3"
          >
            <span>Go Back!</span>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
