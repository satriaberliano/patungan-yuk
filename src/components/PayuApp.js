import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import AppHeader from "./AppHeader";
import DetailPage from "../pages/DetailPage";
import AddNewPatunganPage from "../pages/AddNewPatunganPage";
import { rootPath, DetailPatunganPath, AddNewPatunganPath, InfoPath, LoginPath, RegisterPath, AboutPath, AddAnggotaPatunganPath, AddKegiatanPatunganPath, AddNewAnggotaPatunganPath, AddNewKegiatanPatunganPath, AddJumlahPatunganAnggotaPath, EditKegiatanPath, AddUangPatunganPath, ChangeKegiatanPath } from '../routes';
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import AddAnggotaPatunganPage from "../pages/AddAnggotaPatunganPage";
import AddKegiatanPatunganPage from "../pages/AddKegiatanPatunganPage";
import AddNewAnggotaPatunganPage from "../pages/AddNewAnggotaPatunganPage";
import AddNewKegiatanPatunganPage from "../pages/AddNewKegiatanPatunganPage";
import AddJumlahPatunganAnggotaPage from "../pages/AddJumlahPatunganAnggotaPage";
import EditKegiatanPage from "../pages/EditKegiatanPage";
import AddUangPatunganPage from "../pages/AddUangPatunganPage";
import ChangeKegiatanPatunganPage from "../pages/ChangeKegiatanPatunganPage";

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
          <Route path={AddNewPatunganPath} element={<AddNewPatunganPage />}></Route>
          <Route path={AddNewAnggotaPatunganPath} element={<AddNewAnggotaPatunganPage />}></Route>
          <Route path={AddNewKegiatanPatunganPath} element={<AddNewKegiatanPatunganPage />}></Route>
          <Route path={InfoPath} element={<InfoPage />}></Route>
          <Route path={LoginPath} element={<LoginPage />}></Route>
          <Route path={RegisterPath} element={<RegisterPage />}></Route>
          <Route path={AboutPath} element={<AboutPage />}></Route>
          <Route path={AddAnggotaPatunganPath} element={<AddAnggotaPatunganPage />}></Route>
          <Route path={AddKegiatanPatunganPath} element={<AddKegiatanPatunganPage />}></Route>
          <Route path={AddJumlahPatunganAnggotaPath} element={<AddJumlahPatunganAnggotaPage />}></Route>
          <Route path={EditKegiatanPath} element={<EditKegiatanPage />}></Route>
          <Route path={AddUangPatunganPath} element={<AddUangPatunganPage />}></Route>
          <Route path={ChangeKegiatanPath} element={<ChangeKegiatanPatunganPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default PayuApp;
