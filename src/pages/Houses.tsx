import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { House } from '../types';
import './Houses.css';

const Houses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getHouses();
        setHouses(data);
      } catch (err) {
        setError('Failed to fetch houses. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (loading) {
    return (
      <div className="houses-container">
        <div className="loading">Loading houses...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="houses-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="houses-container">
      <h1>Hogwarts Houses</h1>
      <p className="subtitle">The four great houses of Hogwarts School of Witchcraft and Wizardry</p>

      <div className="houses-grid">
        {houses.map((house) => (
          <div key={house.id} className={`house-card ${house.name.toLowerCase()}`}>
            <div className="house-header">
              <h2>{house.name}</h2>
              {house.animal && <p className="house-animal">{house.animal}</p>}
            </div>

            <div className="house-content">
              {house.founder && (
                <div className="house-detail">
                  <strong>Founder:</strong> {house.founder}
                </div>
              )}

              {house.element && (
                <div className="house-detail">
                  <strong>Element:</strong> {house.element}
                </div>
              )}

              {house.colors && house.colors.length > 0 && (
                <div className="house-detail">
                  <strong>Colors:</strong>
                  <div className="color-badges">
                    {house.colors.map((color, index) => (
                      <span key={index} className="color-badge">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {house.traits && house.traits.length > 0 && (
                <div className="house-detail">
                  <strong>Traits:</strong>
                  <div className="traits">
                    {house.traits.map((trait, index) => (
                      <span key={index} className="trait-badge">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {house.ghost && (
                <div className="house-detail">
                  <strong>House Ghost:</strong> {house.ghost}
                </div>
              )}

              {house.commonRoom && (
                <div className="house-detail">
                  <strong>Common Room:</strong> {house.commonRoom}
                </div>
              )}

              {house.heads && house.heads.length > 0 && (
                <div className="house-detail">
                  <strong>Head of House:</strong> {house.heads.join(', ')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
