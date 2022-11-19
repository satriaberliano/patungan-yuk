import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { rootPath } from "../routes";

function AppHeader(){
  return(
    <>
      <div className='header-logo-wrapper'>
        <Link to={`${rootPath}`}>
          <img className='header-logo' src='./images/logo-header.png' alt='Payu' />   
        </Link>
      </div>
      <Navigation />
    </>
  )
}

export default AppHeader;