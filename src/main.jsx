import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Termos from './pages/termos.jsx';
import Duvidas from './pages/duvidas.jsx';
import Inicio from './pages/inicio.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* A única rota que importa é a principal */}
        <Route path="/" element={<Inicio />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/duvidas" element={<Duvidas />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);