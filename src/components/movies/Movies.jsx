import React, { useEffect, useState } from "react";
import MovieCard from "../movieCard/MovieCard";
import Pagination from "../pagination/Pagination";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  let totalPages;

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${page}&sort_by=popularity.desc`
    );
    totalPages = response.data.total_pages;
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  function handleClick() {
    setPage(page + 1);
    getMovies();
  }

  return (
    <div className="mb-28 sm:mb-16">
      <h1 className="text-5xl pt-9 sm:pt-[6.4rem] text-center text-white mb-9">
        Movies
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>

      <Pagination
        movie={movies}
        totalPages={500 || totalPages}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Movies;
