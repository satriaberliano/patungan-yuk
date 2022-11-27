import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

function AppFooter() {
  return (
    <>
      <div className='social-media'>
        <a href='#footer'>
          <FaFacebook size='22px' />
        </a>
        <a href='#footer'>
          <FaInstagram size='22px' />
        </a>
        <a href='#footer'>
          <FaWhatsapp size='22px' />
        </a>
        <a href='#footer'>
          <FaGithub size='22px' />
        </a>
      </div>
      <p>Copyright &copy; 2022 All right reserved</p>
      <p>by PAYU</p>
    </>
  );
}

export default AppFooter;
