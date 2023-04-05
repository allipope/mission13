import React from 'react';
import { Link } from 'react-router-dom';

function PodcastInfo() {
  return (
    <>
      <>
        <div className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <Link to="/" className="navbar-brand mb-0 h1">
            Home
          </Link>
          <Link to="/podcast" className="navbar-item navbar-brand">
            Podcast
          </Link>
          <Link to="/movieList" className="nav-item navbar-brand">
            Movie Collection
          </Link>
        </div>
      </>

      <div className="text-center">
        <br />
        <h1>Joel has a podcast!</h1>
        <h3>
          Click the link below to listen to his podcast and learn more about all
          your favorite movies.
        </h3>
        <br />
        <a href="https://baconsale.com/">Find his podcast here</a>
      </div>
    </>
  );
}

export default PodcastInfo;
