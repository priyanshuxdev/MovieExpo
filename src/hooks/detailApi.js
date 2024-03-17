import axios from "axios";
import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = "https://api.themoviedb.org/3";

export default function useMovieDetail(mediaId) {
  const [detail, setDetail] = useState({});

  const getDetails = async () => {
    const response = await axios.get(
      `${apiUrl}/${mediaId}?api_key=${apiKey}&language=en-US`
    );
    setDetail(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return detail;
}
