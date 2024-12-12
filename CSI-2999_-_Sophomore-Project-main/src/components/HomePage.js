import React from 'react';
import WorkoutPlanner from './WorkoutPlanner';
import WorkoutTracker from './WorkoutTracker';

function HomePage({
  addWorkout,
  addFavorite,
  workouts,
  removeWorkout,
  favorites,
  setFavorites,
}) {
  return (
    <>
      <h1>FitTrax - Workout Planner</h1>
      <WorkoutPlanner addWorkout={addWorkout} addFavorite={addFavorite} />
      <WorkoutTracker
        workouts={workouts}
        removeWorkout={removeWorkout}
        favorites={favorites}           // Pass favorites
        setFavorites={setFavorites}     // Pass setFavorites
      />
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h2>Plan Your Week</h2>
        <p>
          <a href="/plan" style={{ textDecoration: 'none', color: '#007bff' }}>
            Go to Workout Plan
          </a>
        </p>
      </div>
    </>
  );
}

export default HomePage;
