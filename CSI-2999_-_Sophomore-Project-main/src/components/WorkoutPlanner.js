import React, { useState } from 'react';
import { useNotification } from './NotificationContext';

function WorkoutPlanner({ addWorkout, addFavorite }) {
  const { addNotification } = useNotification();

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesPerMinute, setCaloriesPerMinute] = useState(0);
  const [calories, setCalories] = useState(0);

  const availableWorkouts = [
    { name: 'Bench Press', caloriesPerMinute: 5 },
    { name: 'Squat', caloriesPerMinute: 6 },
    { name: 'Deadlift', caloriesPerMinute: 7 },
    { name: 'Pull-Up', caloriesPerMinute: 8 },
    { name: 'Push-Up', caloriesPerMinute: 5 },
    { name: 'Cardio', caloriesPerMinute: 10 },
    { name: 'Cycling', caloriesPerMinute: 9 },
    { name: 'Yoga', caloriesPerMinute: 4 },
    { name: 'Lat Pull Downs', caloriesPerMinute: 6 },
    { name: 'Tricep Curls', caloriesPerMinute: 6 },
    { name: 'Skull Crushers', caloriesPerMinute: 7 },
    { name: 'Leg Press', caloriesPerMinute: 8 },
    { name: 'Hamstring Curls', caloriesPerMinute: 7 },
    { name: 'Leg Extensions', caloriesPerMinute: 7 },
    { name: 'Hammer Curls', caloriesPerMinute: 5 },
    { name: 'Incline Dumbbell Curls', caloriesPerMinute: 5 },
    { name: 'Preacher Curls', caloriesPerMinute: 5 },
    { name: 'Lateral Shoulder Raise', caloriesPerMinute: 4 },
    { name: 'Face Pulls', caloriesPerMinute: 6 },
    { name: 'Lunges', caloriesPerMinute: 8 },
    { name: 'Overhead Press', caloriesPerMinute: 5 },
    { name: 'Stair Climbing', caloriesPerMinute: 11 },
    { name: 'Deadlifts', caloriesPerMinute: 9 },
    { name: 'Hip Thrusts', caloriesPerMinute: 8 },
    { name: 'Bulgarian Split Squats', caloriesPerMinute: 7 },
    { name: 'Chest Flys', caloriesPerMinute: 4 },
    { name: 'Incline Dumbbell Press', caloriesPerMinute: 7 },
    { name: 'Rows', caloriesPerMinute: 6 },
    { name: 'Calf Raises', caloriesPerMinute: 4 },
  ];

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);

    const workout = availableWorkouts.find((workout) => workout.name === selectedType);
    if (workout) {
      setCaloriesPerMinute(workout.caloriesPerMinute);
    } else {
      setCaloriesPerMinute(0);
    }

    setCalories(0);
    setDuration('');
  };

  const handleDurationChange = (e) => {
    const inputDuration = e.target.value;
    setDuration(inputDuration);

    const totalCalories = inputDuration * caloriesPerMinute;
    setCalories(totalCalories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !type || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    const newWorkout = {
      id: Date.now().toString(),
      name,
      type,
      duration: Number(duration),
      calories: Number(calories),
    };

    addWorkout(newWorkout);
    addNotification(`Added ${name} to your workouts.`);
    setName('');
    setType('');
    setDuration('');
    setCalories(0);
    setCaloriesPerMinute(0);
  };

  const handleAddToFavorites = (e) => {
    e.preventDefault();

    if (!name || !type || !duration) {
      alert('Please fill in all fields.');
      return;
    }

    const newWorkout = {
      id: Date.now().toString(),
      name,
      type,
      duration: Number(duration),
      calories: Number(calories),
    };

    addFavorite(newWorkout);
    addNotification(`${name} added to favorites.`);
  };

  return (
    <div>
      <h2>Plan Your Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Workout Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Workout Type:
          <select value={type} onChange={handleTypeChange} required>
            <option value="" disabled>
              Select workout
            </option>
            {availableWorkouts.map((workout) => (
              <option key={workout.name} value={workout.name}>
                {workout.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Duration (minutes):
          <input
            type="number"
            value={duration}
            onChange={handleDurationChange}
            required
            min="1"
          />
        </label>
        <br />
        <p>Calories Burned: {calories ? calories : 0} kcal</p>
        <button type="submit">Add Workout</button>
        <button
          type="button"
          onClick={handleAddToFavorites}
          style={{ marginTop: '15px' }}
        >
          Add to Favorites
        </button>
      </form>
    </div>
  );
}

export default WorkoutPlanner;
