import React from 'react';
import './LoginWindow.css';
import { auth, provider } from '../firebase';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function LoginWindow() {
  // login & register
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="loginWindow">
      <div className="loginWindow__buttons">
        <button className="loginWindow__button">Login</button>
        <button onClick={signIn} className="loginWindow__button">
          Sign In with Gmail
        </button>
        <button className="loginWindow__button">Register</button>
      </div>
    </div>
  );
}

export default LoginWindow;
