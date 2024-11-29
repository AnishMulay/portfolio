import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './app/provider';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider /> {/* Wrap Provider with BrowserRouter */}
  </BrowserRouter>
);