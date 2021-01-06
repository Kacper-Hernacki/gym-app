import React, { useEffect, useState } from 'react';
import './Add.css';
import AddRow from './AddRow';
import AddIcon from '@material-ui/icons/Add';
import { db } from '../firebase';
import firebase from 'firebase';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { setTraining } from '../features/trainingSlice';
import FlipMove from 'react-flip-move';
import PracticeRow from './PracticeRow';

function Add() {
  const [title, setTitle] = useState('');
  const [trainings, setTrainings] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [completedName, setCompletedName] = useState(false);

  console.log('CompletedName start >>>>>>>>>>>', completedName);

  const addTraining = (e) => {
    e.preventDefault();
    const trainingName = title;
    setCompletedName(true);

    if (trainingName) {
      db.collection('trainings').add({
        trainingName: trainingName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTitle('');
    }
  };

  useEffect(() => {
    db.collection('trainings')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setTrainings(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  console.log(trainings);

  const trainingId = trainings[0]?.id;
  const trainingName = trainings[0]?.data.trainingName;

  console.log('ID >>>>>>>>>>>>  ', trainingId);
  console.log('NAME >>>>>>>>>>>>>>>>>>   ', trainingName);

  useEffect(() => {
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
    console.log(exercises);
  }, [trainingId]);

  console.log(trainings);

  const finishTraining = (e) => {
    setCompletedName(false);
    console.log('CompletedName  finished >>>>>>>>>>>', completedName);
  };

  console.log('CompletedName  finished before divs >>>>>>>>>>>', completedName);
  return (
    <div className="add">
      <div className="add__container">
        <h1>Your Training</h1>
        {!completedName && (
          <div className="add__description">
            <input
              className="add__input"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Description"
              type="text"
            />
            <button onClick={addTraining}>Dalej</button>
          </div>
        )}

        {completedName && (
          <AddRow
            key={trainingId}
            trainingId={trainingId}
            trainingName={trainingName}
          />
        )}
        {completedName && (
          <div className="add__exercises">
            <FlipMove>
              {exercises?.map(({ id, data }) => (
                <PracticeRow key={id} contents={data} />
              ))}
            </FlipMove>
          </div>
        )}
        {completedName && (
          <button className="add__completed" onClick={finishTraining}>
            Completed
          </button>
        )}
      </div>
    </div>
  );
}

export default Add;
