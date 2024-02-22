import React from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import "./movieList.css";

function MovieList({ movies, category }) {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl pl-7 text-white">{category}</h1>
      {movies?.length > 0 && (
        <div className="media-scroller">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
