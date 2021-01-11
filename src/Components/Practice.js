import React, { useEffect, useState } from 'react';
import './Practice.css';
import PracticeRow from './PracticeRow';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import {
  selectTrainingId,
  selectTrainingName,
} from '../features/trainingSlice';
import DeleteIcon from '@material-ui/icons/Delete';
import { selectUser } from '../features/userSlice';

function Practice() {
  const user = useSelector(selectUser);
  const trainingName = useSelector(selectTrainingName);
  const trainingId = useSelector(selectTrainingId);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (trainingId) {
      db.collection('users')
        .doc(user.uid)
        .collection('trainings')
        .doc(trainingId)
        .collection('exercises')
        .onSnapshot((snapshot) =>
          setExercises(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
      console.log('>>>>>>>>>>>>>', exercises);
    }
  }, [trainingId]);

  console.log('>>>>>>>>>>>>>', trainingName, trainingId);

  return (
    <div className="practice">
      <DeleteIcon
        className="practice__delete"
        onClick={(event) =>
          db
            .collection('users')
            .doc(user.uid)
            .collection('trainings')
            .doc(trainingId)
            .delete()
        }
      />
      <h1>{trainingName}</h1>
      <div className="practice__container">
        {exercises?.map(({ id, data }) => (
          <PracticeRow key={id} id={id} contents={data} />
        ))}
      </div>
    </div>
  );
}

export default Practice;
