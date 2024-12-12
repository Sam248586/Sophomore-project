import React, { useState } from 'react';

function WorkoutLibrary() {
  const [searchTerm, setSearchTerm] = useState('');

  const availableWorkouts = [
    { 
      name: 'Bench Press',
      description: 'A chest-focused exercise that engages triceps and shoulders. Great for building upper body strength.',
      setup: 'Lie on a bench with your feet flat on the ground. Grip the barbell slightly wider than shoulder-width, and press it above your chest.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Squat',
      description: 'A lower body workout targeting glutes, hamstrings, and quads. Fundamental for leg strength.',
      setup: 'Stand with feet shoulder-width apart, holding a barbell across your shoulders or with bodyweight only. Lower yourself by bending your knees.',
      recommendedSetsReps: '3-4 sets of 10-15 reps',
      caloriesPerMinute: 6,
    },
    {
      name: 'Deadlift',
      description: 'A compound movement working the back, glutes, and hamstrings. Excellent for overall body strength.',
      setup: 'Stand with feet hip-width apart, grip the barbell slightly wider than shoulder-width, and lift it while keeping your back straight.',
      recommendedSetsReps: '3-5 sets of 4-6 reps',
      caloriesPerMinute: 7,
    },
    {
      name: 'Pull-Up',
      description: 'An upper body exercise focusing on back and biceps. Enhances upper body pulling strength.',
      setup: 'Grip a pull-up bar with palms facing away, and pull yourself up until your chin is above the bar.',
      recommendedSetsReps: '3-4 sets of 6-12 reps',
      caloriesPerMinute: 8,
    },
    {
      name: 'Push-Up',
      description: 'A bodyweight exercise for chest, triceps, and shoulders. Builds upper body endurance and strength.',
      setup: 'Start in a plank position with hands slightly wider than shoulder-width. Lower your body until your chest nearly touches the floor.',
      recommendedSetsReps: '3-4 sets of 15-20 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Cardio',
      description: 'An aerobic workout, often running or jumping rope, that increases heart rate and burns calories.',
      setup: 'Choose a cardio machine or exercise, such as running, cycling, or jumping rope, and set a steady pace.',
      recommendedSetsReps: '20-30 minutes of steady cardio',
      caloriesPerMinute: 10,
    },
    {
      name: 'Cycling',
      description: 'A lower body-focused cardio exercise. Improves leg strength and cardiovascular endurance.',
      setup: 'Use a stationary bike or regular bicycle, adjusting the seat to hip level. Pedal at a steady pace or in intervals.',
      recommendedSetsReps: '30-45 minutes',
      caloriesPerMinute: 9,
    },
    {
      name: 'Yoga',
      description: 'A mind-body practice involving stretching and breathing. Enhances flexibility, balance, and relaxation.',
      setup: 'Set up a yoga mat and find a quiet space. Follow a guided session or routine for various poses.',
      recommendedSetsReps: '30-60 minutes',
      caloriesPerMinute: 4,
    },
    {
      name: 'Lat Pull Downs',
      description: 'Targets the latissimus dorsi muscles in the back.',
      setup: 'Use a lat pulldown machine with an adjustable weight stack. Grip the bar with a wide or narrow grip depending on the variation.',
      recommendedSetsReps: '3-4 sets of 10-12 reps',
      caloriesPerMinute: 6,
    },
    {
      name: 'Tricep Curls',
      description: 'Strengthens the medial and lateral heads of the triceps.',
      setup: 'Use a cable machine with a rope attachment set slightly above head height. Pull down from your chest to your waist.',
      recommendedSetsReps: '3-4 sets of 10-12 reps',
      caloriesPerMinute: 6,
    },
    {
      name: 'Skull Crushers',
      description: 'Targets the lateral head of the triceps.',
      setup: 'Lie on a flat bench with a dumbbell or EZ-bar. Lower the weight toward your forehead by bending only at the elbows.',
      recommendedSetsReps: '3 sets of 15-20 reps',
      caloriesPerMinute: 7,
    },
    {
      name: 'Leg Press',
      description: 'Strengthens quadriceps, hamstrings, and glutes.',
      setup: 'Use a leg press machine and place your feet shoulder-width apart on the platform. Push the platform by extending your legs.',
      recommendedSetsReps: '4 sets of increasing weight of 8-15 reps',
      caloriesPerMinute: 8,
    },
    {
      name: 'Hamstring Curls',
      description: 'Targets the hamstring muscles on the back of the upper legs.',
      setup: 'Use a hamstring curl machine. Bend your knees to move the weight in a controlled motion.',
      recommendedSetsReps: '4 sets of 10-15 reps',
      caloriesPerMinute: 7,
    },
    {
      name: 'Leg Extensions',
      description: 'Isolate and strengthen your quadriceps muscles.',
      setup: 'Sit on a leg extension machine, adjust the pad above your ankles, and extend your legs forward.',
      recommendedSetsReps: '3-4 sets of 10-15 reps',
      caloriesPerMinute: 7,
    },
    {
      name: 'Hammer Curls',
      description: 'Targets the brachialis and brachioradialis muscles in the arms.',
      setup: 'Stand with dumbbells at your sides, palms facing in. Curl the weights up while keeping your elbows close to your body.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Incline Dumbbell Curls',
      description: 'Emphasizes the long head of the biceps for peak development.',
      setup: 'Sit on an incline bench with dumbbells hanging at arms length. Curl the weights up without swinging.',
      recommendedSetsReps: '3 sets of 10-12 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Preacher Curls',
      description: 'Isolates the biceps, minimizing shoulder movement.',
      setup: 'Use a preacher bench and an EZ-bar or dumbbell. Rest your arms on the pad and curl the weight up.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Lateral Shoulder Raise',
      description: 'Strengthens the middle deltoids for shoulder width.',
      setup: 'Stand with dumbbells at your sides. Lift your arms out to the sides until they are parallel to the floor.',
      recommendedSetsReps: '3 sets of 12-15 reps',
      caloriesPerMinute: 4,
    },
    {
      name: 'Face Pulls',
      description: 'Targets the rear deltoids and upper back muscles.',
      setup: 'Use a cable machine with a rope attachment at face level. Pull the rope toward your face while flaring your elbows outward.',
      recommendedSetsReps: '3-4 sets of 12-15 reps',
      caloriesPerMinute: 6,
    },
    {
      name: 'Lunges',
      description: 'Works the quads, glutes, and hamstrings.',
      setup: 'Stand upright. Step forward with one leg and lower your body until both knees are at 90 degrees.',
      recommendedSetsReps: '3 sets of 10-12 reps per leg',
      caloriesPerMinute: 8,
    },
    {
      name: 'Overhead Press',
      description: 'Strengthens shoulders, triceps, and upper chest.',
      setup: 'Stand with a barbell or dumbbells at shoulder height. Press the weight overhead until your arms are fully extended.',
      recommendedSetsReps: '3-4 sets of 6-10 reps',
      caloriesPerMinute: 5,
    },
    {
      name: 'Stair Climbing',
      description: 'A cardiovascular exercise that also tones the lower body.',
      setup: 'Use a stair climber machine or climb real stairs at a steady pace.',
      recommendedSetsReps: '15-30 minutes of continuous activity',
      caloriesPerMinute: 11,
    },
    {
      name: 'Hip Thrusts',
      description: 'Isolates the glute muscles for strength and size.',
      setup: 'Sit on the ground with your back against a bench. Place a barbell over your hips and thrust upward.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 8,
    },
    {
      name: 'Bulgarian Split Squats',
      description: 'Targets quads, glutes, and improves balance.',
      setup: 'Stand lunge-length in front of a bench. Place one foot behind you on the bench and lower your body.',
      recommendedSetsReps: '3 sets of 8-10 reps per leg',
      caloriesPerMinute: 7,
    },
    {
      name: 'Chest Flys',
      description: 'Isolates the chest muscles for development.',
      setup: 'Lie on a bench with dumbbells above your chest. Lower your arms out to the sides in a wide arc.',
      recommendedSetsReps: '3-4 sets of 10-15 reps',
      caloriesPerMinute: 4,
    },
    {
      name: 'Incline Dumbbell Press',
      description: 'Targets the upper chest and shoulders.',
      setup: 'Set a bench to an incline. Press dumbbells upward from chest level.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 7,
    },
    {
      name: 'Rows',
      description: 'Strengthens the back and biceps.',
      setup: 'Bend over with back straight, holding a barbell or dumbbells. Pull the weight toward your torso.',
      recommendedSetsReps: '3-4 sets of 8-12 reps',
      caloriesPerMinute: 6,
    },
    {
      name: 'Calf Raises',
      description: 'Isolates the calf muscles.',
      setup: 'Stand on a step with the balls of your feet. Raise your heels as high as possible.',
      recommendedSetsReps: '3-4 sets of 15-20 reps',
      caloriesPerMinute: 4,
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredWorkouts = availableWorkouts.filter((workout) =>
    workout.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="workout-library">
      <h2>Workout Library</h2>
      <input
        type="text"
        placeholder="Search workouts..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <ul className="workout-list">
        {filteredWorkouts.map((workout, index) => (
          <li key={index} className="workout-item">
            <h3>{workout.name}</h3>
            <p><strong>Description:</strong> {workout.description}</p>
            <p><strong>Setup:</strong> {workout.setup}</p>
            <p><strong>Recommended Sets/Reps:</strong> {workout.recommendedSetsReps}</p>
            <p><strong>Calories Burned per Minute:</strong> {workout.caloriesPerMinute}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutLibrary;
