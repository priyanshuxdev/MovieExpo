import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-yellow-600 p-2 shadow-2xl flex items-center justify-around">
      <div>
        <h1 className="text-4xl text-bold text-white">MovieExpo</h1>
      </div>

      <div className="border-2 border-bg-white px-5 rounded-full py-1">
        <ul className="flex text-1xl text-white gap-6">
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

      <div className="flex items-center gap-3 bg-white rounded-full px-3">
        <input type="text" placeholder="Search for a movie" className="outline-none px-2 py-1 rounded-full"/>
        <CiSearch className="h-7 w-7 rounded-full"/>
      </div>
    </nav>
  );
};

export default Navbar;
