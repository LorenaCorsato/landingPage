import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/cabecalhoPublico.css'; 
import logoE4u from '/src/assets/logoFinal.png'; // Importando a imagem corretamente

export default function CabecalhoPublico() {
  return (
    <header className="cabecalhoContainer">
      <div className="logoPublico">
        <Link to="/">
          <img src={logoE4u} alt="Logo E4u" />
        </Link>
      </div>
      <nav>
        <Link to="/login" className="botaoEntrar">
          Entrar
        </Link>
      </nav>
    </header>
  );
}