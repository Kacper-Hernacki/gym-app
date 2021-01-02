import React from 'react';
import './AddRow.css';

function AddRow() {
  return (
    <div className="addRow">
      <h4>1</h4>
      <input className="addRow__exercise" placeholder="exercise" type="text" />
      <h4>Sets</h4>
      <input placeholder="sets" type="number" />
      <h4>Reps</h4>
      <input placeholder="reps" type="number" />
      <h3>weight</h3>
      <input placeholder="weight" type="number" />
    </div>
  );
}

export default AddRow;
