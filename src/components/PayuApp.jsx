import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import AppHeader from './AppHeader';
import DetailPage from '../pages/DetailPage';
import AddNewPatunganPage from '../pages/AddNewPatunganPage';
import {
  rootPath,
  DetailPatunganPath,
  SharedDetailPatunganPath,
  AddNewPatunganPath,
  InfoPath,
  LoginPath,
  RegisterPath,
  AboutPath,
  AddAnggotaPatunganPath,
  AddKegiatanPatunganPath,
  AddUangPatunganPath,
  ChangeKegiatanPath,
  NotFoundPath,
  PatunganPath,
} from '../routes';
import InfoPage from '../pages/InfoPage';
import LoginPage from '../pages/LoginPage';
import SharedDetailPage from '../pages/SharedDetailPage';
import RegisterPage from '../pages/RegisterPage';
import AboutPage from '../pages/AboutPage';
import AddAnggotaPatunganPage from '../pages/AddAnggotaPatunganPage';
import AddKegiatanPatunganPage from '../pages/AddKegiatanPatunganPage';
import AddUangPatunganPage from '../pages/AddUangPatunganPage';
import ChangeKegiatanPatunganPage from '../pages/ChangeKegiatanPatunganPage';
import ProtectedRoute from '../utils/ProtectedRoute';
import AppFooter from './AppFooter';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';
import PageNotFound from '../pages/PageNotFound';
import ReleaseRoute from '../utils/ReleaseRoute';

function PayuApp() {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  const localeValue = React.useMemo(() => ({
    locale,
    toggleLocale: () => {
      const newLocale = locale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      setLocale(newLocale);
    },
  }), [locale]);

  const themeValue = React.useMemo(() => ({
    theme,
    toggleTheme: () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    },
  }), [theme]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <LocaleContext.Provider value={localeValue}>
        <div className="app-container">
          <header>
            <AppHeader />
          </header>
          <main id="mainContent">
            <Routes>
              <Route path={AboutPath} element={<AboutPage />} />
              <Route path={SharedDetailPatunganPath} element={<SharedDetailPage />} />

              <Route element={<ReleaseRoute />}>
                <Route path={InfoPath} element={<InfoPage />} />
                <Route path={LoginPath} element={<LoginPage />} />
                <Route path={RegisterPath} element={<RegisterPage />} />
              </Route>

              <Route element={<ProtectedRoute />}>
                <Route path={NotFoundPath} element={<PageNotFound />} />
                <Route path={PatunganPath} element={<Navigate replace to={rootPath} />} />
                <Route path={rootPath} element={<Home />} />
                <Route path={DetailPatunganPath} element={<DetailPage />} />
                <Route path={AddNewPatunganPath} element={<AddNewPatunganPage />} />
                <Route path={AddAnggotaPatunganPath} element={<AddAnggotaPatunganPage />} />
                <Route path={AddKegiatanPatunganPath} element={<AddKegiatanPatunganPage />} />
                <Route path={AddUangPatunganPath} element={<AddUangPatunganPage />} />
                <Route path={ChangeKegiatanPath} element={<ChangeKegiatanPatunganPage />} />
              </Route>
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
