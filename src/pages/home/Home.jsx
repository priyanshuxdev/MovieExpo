import React, { useEffect, useState } from "react";
import "./home.css";
import { CiStar } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useGetMovie from "../../hooks/getMovie";
import MovieList from "../../pages/movieList/MovieList";
import dayjs from "dayjs";
import CircularRating from "../../components/Rating/CircularRating";

function Home() {
  const popular = useGetMovie("movie/popular");
  const topRated = useGetMovie("movie/top_rated");
  const nowPlaying = useGetMovie("movie/now_playing");
  const upcoming = useGetMovie("movie/upcoming");
  const trendingMovie = useGetMovie("trending/movie/day");
  const trendingTv = useGetMovie("trending/tv/day");


  return (
    <div className="mb-24">
      <div className="p-3 md:p-0">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={4}
          showIndicators={false}
        >
          {popular.map((movie) => (
            <Link
              to={`${movie.type === "/tv" ? "/tv" : "/movie"}/${movie.id}`}
              key={movie.id}
            >
              <div
                className="border border-gray-400 object-cover w-full md:h-[600px]"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${
                    movie && movie.backdrop_path
                  }`}
                  alt="movie"
                />
                <div className="desc__overlay flex flex-col sm:gap-5">
                  <div className="text-[17px] font-bold md:text-6xl text-left px-10">
                    {movie ? movie.title : ""}
                  </div>
                  <div className="text-[13px] md:text-4xl flex items-center gap-3 md:gap-12 px-10 text-gray-200">
                    {movie
                      ? dayjs(movie.release_date).format("MMM D, YYYY")
                      : ""}{" "}
                    {"  "}
                    <div className="flex items-center text-cyan-300">
                      <CiStar />
                      {movie ? Number(movie.vote_average).toFixed(1) : ""}
                    </div>
                  </div>
                  <div
                    className="text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal text-gray-300 text-[10px] sm:text-2xl text-left sm:w-8/12 px-10 
              "
                  >
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <MovieList movies={topRated} category={"Top Rated"} />
      <div>
        <MovieList movies={nowPlaying} category={"Now Playing"} />
      </div>
      <div>
        <MovieList movies={upcoming} category={"Upcoming"} />
      </div>
      <div>
        <MovieList movies={trendingMovie} category={"Trending Movies"} />
      </div>
      <div>
        <MovieList movies={popular} category={"What's Popular"} />
      </div>
      <div>
        <MovieList movies={trendingTv} category={"Trending TV Shows"} />
      </div>
    </div>
  );
}

export default Home;
