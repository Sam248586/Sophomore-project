import React from 'react';
import { useNotification } from '../components/NotificationContext';

function WorkoutTracker({ workouts, removeWorkout, favorites, setFavorites }) {
  const { addNotification } = useNotification();

  const handleRemoveWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    removeWorkout(updatedWorkouts);
    addNotification('Workout removed successfully.');
  };

  const toggleFavorite = (workout) => {
    const isFavorite = favorites.some((fav) => fav.id === workout.id);
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== workout.id));
      addNotification(`Removed ${workout.name} from favorites.`);
    } else {
      setFavorites([...favorites, workout]);
      addNotification(`Added ${workout.name} to favorites.`);
    }
  };

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.length > 0 ? (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id}>
              <strong>{workout.name}</strong> - {workout.type} for {workout.duration} minutes, Calories Burned: {workout.calories}
              <button onClick={() => handleRemoveWorkout(workout.id)}>Remove</button>
              <button onClick={() => toggleFavorite(workout)}>
                {favorites.some((fav) => fav.id === workout.id) ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No workouts added yet.</p>
      )}
    </div>
  );
}

export default WorkoutTracker;
