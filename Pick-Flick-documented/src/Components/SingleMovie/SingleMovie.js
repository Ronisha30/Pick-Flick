import { useEffect, useState } from 'react';
import { fetchMoviesFromDatabase } from '../../NetworkConnections';
import './SingleMovie.css';

/**
 * This method is used to render a single movie into the DOM.
 * It renders the movie's title, name, thumbnail and overview.
 * @param {*} props object property that was passed to this component when it was being called.
 * @returns
 */
export default function SingleMovie(props) {
	// used to store the movie object from the props param.
	const [movie, setMovie] = useState(props.movie);

	// this is a react hook that is used to mimic componentDidMount state and it is called once when the component has rendered.
	// This method calls a custom method fetchMoviesFromDatabase that fetches a movie with the given ID from the database.
	useEffect(() => {
		//do some fetching
		if (movie) return;
		fetchMoviesFromDatabase(`movie/${props.id}`).then((res) => setMovie(res));
	}, []);

	return (
		<div className="movie-card">
			<h3>{movie.original_title}</h3>
			<h3>{movie.name}</h3>

			<img alt={`poster for ${movie.original_title}`} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

			<p>{movie.overview}</p>
			<button>Click Here</button>
		</div>
	);
}
