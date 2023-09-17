import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyles } from '../styles/styles';


function Desenvolvimento() {
  return (
    <GlobalStyles className="desenvolvimento_projeto container contextualizacao_texto mb-4" id="desenvolvimento">
      <h2 className="mb-4 border-title">Como o projeto será desenvolvido:</h2>
      <h3 className="mb-4 border-title">A realização do projeto de utilizar sensores de movimento para controlar a iluminação dos postes de luz e coletar dados sobre o tráfego urbano envolve várias etapas, incluindo:</h3>
      <div className="desenvolvimento_texto">
        <ol>
          <li className="mb-2">Planejamento: O primeiro passo é fazer um planejamento detalhado do projeto, incluindo a identificação dos locais onde os sensores de movimento serão instalados, o tipo de sensores e equipamentos necessários e a elaboração de um cronograma de execução.</li>
          <li className="mb-2">Instalação dos sensores: O segundo passo é a instalação dos sensores de movimento nos postes de luz. É importante que os sensores sejam instalados corretamente, seguindo as especificações do fabricante e considerando as condições ambientais e de segurança.</li>
          <li className="mb-2">Testes e ajustes: Após a instalação, é necessário realizar testes e ajustes nos sensores de movimento para garantir que eles estejam funcionando corretamente. Esses testes também servem para verificar se os sensores estão coletando os dados necessários para o projeto.</li>
          <li className="mb-2">Integração dos dados: Os dados coletados pelos sensores de movimento precisam ser integrados em um sistema de gerenciamento, onde podem ser armazenados e analisados. A integração dos dados envolve a escolha de uma plataforma ou ferramenta de gerenciamento de dados, bem como a definição de protocolos de segurança e privacidade.</li>
          <li className="mb-2">Análise dos dados: O próximo passo é analisar os dados coletados pelos sensores de movimento. Essa análise pode fornecer informações valiosas para o planejamento urbano e a segurança pública, como padrões de tráfego, horários de maior movimento e áreas de risco.</li>
          <li className="mb-2">Monitoramento e manutenção: Finalmente, é necessário monitorar e manter os sensores de movimento e o sistema de gerenciamento de dados para garantir que eles continuem funcionando corretamente e fornecendo informações úteis ao longo do tempo.</li>
        </ol>
      </div>
      <p className="mb-4">Em resumo, a realização do projeto envolve a instalação de sensores de movimento nos postes de luz, a integração dos dados coletados em um sistema de gerenciamento, a análise desses dados e a implementação de soluções com base nas informações coletadas. É importante destacar que a execução do projeto pode variar de acordo com as especificidades locais e que é necessário seguir as melhores práticas de segurança e privacidade de dados durante todas as etapas do projeto.</p>
    </GlobalStyles>
  );
}

export default Desenvolvimento;
