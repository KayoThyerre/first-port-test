import React from "react";
import Gif from "./gif";

const Header = () => (
    <header className='header'>
      <div className='welcome'>
        <Gif />
        <h1>Kayo <span>Alarcon</span></h1>
      </div>
  
      <nav className='nav-container'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#resume">Resumo</a></li>
        <li><a href="#portifolio">Portfolio</a></li>
        <li><a href="#contact">Contato</a></li>
      </nav>
  
      <div className='btn-div'>
        <a href="#" className='theme-btn'>🌑</a>
      </div>
    </header>
  );
  
export default Header;