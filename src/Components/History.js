import React, { useEffect, useState } from 'react';
import './History.css';
import HistoryRow from './HistoryRow';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function History() {
  const user = useSelector(selectUser);
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('trainings')
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

  return (
    <div className="history">
      <h1>History</h1>
      <div className="history__container">
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/practice">
          {trainings.map(({ id, data }) => (
            <HistoryRow key={id} id={id} contents={data} />
          ))}
        </Link>
      </div>
    </div>
  );
}

export default History;
