import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import { Link } from 'react-router-dom';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };

    fetchMovies();
  }, []);

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

      <div>
        <br />
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <table className="table table-bordered table-striped table-sm w-75 m-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.title}</td>
              <td>{m.category}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
    </>
  );
}

export default MovieList;
