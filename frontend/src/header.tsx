import React from 'react';
import { Link } from 'react-router-dom';

function topBanner() {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li>
          <Link to="/" className="list-group-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/podcast" className="list-group-item">
            Podcast
          </Link>
        </li>
        <li>
          <Link to="/movies" className="list-group-item">
            Movies List
          </Link>
        </li>
      </ul>
    </>
  );
}

export default topBanner;
