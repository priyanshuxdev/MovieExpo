import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?q=${title}`
    );
    console.log(response.data.results);
    setMovies(response.data.results);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="text-center">
      <h2 className="text-5xl text-white p-8">Search</h2>
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="py-3 px-11 text-left text-[13px] bg-[#212426] text-white rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
