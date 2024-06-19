import React from 'react'
import './App.css'
import './App-responsive.css'
import './reset.css'
import Gif from './components/gif'
import myPhoto from './assets/eu2.png'

function App() {

  return (
    <>
      <header className='header'>
        <div className='welcome'>
          <Gif />
          <h1>Kayo <span>Alarcon</span></h1>
        </div>

        <nav className='nav-container'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#resume">Resumo</a>
          </li>
          <li>
            <a href="#portifolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </nav>

        <div className='btn-div'>
          <a href="#" className='theme-btn'>☀️</a>
        </div>
      </header>

      <section aria-label='seção curriculo download Kayo' className='section-cv'>
        <div>
          <h2>Olá, seja bem vindo !</h2>
          <h2 className='typing'>Web Developer and UX/UI Desing</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem odio reiciendis dicta magnam fugit odit quasi tempore doloremque optio sunt, nisi provident quis rem numquam eveniet harum aliquam nihil!</p>
          <a href="#">Download CV</a>
        </div>
        <img src={myPhoto} alt="foto ilustrativa do dev" className='dev-img' />
      </section>

      <main>

      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
