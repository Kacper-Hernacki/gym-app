import React, { useState } from 'react';
import './Register.css';
import { auth, db } from '../firebase';

function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        name: email,
        id: cred.user.uid,
      });
    });
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
