import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="gradient w-full py-5 shadow-2xl top-0 left-0 hidden items-center justify-around z-10 fixed sm:flex">
        <div>
          <Link to="/">
            <h1 className="text-5xl text-bold text-white">MovieExpo</h1>
          </Link>
        </div>

        <div className="border-2 border-bg-white px-12 rounded-lg py-1">
          <ul className="flex text-2xl text-white gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="tvshows">TV Shows</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-10 text-white cursor-pointer">
          <Link to="https://github.com/priyanshuxdev" target="_blank">
            <FaGithub className="text-4xl" />
          </Link>
          <Link to="https://twitter.com/devpriyanshu009" target="_blank">
            <FaTwitter className="text-4xl" />
          </Link>
        </div>

        <div className="absolute bg-white/55 bottom-0 left-0 right-0"></div>
      </nav>

      <nav className="text-white sm:hidden">
        <div className="bg-[#212426] flex justify-around text-4xl fixed bottom-0 left-0 right-0 p-6 z-[10]">
          <div>
            <Link to="/">
              <IoIosHome />
            </Link>
          </div>
          <div>
            <Link to="/search">
              <IoSearchSharp />
            </Link>
          </div>
          <div>
            <Link to="/movies">
              <MdMovie />
            </Link>
          </div>
          <div>
            <Link to="/tvshows">
              <FaTv />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
