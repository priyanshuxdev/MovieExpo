import axios from "axios";
import { useEffect, useState } from "react";

export default function useSearchMovies(title) {
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/collection?api_key=26e3e05038f7c7fba84c95e39979032d&${title}`
    );
    setMovies(response.data.results);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  console.log(movies);
  return movies;
}

// https://api.themoviedb.org/3/search/collection
