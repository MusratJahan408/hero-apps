import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../assets/logo.png";
import githubImg from "../assets/github.png";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-sm ">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src={logoImg} alt="" />
            <span className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3"
          >
            <img className="w-5 h-5" src={githubImg} alt="" />
            <span className="font-bold text-white">Contribute</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
