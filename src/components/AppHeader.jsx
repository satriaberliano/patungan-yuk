import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { rootPath } from '../routes';
import logo from '../assets/logo-header.png';

function AppHeader() {
  return (
    <>
      <div className="header-logo-wrapper">
        <Link to={`${rootPath}`}>
          <img className="header-logo" src={logo} alt="Payu Logo" />
        </Link>
      </div>
      <Navigation />
    </>
  );
}

export default AppHeader;
