import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MovieGenres from './Components/MovieGeners/MovieGenres';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './Components/Search/Search';
import Netflix from './Images/PAC.jpg';

/**
 * This method is the heart of the project.
 * This method holds all the components that is called by index.js script.
 * On this method, a router component is the root of all the other components.
 * Router component allows us to navigate between the available URLs in the project.
 * On the Router component tag, we have a div tag with a custom Header component and an img component.
 * The second tag is the Routes component tag that allows us to define multiple urls for this component.
 * There is only one route given when extends from the route url of the main component or the main project.
 * @returns DOM Element with the prescribed elements
 */
function App() {
	return (
		<Router>
			<div className="Header">
				<SearchBar />
				<img src={Netflix} />
			</div>

			<Routes>
				<Route path="/" element={<LandingPage list="trending/movie/week" tvList="trending/tv/day" comedyList="discover/movie" />} />
			</Routes>
		</Router>
	);
}

export default App;
