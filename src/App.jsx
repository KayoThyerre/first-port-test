import React from 'react'
import './App.css'
import './App-responsive.css'
// import './App-responsive.css'
import './reset.css'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Main from './components/Main'
import Proeficiency from './components/Proeficiency'
import MyResume from './components/Resume'

function App() {

  return (
    <>
      < Header/>
      < Welcome/>      
      < Main/>
      < Proeficiency/>
      < MyResume/>
      
      <footer>

      </footer>
    </>
  )
}

export default App
