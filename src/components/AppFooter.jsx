import React from 'react';
import { Link } from 'react-router-dom';
import { AboutPath } from '../routes';

function AppFooter() {
  return (
    <>
      <p tabIndex="0">Copyright &copy; 2022 All right reserved</p>
      <p tabIndex="0">
        by
        {' '}
        <Link className="footer__payu" to={AboutPath}>PAYU</Link>
      </p>
    </>
  );
}

export default AppFooter;
