import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import MovieGenres from './Components/MovieGeners/MovieGenres';
import React from 'react';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SearchBar from './Components/Search/Search';
import Netflix from './Images/PAC.jpg'

function App() {
  return (
    <Router>
      <div className = 'Header'>
      <SearchBar/>
      <img src = {Netflix}/>
      </div>
     
      <Routes>
        <Route path ='/' element = {<LandingPage list = 'trending/movie/week' tvList='trending/tv/day' comedyList='discover/movie'/>}/>
      </Routes>
    </Router>

  );
}

export default App;
