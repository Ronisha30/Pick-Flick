import React, { useEffect, useState } from "react";
import { fetchMoviesFromDatabase} from "../../NetworkConnections";
import "./LandingPage.css";
import MovieList from "../MovieList/MovieList";


export default function LandingPage(props) {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [comedies, setComedies] = useState([]);

  /**
	 * React hook that is used to fetch movies that is in the comedies category.
	 */
  useEffect(() => {
    fetchMoviesFromDatabase(props.comedyList,'&with_genres=35').then((res) => setComedies(res.results));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
	 * React hook that is used to fetch movies that is in the movies categories.
	 */
  useEffect(() => {
    fetchMoviesFromDatabase(props.list).then((res) => setMovies(res.results));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
	
  /**
	 * React hook that is used to fetch movies that is in the tv shows categories.
	 */

  useEffect(() => {
    fetchMoviesFromDatabase(props.tvList).then((res) => setShows(res.results));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

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

