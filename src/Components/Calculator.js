import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [count, setCount] = useState(0);
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);

  function oneRepMax() {
    setCount((weight * (36 / (37 - reps))).toFixed(2));
  }

  return (
    <div className="calculator">
      <h1>One Rep Max</h1>
      <div className="calculator__container">
        <div className="calculator__column">
          <h2>Weight</h2>
          <input
            value={weight}
            onChange={(e) => setWeight(+e.target.value)}
            type="number"
          />
        </div>
        <div className="calculator__column">
          <h2>Reps</h2>
          <input
            value={reps}
            onChange={(e) => setReps(+e.target.value)}
            type="number"
          />
        </div>
      </div>
      <button onClick={oneRepMax} className="calculator__button">
        Count
      </button>
      <h2>Your One Rep Max is:</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default Calculator;
