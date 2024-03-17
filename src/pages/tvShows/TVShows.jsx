import React, { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Pagination from "../../components/pagination/Pagination";
import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

function Movies() {
  const [page, setPage] = useState(1);
  const [tvShows, setTvShows] = useState([]);
  let totalPages;

  const getTvShows = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&page=${page}&sort_by=popularity.desc`
    );
    totalPages = response.data.total_pages;
    console.log(response.data.results);
    setTvShows(response.data.results);
  };

  useEffect(() => {
    getTvShows();
  }, []);

  function handleClick() {
    setPage(page + 1);
    getTvShows();
  }

  return (
    <div className="mb-28 file:sm:mb-16">
      <h1 className="text-5xl pt-9 sm:pt-[6.4rem] text-center text-white mb-9">
        TV Shows
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {tvShows.length > 0 &&
          tvShows.map((tvShow) => <MovieCard movie={tvShow} key={tvShow.id} />)}
      </div>

      <Pagination
        movie={tvShows}
        totalPages={500 || totalPages}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Movies;
