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
        <Link
          className="loginWindow__link"
          style={{
            color: 'inherit',
            textDecoration: 'inherit',
          }}
          to="/login_page">
          <button className="loginWindow__buttonLink">Login</button>
        </Link>

        <button onClick={signIn} className="loginWindow__button">
          Sign In with Gmail
        </button>
        <Link
          className="loginWindow__link"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/register">
          <button className="loginWindow__buttonLink">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginWindow;
