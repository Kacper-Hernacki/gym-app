import React from 'react';
import './Practice.css';
import PracticeRow from './PracticeRow';

function Practice() {
  return (
    <div className="practice">
      <h1>Leg Day</h1>
      <div className="practice__container">
        <PracticeRow />
      </div>
    </div>
  );
}

export default Practice;
