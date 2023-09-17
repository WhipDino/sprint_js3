import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HeaderComponent, TitlePage, NavbarTogglerIcon } from '../styles/header-styles';
import { Link } from 'react-scroll';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <HeaderComponent className={`container-fluid mb-4 header-color ${isNavOpen ? 'nav-open' : ''}`} id="header">
      <nav className="container navbar navbar-expand-lg navbar-light bg-transparent">
        <NavbarTogglerIcon
          className={`navbar-toggler ${isNavOpen ? 'btn-outline-light' : ''}`}
          type="button"
          onClick={toggleNav}
          style={{ backgroundColor: 'rgb(178, 147, 119)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarTogglerIcon>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <div className="mx-auto text-center">
            <TitlePage className="text-white mb-0">Challenge IBM</TitlePage>
          </div>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="contextualizacao"
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500} 
              >
                Contextualização
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="solucao"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Solução
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="exemplos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Exemplo
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="impactos"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Impactos
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="desenvolvimento"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Como será desenvolvido
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link
                className="nav-link text-white"
                to="faq"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderComponent>
  );
}

export default Header;
