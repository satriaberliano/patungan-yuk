import React from "react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Link } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import { InfoPath } from '../routes';
import { MdGTranslate } from "react-icons/md";

function Navigation(){
  const { toggleLocale } = React.useContext(LocaleContext);
  return(
    <>
      <nav className="navigation">
        <ul>
          <li>
            <button className="navigation__translate-button" onClick={toggleLocale}><MdGTranslate className='icon' /></button>
          </li>
          <li>
            <Link to={InfoPath}><AiOutlineInfoCircle /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;