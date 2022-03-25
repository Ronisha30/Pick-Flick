import React, { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./LandingPage.css";

export default function LandingPage(props) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchMoviesFromDatabase(props.list).then((res) => setMovies(res.results));
  }, []);
  console.log(movies);

  useEffect(() => {
    fetchMoviesFromDatabase(props.tvList).then((res) => setShows(res.results));
  }, []);
  console.log(shows);

  return (
    <div className="landing-page">
      <div className="movie-list">
        {movies?.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div> 
      <div className="tv-list">
      {shows?.map((show) => (
        <SingleMovie key={show.id} movie={show} />
      ))}
    </div>
     
    </div>
  );
}
