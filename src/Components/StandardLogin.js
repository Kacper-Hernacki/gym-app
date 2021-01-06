import React, { useState } from 'react';
import './StandardLogin.css';
import { auth } from '../firebase';

function StandardLogin() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="standardLogin">
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
      <button onClick={signIn} className="standardLogin__button">
        Login
      </button>
    </div>
  );
}

export default StandardLogin;
