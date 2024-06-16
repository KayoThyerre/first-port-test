import React from 'react';
import myGif from '../assets/black-knight.gif'
import './gif.css'

// Função de componente Gif
function Gif() {
  return (
    <img 
      className='header-gif'
      src={myGif}
      alt="Black Knight"
    />
  );
}

export default Gif;
