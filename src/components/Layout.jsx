import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navegacao';
import CabecalhoPublico from './cabecalhoPublico'; 
import { useAuth } from '../context/AuthContext';
import '../styles/components/layout.css';

export default function Layout() {
  const { usuario } = useAuth();

  return (
    <>
      {/* Sempre renderiza a NavBar */}
      <NavBar />
      
      {/* Sempre renderiza o CabecalhoPublico */}
      <CabecalhoPublico />
      
      {/* Conteúdo principal sempre com a classe navbar ativa */}
      <main className="conteudo-com-navbar">
        <Outlet />
      </main>

      <Acessibilidade />
    </>
  );
}