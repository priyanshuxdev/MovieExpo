import React from "react";
import "./home.css";
import { CiStar } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useGetMovie from "../../hooks/getMovie";
import MovieList from "../../pages/movieList/MovieList";
import dayjs from "dayjs";

function Home() {
  const popular = useGetMovie("movie/popular");
  const topRated = useGetMovie("movie/top_rated");
  const nowPlaying = useGetMovie("movie/now_playing");
  const upcoming = useGetMovie("movie/upcoming");
  const trending = useGetMovie("trending/all/day");
  // const tvPopular = useGetMovie("tv/popular");
  // const tvSeries = useGetMovie('discover/tv')

  return (
    <>
      <div className="p-3">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          transitionTime={4}
          showIndicators={false}
        >
          {popular.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
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
                  <div className="text-[17px] md:text-6xl text-left px-10">
                    {movie ? movie.title : ""}
                  </div>
                  <div className="text-[13px] md:text-4xl flex gap-3 md:gap-12 px-10 text-gray-200">
                    {movie
                      ? dayjs(movie.release_date).format("MMM D, YYYY")
                      : ""}{" "}
                    {"  "}
                    <span className="flex items-center text-cyan-300">
                      {movie ? Number(movie.vote_average).toFixed(1) : ""}
                      <CiStar />
                    </span>
                  </div>
                  <div
                    className="text-ellipsis overflow-hidden whitespace-nowrap md:whitespace-normal text-gray-300 text-[10px] md:text-2xl text-left md:w-8/12 px-10 
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
        <MovieList movies={trending} category={"Trending"} />
      </div>
    </>
  );
}

export default Home;
