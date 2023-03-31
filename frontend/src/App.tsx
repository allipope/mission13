import React from 'react';
import './App.css';
import PodcastInfo from './podcast';
import MovieList from './Movies';
import HomePage from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/podcast" element={<PodcastInfo />} />
            <Route path="/movies" element={<MovieList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
