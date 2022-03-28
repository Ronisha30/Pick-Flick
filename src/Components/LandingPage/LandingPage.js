import React, { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./LandingPage.css";
import MovieList from "../MovieList/MovieList";

export default function LandingPage(props) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  // const [comdey, setCodmy] = useState([]);
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
    <h1>Trending</h1>
      <MovieList movies= {movies}/>
      <h1>TV Shows</h1>
      <div className="tv-list">
      {shows?.map((show) => (
        <SingleMovie key={show.id} movie={show} />
      ))}
    </div>
     
    </div>
  );
}
