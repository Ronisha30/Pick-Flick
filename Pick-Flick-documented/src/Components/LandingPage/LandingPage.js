import React, { useEffect, useState } from 'react';
import { fetchMoviesFromDatabase } from '../../NetworkConnections';
import SingleMovie from '../SingleMovie/SingleMovie';
import './LandingPage.css';
import MovieList from '../MovieList/MovieList';

/**
 * This is the landing page of the web.
 * Its is used to display all the movie categories into the page.
 * This method holds the main content of the page.
 * @param {Object} props the props that was passed to this component when it was being called.
 * @returns DOM element.
 */
export default function LandingPage(props) {
	const [movies, setMovies] = useState([]);
	const [shows, setShows] = useState([]);
	const [comedies, setComedies] = useState([]);

	/**
	 * React hook that is used to fetch movies that is in the comedies category.
	 * It uses javascript AJAX fetch API to get the movies.
	 */
	useEffect(() => {
		fetchMoviesFromDatabase(props.comedyList, '&with_genres=35').then((res) => setComedies(res.results));
	}, []);

	/**
	 * React hook that is used to fetch movies that is in the movies categories.
	 * It also uses javascript AJAX fetch API to fetch movies.
	 */
	useEffect(() => {
		fetchMoviesFromDatabase(props.list).then((res) => setMovies(res.results));
	}, []);

	/**
	 * React hook that is used to fetch movies that is in the tv shows categories.
	 * It also uses javascript AJAX fetch API to fetch movies.
	 */
	useEffect(() => {
		fetchMoviesFromDatabase(props.tvList).then((res) => setShows(res.results));
	}, []);

	return (
		<div className="landing-page">
			<h1>Trending</h1>
			<MovieList movies={movies} />
			<h1>TV Shows</h1>
			<MovieList movies={shows} />
			<h1>Comedies</h1>
			<MovieList movies={comedies} />
		</div>
	);
}
