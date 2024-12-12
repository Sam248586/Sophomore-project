import React, { useState } from 'react';
import { useNotification } from './NotificationContext';

function WeightScale({ weightEntries, setWeightEntries }) {
  const { addNotification } = useNotification();
  const [newWeight, setNewWeight] = useState('');
  const [date, setDate] = useState('');

  const addWeightEntry = () => {
    if (newWeight && date) {
      const entry = {
        id: Date.now(),
        weight: parseFloat(newWeight),
        date,
      };
      setWeightEntries([...weightEntries, entry]);
      addNotification('New weight entry added successfully.');
      setNewWeight('');
      setDate('');
    }
  };

  const removeWeightEntry = (id) => {
    setWeightEntries(weightEntries.filter((entry) => entry.id !== id));
    addNotification('Weight entry removed successfully.');
  };

  return (
    <div className="weight-scale-page">
      <h2>Track Your Weight Progress</h2>

      {/* Form to add weight entry */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          style={{
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '14px',
          }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{
            padding: '10px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '14px',
          }}
        />
        <button
          onClick={addWeightEntry}
          style={{
            padding: '10px 15px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Add Entry
        </button>
      </div>

      {/* Display weight entries */}
      {weightEntries.length > 0 ? (
        <ul>
          {weightEntries.map((entry) => (
            <li key={entry.id} style={{ marginBottom: '10px' }}>
              <strong>{entry.date}</strong>: {entry.weight} kg
              <button
                onClick={() => removeWeightEntry(entry.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No weight entries recorded yet.</p>
      )}
    </div>
  );
}

export default WeightScale;
