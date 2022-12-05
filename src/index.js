import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PayuApp from './components/PayuApp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PayuApp />
  </BrowserRouter>,
);

serviceWorkerRegistration.register();
