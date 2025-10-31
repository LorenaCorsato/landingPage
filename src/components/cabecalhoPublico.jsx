
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/cabecalhoPublico.css'; 
import Logo from "../assets/logoFinal.png";


export default function cabecalhoPublico() {
  return (
    <header className="cabecalhoContainer">
      <div className="logoPublico">
        <Link to="/">
          <img src={Logo} alt="Logo E4u" />
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