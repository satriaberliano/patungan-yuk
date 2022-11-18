import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { rootPath } from "../routes";

function AppHeader(){
  return(
    <>
      <h1 className='header-logo-wrapper'>
        <Link to={`${rootPath}`}>PAYU</Link>
      </h1>
      <Navigation />
    </>
  )
}

export default AppHeader;