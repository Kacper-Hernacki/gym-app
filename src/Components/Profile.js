import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../firebase';

function Profile() {
  const user = useSelector(selectUser);
  const [avatars, setAvatars] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('userData')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setUserData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('avatars')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setAvatars(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const squatString = userData[0]?.data.squat;
  const squatNumber = parseInt(squatString, 10);
  const deadliftString = userData[0]?.data.deadlift;
  const deadliftNumber = parseInt(deadliftString, 10);
  const benchString = userData[0]?.data.bench;
  const benchNumber = parseInt(benchString, 10);

  return (
    <div className="profile">
      <Link to="/settings">
        <CreateIcon className="profile__edit" />
      </Link>

      {avatars.length === 0 ? (
        <Avatar src={user.photo} className="profile__avatar" />
      ) : (
        <Avatar src={avatars[0]?.data.imageUrl} className="profile__avatar" />
      )}

      <div className="profile__data">
        <div className="profile__NameRow">
          <h1>{userData[0]?.data.name}</h1>
          <h1>{userData[0]?.data.age} years</h1>
        </div>
        <div className="profile__maxesRow">
          <h1>Maxes</h1>
          <div className="profile__maxesContainer">
            <div className="profile__maxContainer">
              <h2>Squat</h2>
              <h2>{userData[0]?.data.squat} kg</h2>
            </div>
            <div className="profile__maxContainer">
              <h2>Bench Press</h2>
              <h2>{userData[0]?.data.bench} kg</h2>
            </div>
            <div className="profile__maxContainer">
              <h2>Deadlift</h2>
              <h2>{userData[0]?.data.deadlift} kg</h2>
            </div>
          </div>

          <h2>Total: {squatNumber + deadliftNumber + benchNumber} kg</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
