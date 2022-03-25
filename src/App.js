import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MovieGenres from './Components/MovieGeners/MovieGenres';
import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SearchBar from './Components/Search/Search';

function App() {
  return (
    <Router>
      <SearchBar/>
      <Routes>
        <Route path ='/' element = {<LandingPage list = 'trending/movie/week' tvList='trending/tv/day'/>}/>
      </Routes>
    </Router>

  );
}

export default App;
