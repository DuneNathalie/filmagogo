import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './Styles/_globales.scss'; // Importez vos styles globaux ici

const root = ReactDOM.createRoot(document.getElementById('root'));

const backendUrl = process.env.REACT_APP_BACKEND_URL;
console.log(backendUrl);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
