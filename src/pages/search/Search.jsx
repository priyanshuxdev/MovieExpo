import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/movieCard/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedType, setSelectedType] = useState("movie");

  const search = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/${selectedType}?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=${selectedOption}`
    );
    console.log(response.data.results);
    setSearchResults(response.data.results);
  };

  useEffect(() => {
    if (searchTerm) {
      search();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="text-center sm:mt-20">
      <h2 className="text-5xl text-white p-8">Search</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
        <div className="sm:w-[40%]">
          <input
            type="text"
            placeholder="Search for a movie and tv shows..."
            className="w-[100%] text-[15px] border-2 border-gray-800 p-2 rounded-lg bg-[#212426] text-white focus:outline-none focus:ring-2 focus:ring-purple-700 focus:shadow-purple-700 focus:border-transparent transition duration-500 ease-in-out transform hover:scale-105"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex gap-6">
          <select
            className="text-white bg-[#212426] p-2 rounded-lg text-[14px] border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition duration-500 ease-in-out transform hover:scale-110"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value={true}>Include Adult</option>
            <option value={false}>Exclude Adult</option>
          </select>

          <select
            className="text-white bg-[#212426] p-2 rounded-lg text-[14px] border-2 border-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition duration-500 ease-in-out transform hover:scale-110"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="movie">Movies</option>
            <option value="tv">TV Shows</option>
          </select>
        </div>
      </div>

      <div className="flex w-screen flex-wrap mt-12 gap-5 justify-center overflow-hidden mb-28 sm:mb-0 mx-auto">
        {searchResults?.length > 0 &&
          searchResults.map((result) => (
            <MovieCard movie={result} key={result.id} />
          ))}
      </div>
    </div>
  );
}

export default Search;
