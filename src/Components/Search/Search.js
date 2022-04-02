import {useState } from "react";
import { fetchMoviesFromDatabase } from "../../NetworkConnections";
import SingleMovie from "../SingleMovie/SingleMovie";

/**
 * This component is used to render all the search bar elements visible in the browser.
 * It has a div root tag and children tags including h1, input and div tag.
 * @param {*} props the properties passed to this component when it was being called.
 * @returns
 */

export default function Search(props) {
    // useState - to create state
    const [movies, setMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState('');
    
	/**
	 * This method is used to fetch movies from the database using the query string.
	 * It in turns calls a custom promise method that does the work of searching.
	 */
    function searchTitle(){
    fetchMoviesFromDatabase(`search/movie`,`&query=${searchMovie}`)
        .then(res => setMovies(res.results))
    }

    /**
	 * Used to handle switch event for the search bar.
	 * @param {*} e event from the switch handler.
	 */
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