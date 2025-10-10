import React from "react";

import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 bg-[#F5F5F5] ">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default MainLayOut;
