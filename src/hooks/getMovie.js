import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export default function useGetMovie(category) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${category}?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc`
    );
    console.log(response.data.total_pages);
    setMovies(response.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies);
  return movies;
}
