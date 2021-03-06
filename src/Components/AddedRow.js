import React from 'react';
import './PracticeRow.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { db } from '../firebase';
import { selectTrainingId } from '../features/trainingSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function AddedRow({ key, id, contents: { sets, reps, weight, exercise } }) {
  const trainingId = useSelector(selectTrainingId);
  const user = useSelector(selectUser);
  return (
    <div className="practiceRow">
      <div className="practiceRow__data">
        <h2>{exercise}</h2>
        <h2>{sets} sets</h2>
        <h2>{reps} reps</h2>
        <h2>{weight} kg</h2>
      </div>
    </div>
  );
}

export default AddedRow;
