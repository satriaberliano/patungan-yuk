import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { rootPath } from "../routes";
import logo from '../assets/logo-header.png';

function AppHeader(){
  return(
    <>
      <div className='header-logo-wrapper'>
        <Link to={`${rootPath}`}>
          <img className='header-logo' src={logo} alt='Payu' />   
        </Link>
      </div>
      <Navigation />
    </>
  )
}

export default AppHeader;