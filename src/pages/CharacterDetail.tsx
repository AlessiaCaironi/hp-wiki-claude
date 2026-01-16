import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Character } from '../types';
import './CharacterDetail.css';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        const data = await api.getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError('Failed to fetch character details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="character-detail-container">
        <div className="loading">Loading character details...</div>
      </div>
    );
  }

  if (error || !character) {
    return (
      <div className="character-detail-container">
        <div className="error">{error || 'Character not found'}</div>
        <Link to="/characters" className="back-link">
          Back to Characters
        </Link>
      </div>
    );
  }

  return (
    <div className="character-detail-container">
      <Link to="/characters" className="back-link">
        ← Back to Characters
      </Link>

      <div className="character-detail">
        <div className="character-detail-image">
          <img
            src={character.image || 'https://via.placeholder.com/300x400?text=No+Image'}
            alt={character.name}
          />
        </div>

        <div className="character-detail-info">
          <h1>{character.name}</h1>

          {character.alternate_names && character.alternate_names.length > 0 && (
            <p className="alternate-names">
              Also known as: {character.alternate_names.join(', ')}
            </p>
          )}

          {character.house && (
            <div className="detail-item">
              <span className="label">House:</span>
              <span className={`house-badge ${character.house.toLowerCase()}`}>
                {character.house}
              </span>
            </div>
          )}

          {character.species && (
            <div className="detail-item">
              <span className="label">Species:</span>
              <span className="value">{character.species}</span>
            </div>
          )}

          {character.gender && (
            <div className="detail-item">
              <span className="label">Gender:</span>
              <span className="value">{character.gender}</span>
            </div>
          )}

          {character.dateOfBirth && (
            <div className="detail-item">
              <span className="label">Date of Birth:</span>
              <span className="value">{character.dateOfBirth}</span>
            </div>
          )}

          {character.ancestry && (
            <div className="detail-item">
              <span className="label">Ancestry:</span>
              <span className="value">{character.ancestry}</span>
            </div>
          )}

          {character.patronus && (
            <div className="detail-item">
              <span className="label">Patronus:</span>
              <span className="value">{character.patronus}</span>
            </div>
          )}

          {character.wand && (character.wand.wood || character.wand.core || character.wand.length) && (
            <div className="detail-item">
              <span className="label">Wand:</span>
              <span className="value">
                {[
                  character.wand.wood,
                  character.wand.core,
                  character.wand.length ? `${character.wand.length}"` : null,
                ]
                  .filter(Boolean)
                  .join(', ')}
              </span>
            </div>
          )}

          {character.actor && (
            <div className="detail-item">
              <span className="label">Portrayed by:</span>
              <span className="value">{character.actor}</span>
            </div>
          )}

          <div className="detail-badges">
            {character.wizard && <span className="badge">Wizard</span>}
            {character.hogwartsStudent && <span className="badge">Student</span>}
            {character.hogwartsStaff && <span className="badge">Staff</span>}
            {character.alive !== undefined && (
              <span className={`badge ${character.alive ? 'alive' : 'deceased'}`}>
                {character.alive ? 'Alive' : 'Deceased'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
