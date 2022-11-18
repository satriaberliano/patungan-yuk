import React from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { InfoPath, AboutPath } from '../routes';

function Navigation(){
  return(
    <>
      <nav className="navigation">
        <ul>
          <li><Link to={AboutPath}>Tentang PAYU</Link></li>
          <li>Rekomendasi</li>
          <li>
            <Link to={InfoPath}><AiOutlineInfoCircle /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;