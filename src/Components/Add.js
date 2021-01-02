import React from 'react';
import './Add.css';
import AddRow from './AddRow';
import AddIcon from '@material-ui/icons/Add';

function Add() {
  return (
    <div className="add">
      <div className="add__container">
        <h1>Your Training</h1>
        <input placeholder="Description" type="text" />
        <AddRow />
        <AddIcon />
      </div>
    </div>
  );
}

export default Add;
