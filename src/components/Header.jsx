import React, { useState } from "react";
import Gif from "./gif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuActive(prevState => !prevState);
  };

  const handleScrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <div className='welcome'>
        <Gif />
        <h1>Kayo <span>Alarcon</span></h1>
      </div>
      <nav>
        <ul className={`nav-container ${isMenuActive ? 'active' : ''}`}>
          <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#resume">Resumo</a></li>
          <li><a href="#portifolio">Portfolio</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
        <i onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars} className="fa-solid" />
        </i>
      </nav>
      {/* <div className='btn-div'>
        <a href="#" className='theme-btn'>🌑</a>
      </div> */}
    </header>
  )
};

export default Header;