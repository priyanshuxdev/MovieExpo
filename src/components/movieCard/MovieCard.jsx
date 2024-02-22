import React from "react";
import dayjs from "dayjs";
import "./movieCard.css";

function MovieCard({
  movie: { release_date, title, poster_path, name, first_air_date },
}) {
  return (
    <div className="w-[150px] h-[220px] md:w-[190px] md:h-[270px] overflow-hidden rounded-lg m-3 relative transition-all hover:scale-105 cursor-pointer border border-gray-400">
      <div className="w-full h-full">
        <img
          src={
            poster_path !== "N/A"
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : "https://via.placeholder.com/400"
          }
          alt="{title}"
          className="w-full h-full"
        />
      </div>
      <div className="overlay text-white absolute bottom-0 left-0 right-0 p-3">
        <p className="text-[12px] font-bold md:text-[14px] pb-2">
          {!title ? name : title}
        </p>
        <span className="text-[12px]">
          {dayjs(!release_date ? first_air_date : release_date).format(
            "MMM D, YYYY"
          )}
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
