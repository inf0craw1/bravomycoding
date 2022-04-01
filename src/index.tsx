import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const rootElem = document.getElementById('root');
if(!rootElem) throw new Error('Filad to load Root Element');

const root = ReactDOM.createRoot(rootElem);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
