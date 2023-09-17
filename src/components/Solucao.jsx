import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sustentabilidade from "../assets/images/sustentabilidade.jpg"
import { GlobalStyles, ImgFluid } from '../styles/styles';
import Text from './utils/TextComponent';

function Solucao() {
  return (
    <GlobalStyles className="container mb-4" id="solucao">
      <div className="row">
        <div className="col-md-6">
          <ImgFluid src={sustentabilidade} alt="sustentabilidade" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="contextualizacao_texto">
            <h2 className="border-title">Solução a ser desenvolvida</h2>
            <Text text={"O foco do nosso projeto é diminuir o consumo de energia e a poluição visual causada pelos postes de luz. Utilizaremos luz baixa enquanto ninguém estiver próximo, assim que for detectada a presença de um pedestre ou carro, os postes atingirão o nível de luminosidade necessário para a locomoção naquele trecho. Dessa forma é possível usar as tecnologias estudadas no curso para contribuir com a ideia de cidades inteligentes e sustentabilidade. Com os dados coletados pelos sensores de movimento, seremos capazes de entender o fluxo de pessoas e automóveis em cada local onde a tecnologia for utilizada, com essas informações é possível reduzir o tráfego em certas regiões e ajudar aplicativos de GPS a traçarem melhores rotas."}/>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
}

export default Solucao;
