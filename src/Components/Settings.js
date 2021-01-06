import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Settings.css';
import SaveIcon from '@material-ui/icons/Save';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';

function Settings() {
  const user = useSelector(selectUser);
  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings__container">
        <SaveIcon className="settings__edit" />
        <Avatar src={user.photo} className="settings__avatar" />
        <div className="settings__data">
          <div className="settings__NameRow">
            <div className="settings__nameRowHeaders">
              <h2>Name</h2>
              <h2>Age</h2>
            </div>
            <div className="settings__nameRowInputs">
              <input className="settings__input" type="text" placeholder="" />
              <input className="settings__input" type="number" placeholder="" />
            </div>
          </div>
          <div className="settings__maxesRow">
            <h1>Maxes</h1>
            <div className="settings__maxesContainer">
              <div className="settings__maxContainer">
                <h2>Squat</h2>
                <input
                  className="settings__input"
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="settings__maxContainer">
                <h2>Bench Press</h2>
                <input
                  className="settings__input"
                  type="number"
                  placeholder=""
                />
              </div>
              <div className="settings__maxContainer">
                <h2>Deadlift</h2>
                <input
                  className="settings__input"
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
