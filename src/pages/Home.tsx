import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to the Harry Potter Wiki</h1>
        <p>Explore the magical world of Harry Potter</p>
      </div>

      <div className="features">
        <Link to="/characters" className="feature-card">
          <div className="feature-icon">⚡</div>
          <h2>Characters</h2>
          <p>Discover wizards, witches, and magical beings</p>
        </Link>

        <Link to="/houses" className="feature-card">
          <div className="feature-icon">🏰</div>
          <h2>Hogwarts Houses</h2>
          <p>Learn about the four great houses of Hogwarts</p>
        </Link>

        <Link to="/spells" className="feature-card">
          <div className="feature-icon">✨</div>
          <h2>Spells</h2>
          <p>Browse magical spells and incantations</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
