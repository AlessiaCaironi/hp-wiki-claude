import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { Character } from '../types';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'students' | 'staff'>('all');
  const [houseFilter, setHouseFilter] = useState<string>('all');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);

        let data: Character[];
        if (houseFilter !== 'all') {
          data = await api.getCharactersByHouse(houseFilter);
        } else if (filter === 'students') {
          data = await api.getStudents();
        } else if (filter === 'staff') {
          data = await api.getStaff();
        } else {
          data = await api.getAllCharacters();
        }

        setCharacters(data);
      } catch (err) {
        setError('Failed to fetch characters. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filter, houseFilter]);

  const getCharacterImage = (character: Character) => {
    return character.image || 'https://via.placeholder.com/150x200?text=No+Image';
  };

  if (loading) {
    return (
      <div className="characters-container">
        <div className="loading">Loading characters...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="characters-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="characters-container">
      <h1>Characters</h1>

      <div className="filters">
        <div className="filter-group">
          <label>Type:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value as 'all' | 'students' | 'staff')}>
            <option value="all">All Characters</option>
            <option value="students">Students</option>
            <option value="staff">Staff</option>
          </select>
        </div>

        <div className="filter-group">
          <label>House:</label>
          <select value={houseFilter} onChange={(e) => setHouseFilter(e.target.value)}>
            <option value="all">All Houses</option>
            <option value="gryffindor">Gryffindor</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
            <option value="slytherin">Slytherin</option>
          </select>
        </div>
      </div>

      <div className="characters-grid">
        {characters.map((character) => (
          <Link
            to={`/characters/${character.id}`}
            key={character.id}
            className="character-card"
          >
            <div className="character-image">
              <img src={getCharacterImage(character)} alt={character.name} />
            </div>
            <div className="character-info">
              <h3>{character.name}</h3>
              {character.house && (
                <span className={`house-badge ${character.house.toLowerCase()}`}>
                  {character.house}
                </span>
              )}
              {character.actor && (
                <p className="actor">Portrayed by {character.actor}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {characters.length === 0 && (
        <div className="no-results">No characters found with the selected filters.</div>
      )}
    </div>
  );
};

export default Characters;
