import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '../styles/styles';

function Impactos() {
  return (
    <GlobalStyles className="impactos_negativos_positivos container mb-4" id="impactos">
      <div className="row">
        <div className="col-md-6 contextualizacao_texto">
          <h2 className="mb-4 border-title">Impactos negativos do problema</h2>
          <ol>
            <li className="mb-2">Poluição visual: A iluminação excessiva dos postes pode causar poluição visual, o que pode afetar negativamente a paisagem urbana.</li>
            <li className="mb-2">Desperdício de energia: A iluminação excessiva também resulta em desperdício de energia elétrica e aumento das emissões de gases de efeito estufa.</li>
            <li className="mb-2">Aumento da conta de luz: O desperdício de energia elétrica também se traduz em um aumento na conta de luz dos consumidores.</li>
          </ol>
        </div>
        <div className="col-md-6 contextualizacao_texto">
          <h2 className="mb-4 border-title">Impactos positivos da solução</h2>
          <ol>
            <li className="mb-2">Economia de energia: A solução de usar sensores de movimento para controlar a iluminação dos postes de luz pode resultar em uma economia significativa de energia elétrica, reduzindo as emissões de gases de efeito estufa e ajudando a mitigar as mudanças climáticas.</li>
            <li className="mb-2">Redução da poluição visual: O uso de sensores de movimento pode ajudar a reduzir a poluição visual, melhorando a paisagem urbana.</li>
            <li className="mb-2">Melhoria na segurança pública: Os dados coletados pelos sensores podem ajudar no planejamento urbano e na segurança pública, tornando as áreas urbanas mais seguras para os cidadãos.</li>
            <li className="mb-2">Redução da conta de luz: A economia de energia elétrica resultante do uso de sensores de movimento pode se traduzir em uma redução na conta de luz dos consumidores.</li>
          </ol>
        </div>
      </div>
    </GlobalStyles>
  );
}

export default Impactos;
