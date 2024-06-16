import React from 'react'
import './App.css'
import './reset.css'
import Gif from './components/gif'

function App() {

  return (
    <>
      <main>
        <header className='header'>
          <div className='welcome'>
            <Gif className='header-gif' />
            <h1>Bem vindo !</h1>
          </div>
          <nav className='nav-container'>
            <div>
              <a href="#">Sobre mim</a>
            </div>
            <div>
              <a href="#">Projetos</a>
            </div>
            <div>
              <a href="#">Contato</a>
            </div>
          </nav>
          <div>
            <a href="#" className='theme-btn'>🌑</a>
          </div>

        </header>
      </main>
    </>
  )
}

export default App
