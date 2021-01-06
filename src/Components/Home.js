import React from 'react';
import Add from './Add';
import Calculator from './Calculator';
import History from './History';
import './Home.css';
import Navbar from './Navbar';
import Practice from './Practice';
import Profile from './Profile';
import Settings from './Settings';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Home() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <div className="home">
        <h3>The Grinder</h3>
        <div className="home__window">
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/practice">
              <Practice />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/">
              <Profile />
            </Route>
          </Switch>
        </div>

        <Navbar />
      </div>
    </Router>
  );
}

export default Home;
