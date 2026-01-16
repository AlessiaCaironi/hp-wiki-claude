import { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Spell } from '../types';
import './Spells.css';

const Spells = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getAllSpells();
        setSpells(data);
      } catch (err) {
        setError('Spells data is not available at this time. The API endpoint may not be implemented yet.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  if (loading) {
    return (
      <div className="spells-container">
        <div className="loading">Loading spells...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="spells-container">
        <h1>Spells & Incantations</h1>
        <div className="info-message">
          <p>{error}</p>
          <p>This section will be available once the API endpoint is implemented.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="spells-container">
      <h1>Spells & Incantations</h1>
      <p className="subtitle">Discover the magical spells from the wizarding world</p>

      <div className="spells-grid">
        {spells.map((spell) => (
          <div key={spell.id} className="spell-card">
            <div className="spell-header">
              <h3>{spell.name}</h3>
              {spell.incantation && (
                <p className="incantation">"{spell.incantation}"</p>
              )}
            </div>

            <div className="spell-content">
              {spell.type && (
                <div className="spell-detail">
                  <span className="spell-label">Type:</span>
                  <span className="spell-type-badge">{spell.type}</span>
                </div>
              )}

              {spell.description && (
                <div className="spell-detail">
                  <span className="spell-label">Description:</span>
                  <p className="spell-description">{spell.description}</p>
                </div>
              )}

              {spell.effect && (
                <div className="spell-detail">
                  <span className="spell-label">Effect:</span>
                  <p className="spell-effect">{spell.effect}</p>
                </div>
              )}

              {spell.light && (
                <div className="spell-detail">
                  <span className="spell-label">Light:</span>
                  <span className="spell-light">{spell.light}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {spells.length === 0 && !error && (
        <div className="no-results">No spells found.</div>
      )}
    </div>
  );
};

export default Spells;
