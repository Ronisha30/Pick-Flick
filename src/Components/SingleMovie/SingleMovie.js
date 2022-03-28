import { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import './SingleMovie.css';

export default function SingleMovie(props) {
  // useState - to create state
  const [movie, setMovie] = useState(props.movie);
  //useEffect- only fire code when the componet ids loaded for the first time
  useEffect(() => {
    //do some fetching
    if (movie) return;
    fetchMoviesFromDatabase(`movie/${props.id}`).then((res) => setMovie(res));
  }, []);
  return (
    <div className="movie-card">
      <h3>{movie.original_title}</h3>
      <h3>{movie.name}</h3>
      
        <img
         alt={`poster for ${movie.original_title}`}
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      
      <p>{movie.overview}</p>
      <button>Click Here</button>
    </div>
    
  );
}