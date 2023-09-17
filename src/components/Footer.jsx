import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import wpp from "../assets/images/wpp.png";
import insta from "../assets/images/insta.png";
import email from "../assets/images/email.png";
import telefone from "../assets/images/telefone.png";
import { FooterImage, FooterComponent } from '../styles/footer-styles';

function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: '',
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <FooterComponent className="bg-dark text-white py-5 mb-0 border-0 mt-4" id="faq">
      <div className="container px-0">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-item text-center">
              <FooterImage src={wpp} alt="" />
              <p className="mt-2">+11 98876986</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <FooterImage src={insta} alt="" />
              <p className="mt-2">LoirTech@gmail.com</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <FooterImage src={telefone} alt="" />
              <p className="mt-2">4006-9823</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item text-center">
              <FooterImage src={email} alt="" />
              <p className="mt-2">LoirTech@gmail.com</p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <form className="container" id="myForm">
          <h4 className="text-center">Fale Conosco</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label htmlFor="idade">Idade:</label>
                <input
                  type="number"
                  className="form-control"
                  id="idade"
                  name="idade"
                  required
                  value={formData.idade}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
    </FooterComponent>
  );
}

export default Footer;
