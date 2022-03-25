import { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import './MovieGenres.css';

export default function MovieGenres(props) {
  // useState - to create state
  const [genres, setGenres] = useState([]);
  // useEffect- only fire code when the componet ids loaded for the first time
  useEffect(() => {
    //do some fetching
  //
    fetchMoviesFromDatabase(`genre/movie/list`)
        .then((res) => {
            console.log(res)
            setGenres(res.genres)});
  }, []);
  return <div className="genres-list">
  {genres.map(genre=><h1>{genre.name}</h1>)}
</div>

}
















