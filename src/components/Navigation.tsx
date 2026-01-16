import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <h1>Harry Potter Wiki</h1>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/houses">Houses</Link>
          </li>
          <li>
            <Link to="/spells">Spells</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
