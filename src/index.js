import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { NotificationProvider } from "@web3uikit/core";
import { Proveedores } from './00_Router/Proveedores';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
        <ThemeProvider>
          <Proveedores />
        </ThemeProvider>
      </NotificationProvider>
  </React.StrictMode>
);

