import React from "react";
import dayjs from "dayjs";
import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard({
  movie: { release_date, title, poster_path, name, first_air_date, id, type },
}) {
  return (
    <Link to={`${type === "/tv" ? "/tv" : "/movie"}/${id}`}>
      <div className="w-[150px] h-[220px] sm:w-[170px] sm:h-[250px] overflow-hidden rounded-[12px] m-3 relative transition duration-500 ease-in-out transform hover:scale-105 hover:border-purple-600 cursor-pointer border border-gray-400">
        <div className="w-full h-full">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt="{title}"
            className="w-full h-full"
          />
        </div>
        <div className="overlay text-white absolute bottom-0 left-0 right-0 p-3">
          <p className="text-[12px] font-bold md:text-[14px] pb-2">
            {title || name}
          </p>
          <span className="text-[12px]">
            {dayjs(release_date || first_air_date).format("MMM D, YYYY")}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
