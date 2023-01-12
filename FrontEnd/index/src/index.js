import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './context/authContext'



const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

