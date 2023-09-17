import React from 'react';
import { GlobalStyles, ImgFluid } from '../styles/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import posteTarde from "../assets/images/poste_tarde.jpg" 
import posteNoite from "../assets/images/poste_noite.jpg"

function Exemplos() {
  return (
    <GlobalStyles className="exemplos_postes text-center container contextualizacao_texto mb-4" id="exemplos">
      <h2 className="mb-4 border-title">Exemplos de iluminação com e sem pedestres</h2>
      <div className="exemplos_imagens">
        <div className="row">
          <div className="col-md-6 mb-4">
            <ImgFluid className="exemplos_imagem img-fluid" src={posteNoite} alt="imagem poste com intensidade alta" style={{ width: '500px', height: '400px' }} />
          </div>
          <div className="col-md-6">
            <ImgFluid className="exemplos_imagem img-fluid" src={posteTarde} alt="imagem poste com intensidade baixa" style={{ width: '500px', height: '400px' }} />
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
}

export default Exemplos;
