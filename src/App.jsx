import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Navbar, Search, Movies, TVShows } from "./components";
import MovieDetails from "./pages/movieDetails/MovieDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<MovieDetails />} />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
      </Routes>
    </Router>
  );
}

export default App;
