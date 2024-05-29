import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  return(
    <div>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  )
}

export default App
