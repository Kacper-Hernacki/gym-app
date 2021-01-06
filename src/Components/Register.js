import React, { useState, useEffect } from 'react';
import './Register.css';
import { auth } from '../firebase';

function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)

      .catch((error) => alert(error.message));
  };

  return (
    <div className="register">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={register} className="register__button">
        Register
      </button>
    </div>
  );
}

export default Register;
