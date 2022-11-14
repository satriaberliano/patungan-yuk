import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import AppHeader from "./AppHeader";
import DetailPage from "../pages/DetailPage";
import AddPatunganPage from "../pages/AddPatunganPage";
import { rootPath, DetailPatunganPath, TambahPatunganPath, InfoPath, LoginPath, RegisterPath, AboutPath } from '../routes';
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";

function PayuApp(){
  return(
    <div className="app-container">
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes>
          <Route path={rootPath} element={<Home />}></Route>
          <Route path={DetailPatunganPath} element={<DetailPage />}></Route>
          <Route path={TambahPatunganPath} element={<AddPatunganPage />}></Route>
          <Route path={InfoPath} element={<InfoPage />}></Route>
          <Route path={LoginPath} element={<LoginPage />}></Route>
          <Route path={RegisterPath} element={<RegisterPage />}></Route>
          <Route path={AboutPath} element={<AboutPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default PayuApp;