import React from 'react';
import './PracticeRow.css';

function PracticeRow({ key, contents: { sets, reps, weight, exercise } }) {
  console.log('practice >>>>>>>>>>>>>>', exercise, sets, reps, weight);
  return (
    <div className="practiceRow">
      <h2>{exercise}</h2>
      <h2>{sets} sets</h2>
      <h2>{reps} reps</h2>
      <h2>{weight} kg</h2>
    </div>
  );
}

export default PracticeRow;
