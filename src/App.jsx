import React from 'react'
import './App.css'
import './App-responsive.css'
import './reset.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Main from './components/Main'
import Proeficiency from './components/Proeficiency'
import MyResume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <>
      < Header/>
      < Welcome/>      
      < Main/>
      < Proeficiency/>
      < MyResume/>
      < Projects/>
      < Contact/>
      
      <footer>

      </footer>
    </>
  )
}

export default App
