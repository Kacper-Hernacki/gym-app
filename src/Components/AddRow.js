import React, { useState } from 'react';
import './AddRow.css';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function AddRow({ key, trainingId, trainingName }) {
  const user = useSelector(selectUser);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const addExercise = (e) => {
    e.preventDefault();
    if (trainingId) {
      db.collection('users')
        .doc(user.uid)
        .collection('trainings')
        .doc(trainingId)
        .collection('exercises')
        .add({
          exercise: exercise,
          sets: sets,
          reps: reps,
          weight: weight,
        });
    }

    setExercise('');
    setSets('');
    setWeight('');
    setReps('');
  };

  return (
    <div className="addRow">
      <div className="addRow__line">
        <h2>Exercise</h2>
        <input
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="addRow__number addRow__exercise"
          placeholder="exercise"
          type="text"
        />
      </div>
      <div className="addRow__line">
        <h2>Sets</h2>
        <input
          className="addRow__number"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          placeholder="sets"
          type="number"
        />
        <h2>Reps</h2>
        <input
          className="addRow__number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder="reps"
          type="number"
        />
        <h2>weight</h2>
        <input
          className="addRow__number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="weight"
          type="number"
        />
      </div>

      <button className="addRow__button" onClick={addExercise}>
        add
      </button>
    </div>
  );
}

export default AddRow;
