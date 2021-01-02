import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button className="register__button">Register</button>
    </div>
  );
}

export default Register;
