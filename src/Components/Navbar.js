import React from 'react';
import './Navbar.css';
import AddIcon from '@material-ui/icons/Add';
import FunctionsIcon from '@material-ui/icons/Functions';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__options">
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
          <HomeIcon className="navbar__icon" />
        </Link>

        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/calculator">
          <FunctionsIcon className="navbar__icon" />
        </Link>
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/add">
          <AddIcon className="navbar__add" />
        </Link>
        <Link
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          to="/history">
          <MenuBookIcon className="navbar__icon" />
        </Link>

        <ExitToAppIcon
          onClick={() => auth.signOut()}
          className="navbar__icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
