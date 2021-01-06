import React, { useEffect, useState } from 'react';
import './Practice.css';
import PracticeRow from './PracticeRow';
import firebase from 'firebase';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import {
  selectTrainingId,
  selectTrainingName,
} from '../features/trainingSlice';

function Practice() {
  const trainingName = useSelector(selectTrainingName);
  const trainingId = useSelector(selectTrainingId);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (trainingId) {
      db.collection('trainings')
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
      <h1>{trainingName}</h1>
      <div className="practice__container">
        {exercises?.map(({ id, data }) => (
          <PracticeRow key={id} contents={data} />
        ))}
      </div>
    </div>
  );
}

export default Practice;
