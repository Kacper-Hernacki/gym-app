import React from 'react';
import './StandardLogin.css';

function StandardLogin() {
  return (
    <div className="standardLogin">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button className="standardLogin__button">Register</button>
    </div>
  );
}

export default StandardLogin;
