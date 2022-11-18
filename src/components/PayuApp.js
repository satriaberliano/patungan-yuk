import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import AppHeader from "./AppHeader";
import DetailPage from "../pages/DetailPage";
import AddPatunganPage from "../pages/AddPatunganPage";
import { rootPath, DetailPatunganPath, TambahPatunganPath, InfoPath, LoginPath, RegisterPath, AboutPath, AddAnggotaPatunganPath, AddKegiatanPatunganPath, AddJumlahPatunganAnggotaPath, EditKegiatanPath } from '../routes';
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import AddAnggotaPatunganPage from "../pages/AddAnggotaPatunganPage";
import AddKegiatanPatunganPage from "../pages/AddKegiatanPatunganPage";
import AddJumlahPatunganAnggotaPage from "../pages/AddJumlahPatunganAnggotaPage";
import EditKegiatanPage from "../pages/EditKegiatanPage";


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
          <Route path={AddAnggotaPatunganPath} element={<AddAnggotaPatunganPage />}></Route>
          <Route path={AddKegiatanPatunganPath} element={<AddKegiatanPatunganPage />}></Route>
          <Route path={AddJumlahPatunganAnggotaPath} element={<AddJumlahPatunganAnggotaPage />}></Route>
          <Route path={EditKegiatanPath} element={<EditKegiatanPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default PayuApp;