import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage/HomePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route index element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
