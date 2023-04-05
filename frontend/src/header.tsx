import React from 'react';
import { Link } from 'react-router-dom';

function topBanner() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link to="/" className="navbar-brand mb-0 h1">
          Home
        </Link>
        <Link to="/podcast" className="navbar-item navbar-brand">
          Podcast
        </Link>
        <Link to="/movies" className="nav-item navbar-brand">
          Movie Collection
        </Link>
      </div>
    </>
  );
}

export default topBanner;
