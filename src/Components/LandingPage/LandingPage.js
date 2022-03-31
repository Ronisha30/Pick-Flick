import React, { useEffect, useState } from "react";
import { fetchMoviesFromDatabase} from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./LandingPage.css";
import MovieList from "../MovieList/MovieList";



export default function LandingPage(props) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [comedies, setComedies] = useState([]);


  useEffect(() => {
    fetchMoviesFromDatabase(props.comedyList,'&with_genres=35').then((res) => setComedies(res.results));
  }, []);

  console.log(comedies)
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
      <MovieList movies= {shows}/>
      <h1>Comedies</h1>
      <MovieList movies= {comedies}/>
      
    </div>
 

  );
}

