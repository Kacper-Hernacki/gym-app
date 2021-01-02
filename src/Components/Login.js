import React from 'react';
import './Login.css';
import LoginWindow from './LoginWindow';
import Register from './Register';
import StandardLogin from './StandardLogin';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Login() {
  return (
    <Router>
      <div className="login">
        <h1>The Grinder</h1>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login_page">
            <StandardLogin />
          </Route>
          <Route path="/">
            <LoginWindow />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Login;
