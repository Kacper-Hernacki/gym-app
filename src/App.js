import React, { useEffect } from 'react';
import logo from './Background.svg';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { db, auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );

        // db.collection('users').add({
        //   user: authUser.displayName,
        //   uid: authUser.uid,
        //   photo: authUser.photoURL,
        //   email: authUser.email,
        // });
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? <Home /> : <Login />}
        {/* <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
