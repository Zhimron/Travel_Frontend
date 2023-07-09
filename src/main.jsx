import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TravelContextProvider } from './pages/context/TravelContext.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TravelContextProvider>
      <App />
    </TravelContextProvider>
  </React.StrictMode>
);
