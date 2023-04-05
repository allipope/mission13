import { Link } from 'react-router-dom';

function HomePage() {
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

      <>
        <div className="text-center">
          <br />
          <h1>Welcome to the Joel Hilton Film Collection! </h1>
          <br />
          <img src="./JoelHiltonHeadshot (1).jpg" alt="Joel Hilton headshot" />
        </div>
        <div className="text-center">
          <br />
          <p>
            Joel loves movies. This site contains a master list of all his
            favorite movies, along with a link to his podcast. Explore the site
            to find out more about Joel and the movies he loves.
          </p>
        </div>
      </>
    </>
  );
}

export default HomePage;
