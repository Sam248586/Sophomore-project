import React, { useState } from 'react';
import { useNotification } from './NotificationContext';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const focusOptions = ['Push', 'Pull', 'Leg'];

function WorkoutPlan() {
  const { addNotification } = useNotification();
  const [workoutPlan, setWorkoutPlan] = useState(
    daysOfWeek.map((day) => ({ day, focus: '', workouts: [] }))
  );

  const handleFocusChange = (dayIndex, focus) => {
    const updatedPlan = [...workoutPlan];
    updatedPlan[dayIndex].focus = focus;
    setWorkoutPlan(updatedPlan);
    addNotification(`Focus for ${daysOfWeek[dayIndex]} set to ${focus}.`);
  };

  const handleAddWorkout = (dayIndex, workoutName) => {
    const updatedPlan = [...workoutPlan];
    updatedPlan[dayIndex].workouts.push(workoutName);
    setWorkoutPlan(updatedPlan);
    addNotification(`${workoutName} added to ${daysOfWeek[dayIndex]}.`);
  };

  return (
    <div className="workout-plan">
      <h2>7-Day Workout Plan</h2>
      <ul>
        {workoutPlan.map((dayPlan, index) => (
          <li key={dayPlan.day} className="workout-day">
            <h3>{dayPlan.day}</h3>
            <label>
              Focus:
              <select
                value={dayPlan.focus}
                onChange={(e) => handleFocusChange(index, e.target.value)}
              >
                <option value="">Select focus</option>
                {focusOptions.map((focus) => (
                  <option key={focus} value={focus}>
                    {focus}
                  </option>
                ))}
              </select>
            </label>
            <h4>Workouts:</h4>
            <ul>
              {dayPlan.workouts.length > 0 ? (
                dayPlan.workouts.map((workout, i) => <li key={i}>{workout}</li>)
              ) : (
                <p>No workouts added yet.</p>
              )}
            </ul>
            <button
              onClick={() => {
                const workoutName = prompt(
                  `Add a workout for ${dayPlan.day} (${dayPlan.focus}):`
                );
                if (workoutName) handleAddWorkout(index, workoutName);
              }}
            >
              Add Workout
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutPlan;
