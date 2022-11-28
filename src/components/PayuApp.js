import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import AppHeader from "./AppHeader";
import DetailPage from "../pages/DetailPage";
import AddNewPatunganPage from "../pages/AddNewPatunganPage";
import {
  rootPath,
  DetailPatunganPath,
  AddNewPatunganPath,
  InfoPath,
  LoginPath,
  RegisterPath,
  AboutPath,
  AddAnggotaPatunganPath,
  AddKegiatanPatunganPath,
  AddJumlahPatunganAnggotaPath,
  EditKegiatanPath,
  AddUangPatunganPath,
  ChangeKegiatanPath,
} from '../routes';
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AboutPage from "../pages/AboutPage";
import AddAnggotaPatunganPage from "../pages/AddAnggotaPatunganPage";
import AddKegiatanPatunganPage from "../pages/AddKegiatanPatunganPage";
import AddJumlahPatunganAnggotaPage from "../pages/AddJumlahPatunganAnggotaPage";
import EditKegiatanPage from "../pages/EditKegiatanPage";
import AddUangPatunganPage from "../pages/AddUangPatunganPage";
import ChangeKegiatanPatunganPage from "../pages/ChangeKegiatanPatunganPage";
import AppFooter from './AppFooter';
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function PayuApp(){
  const [ locale, setLocale ] = useState(localStorage.getItem('locale') || 'id');
  const [ theme, setTheme ] = React.useState(localStorage.getItem('theme') || 'light');

  const localeValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale: () => {
        const newLocale = locale === 'id' ? 'en' : 'id';
        localStorage.setItem('locale', newLocale);
        setLocale(newLocale);
      }
    };
  }, [locale]);

  const themeValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme: () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
      }
    };
  }, [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return(
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        <div className="app-container">
          <header>
            <AppHeader />
          </header>
          <main>
            <Routes>
              <Route path={rootPath} element={<Home />}></Route>
              <Route path={DetailPatunganPath} element={<DetailPage />}></Route>
              <Route path={AddNewPatunganPath} element={<AddNewPatunganPage />}></Route>
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
          <footer>
            <AppFooter />
          </footer>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default PayuApp;
