import { useEffect, useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";


export default function Search(props) {
    // useState - to create state
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    
    function searchTitle(){
    fetchMoviesFromDatabase(`search/movie`,`&query=${searchMovie}`)
        .then(res => setMovies(res.results))
    }
    function handleSwitch(e){
        setSearchMovie (e.target.value)
    }
    console.log(searchMovie)
    return ( <div>
        <h1>SearchBar</h1>
        <input value={searchMovie} onChange={handleSwitch}/>
        <input onClick = {searchTitle} type= 'submit'/>
        <div className="movie-list">
            {movies.map(movie => <SingleMovie key = {movie.id}movie={movie}/>)}
    </div>
    </div>
     );
}