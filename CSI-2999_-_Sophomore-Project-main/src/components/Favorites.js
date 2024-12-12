// Favorites.js

import React from 'react';

function Favorites({ favorites, setFavorites }) {
  const removeFavorite = (workout) => {
    setFavorites(favorites.filter((fav) => fav.id !== workout.id));
  };

  return (
    <div className="favorites-page">
      <h2>Your Favorite Workouts:</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>
              <strong>{fav.name}</strong> - {fav.type} for {fav.duration} minutes, Calories Burned: {fav.calories}
              <button
                onClick={() => removeFavorite(fav)}
                style={{
                  marginLeft: '15px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite workouts added yet.</p>
      )}
    </div>
  );
}

export default Favorites;
