import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetMovie(category) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${category}?api_key=26e3e05038f7c7fba84c95e39979032d`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return movies;
}
