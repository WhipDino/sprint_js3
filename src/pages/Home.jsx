import React from 'react';
import Header from '../components/Header';
import Contextualizacao from '../components/Contextualizacao';
import Solucao from '../components/Solucao';
import Exemplos from '../components/Exemplos';
import Impactos from '../components/Impactos';
import Desenvolvimento from '../components/Desenvolvimento';
import Footer from '../components/Footer';
import { BackgroundBlack } from '../styles/styles';

function Home() {
  return (
    <BackgroundBlack>
      <Header />
      <Contextualizacao />
      <Solucao />
      <Exemplos />
      <Impactos />  
      <Desenvolvimento />
      <Footer />
    </BackgroundBlack>
  );
}

export default Home;
