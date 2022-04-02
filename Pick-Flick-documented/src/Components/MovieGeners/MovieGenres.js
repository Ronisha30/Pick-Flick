import { useEffect, useState } from 'react';
import { fetchMoviesFromDatabase } from '../../NetworkConnections';
import './MovieGenres.css';

/**
 * This file is used to render all the movie genres from the database.
 * @param {Object} props the properties that was passed to this component when it was being called.
 * @returns
 */
export default function MovieGenres(props) {
	// useState - to create state
	const [genres, setGenres] = useState([]);
	// useEffect- only fire code when the componet ids loaded for the first time
	useEffect(() => {
		fetchMoviesFromDatabase(`genre/movie/list`).then((res) => {
			console.log(res);
			setGenres(res.genres);
		});
	}, []);
	return (
		<div className="genres-list">
			{genres.map((genre) => (
				<h1>{genre.name}</h1>
			))}
		</div>
	);
}
