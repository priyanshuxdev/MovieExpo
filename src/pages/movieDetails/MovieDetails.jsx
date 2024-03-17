import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/detailApi";
import dayjs from "dayjs";
import CircularRating from "../../components/Rating/CircularRating";
import "../movieDetails/MovieDetails";
import humanizeDuration from "humanize-duration";
import Cast from "./cast/Cast";

const MovieDetails = () => {
  const { id } = useParams();
  const detail = useMovieDetail(`/movie/${id}`);
  const cast = useMovieDetail(`/movie/${id}/credits`);

  return (
    <>
      <div className="bg-gradient-to-tr from-black/5 to-gray-700 w-full h-[800px] sm:h-[600px] sm:w-full hidden sm:block">
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt="movie"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-center absolute top-10 left-9 sm:top-32 sm:left-48">
        <div className="w-[300px] h-[450px] overflow-hidden rounded-[20px] mb-7">
          <img
            src={
              detail?.poster_path
                ? `https://image.tmdb.org/t/p/original/${detail?.poster_path}`
                : "https://www.movienewz.com/img/films/poster-holder.jpg"
            }
            alt="movie"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 sm:ml-16">
          <div className="text-[2.5rem] font-semibold sm:text-[3.6rem] text-white">
            {`${detail.title || detail.name} (${dayjs(
              detail?.release_date || detail?.first_air_date
            ).format("YYYY")})`}
          </div>

          <div className="text-gray-400 text-[14px] sm:text-[17px] italic">
            {detail?.tagline}
          </div>

          <div className="flex gap-2 sm:gap-6 mt-7 w-">
            {detail?.genres?.map((genre, i) => (
              <span
                key={i}
                className="text-white text-[13px] bg-purple-500 px-3 rounded-md"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="mt-8 mb-7">
            <CircularRating rating={Number(detail.vote_average).toFixed(1)} />
          </div>

          <div className="text-white mb-20">
            <h2 className="text-4xl sm:text-5xl mb-4">Overview</h2>
            <p className="text-gray-300 text-[14px] sm:text-2xl w-5/6 sm:w-4/5">
              {detail.overview || "No overview available"}
            </p>
          </div>

          <div className="flex flex-col mb-32">
            <div className="flex flex-col sm:flex-row sm:items-center text-white text-3xl gap-5 sm:gap-16">
              <p className="flex gap-5">
                Status:
                <span className="text-gray-300 text-[16px]">
                  {detail?.status}
                </span>
              </p>
              <p className="flex gap-5">
                Released Date:
                <span className="text-gray-300 text-[16px]">
                  {dayjs(detail.release_date || detail.first_air_date).format(
                    "MMM D, YYYY"
                  )}
                </span>
              </p>
              <p className="flex gap-5">
                Runtime:{" "}
                <span className="text-gray-300 text-[16px]">
                  {humanizeDuration(detail.runtime * 60000)}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center text-white text-3xl gap-5 sm:gap-16 mt-16">
              <p className="flex gap-5">
                Budget:
                <span className="text-gray-300 text-[16px]">
                  {detail?.budget
                    ? `$${detail.budget.toLocaleString()}`
                    : "Not Available"}
                </span>
              </p>
              <p className="flex gap-5">
                Revenue:
                <span className="text-gray-300 text-[16px]">
                  {detail?.revenue
                    ? `$${detail.revenue.toLocaleString()}`
                    : "Not Available"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white hidden sm:block">
        <Cast cast={cast} />
      </div>
    </>
  );
};

export default MovieDetails;
