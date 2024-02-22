import React from "react";
import useGetMovie from "../../hooks/getMovie";
import MovieCard from "../movieCard/MovieCard";

function Movies() {
  const discover = useGetMovie("discover/movie");
  console.log(discover);

  return (
    <div>
      <h1 className="text-5xl pt-[6.4rem] text-center text-white">Movies</h1>
      <div className="flex flex-wrap">
        {discover.length > 0 &&
          discover.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
}

export default Movies;
