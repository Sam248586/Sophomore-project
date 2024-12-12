import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Favorites from './components/Favorites';
import SettingsPage from './components/SettingsPage';
import WorkoutLibrary from './components/WorkoutLibrary';
import WeightScale from './components/Weightscale';
import WorkoutPlan from './components/WorkoutPlan'; // Import the new WorkoutPlan component
import { NotificationProvider } from './components/NotificationContext';
import NotificationDisplay from './components/NotificationDisplay';

function App() {
  const [workouts, setWorkouts] = useState(() => {
    const storedWorkouts = localStorage.getItem('workouts');
    return storedWorkouts ? JSON.parse(storedWorkouts) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [weightEntries, setWeightEntries] = useState([]);

  useEffect(() => {
    if (Notification.permission === 'default') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else if (permission === 'denied') {
          console.log('Notification permission denied.');
        }
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addWorkout = (workout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workout]);
  };

  const addFavorite = (workout) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some((fav) => fav.id === workout.id);
      if (isAlreadyFavorite) {
        return prevFavorites;
      } else {
        return [...prevFavorites, workout];
      }
    });
  };

  const removeWorkout = (updatedWorkouts) => {
    setWorkouts(updatedWorkouts);
  };

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? storedTheme : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <NotificationProvider>
      <Router>
        <div className={`App ${theme}`}>
          <Header />
          <NotificationDisplay />
          <Routes>
            <Route
              path="/weightscale"
              element={<WeightScale weightEntries={weightEntries} setWeightEntries={setWeightEntries} />}
            />
            <Route
              path="/"
              element={
                <HomePage
                  addWorkout={addWorkout}
                  addFavorite={addFavorite}
                  workouts={workouts}
                  removeWorkout={removeWorkout}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
            />
            <Route path="/settings" element={<SettingsPage theme={theme} setTheme={setTheme} />} />
            <Route path="/library" element={<WorkoutLibrary />} />
            <Route path="/plan" element={<WorkoutPlan />} /> {/* Add WorkoutPlan route */}
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
