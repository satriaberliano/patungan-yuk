import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { rootPath } from "../routes";

function AppHeader(){
  return(
    <>
      <h1>
        <Link to={`${rootPath}`}><img className='header-logo' src='./images/logo-header.png' /></Link>
      </h1>
      <Navigation />
    </>
  )
}

export default AppHeader;