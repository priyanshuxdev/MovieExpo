import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Popular from "../../pages/popularMovies/Popular";
import axios from "axios";
import { Link } from "react-router-dom";
const apiUrl =
  "https://api.themoviedb.org/3/movie/popular?api_key=26e3e05038f7c7fba84c95e39979032d";

function Home() {
  const [popular, setPopular] = useState([]);
  const getMovies = async () => {
    const response = await axios.get(apiUrl);
    console.log(response.data.results);
    setPopular(response.data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-[#212426]">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        transitionTime={4}
      >
        {popular.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="h-[600px] object-cover w-full" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  movie && movie.backdrop_path
                }`}
                alt="movie"
              />
            </div>
            <div className="bg-opacity-50 text-white absolute">
              <div className="text-4xl left-5 bottom-5">{movie ? movie.title : ""}</div>
              <div>
                {movie ? movie.release_date : ""} {"  "}
                <span>
                  {movie ? movie.vote_average : ""}
                  <CiStar />
                </span>
              </div>
              <div>{movie ? movie.overview : ""}</div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Home;
