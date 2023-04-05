import { useState } from 'react';
import data from './MovieData.json';
import { Link } from 'react-router-dom';

const moviedata = data.MovieData;

function Movies() {
  const [ListOMovies, setListOMovies] = useState(moviedata);

  const addMovie = () => {
    setListOMovies([
      ...moviedata,
      {
        Category: 'Comedy',
        Title: 'Hunt for the Wilderpeople',
        Year: 2016,
        Director: 'Taika Waititi',
        Rating: 'PG-13',
        Edited: 'No',
      },
    ]);
  };

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
          <Link to="/movies" className="nav-item navbar-brand">
            Movie Collection
          </Link>
        </div>
      </>

      <div>
        <br />
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <div>
        <table className="table table-bordered table-striped table-sm w-75 m-auto">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {ListOMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <button className="btn btn-primary text-center" onClick={addMovie}>
        Add a movie
      </button>
    </>
  );
}

export default Movies;
