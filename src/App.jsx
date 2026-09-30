import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PetaJelajah from './components/PetaJelajah.jsx'
import MulaiPerjalanan from './components/MulaiPerjalanan.jsx'
import Footer from './components/Footer.jsx'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import homeMusic from './assets/audio/home.mp3'
import './App.css'

function App() {
  const [started, setStarted] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PetaJelajah />
        <MulaiPerjalanan />
      </main>
      <Footer />
      <BackgroundMusic src={homeMusic} />
      {!started && <WelcomeScreen onStart={() => setStarted(true)} />}
    </>
  )
}

export default App
