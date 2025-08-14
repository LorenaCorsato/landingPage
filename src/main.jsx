import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; 

import Inicio from './pages/inicio.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* A única rota que importa é a principal */}
        <Route path="/" element={<Inicio />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);