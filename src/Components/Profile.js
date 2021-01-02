import { Avatar } from '@material-ui/core';
import React from 'react';
import './Profile.css';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Link to="/settings">
        <CreateIcon className="profile__edit" />
      </Link>

      <Avatar src={user.photo} className="profile__avatar" />
      <div className="profile__data">
        <div className="profile__NameRow">
          <h1>Kacper</h1>
          <h1>25 years</h1>
        </div>
        <div className="profile__maxesRow">
          <h1>Maxes</h1>
          <div className="profile__maxesContainer">
            <div className="profile__maxContainer">
              <h2>Squat</h2>
              <h2>150 kg</h2>
            </div>
            <div className="profile__maxContainer">
              <h2>Bench Press</h2>
              <h2>100 kg</h2>
            </div>
            <div className="profile__maxContainer">
              <h2>Deadlift</h2>
              <h2>150 kg</h2>
            </div>
          </div>
          <h2>Total: 400 kg</h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
