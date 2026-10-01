import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PulauPage from './pages/PulauPage.jsx'
import SukuPage from './pages/SukuPage.jsx'
import KuisPage from './pages/KuisPage.jsx'
import PanduanPage from './pages/PanduanPage.jsx'
import BackgroundMusic from './components/BackgroundMusic.jsx'
import WelcomeScreen from './components/WelcomeScreen.jsx'
import homeMusic from './assets/audio/home.mp3'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const [started, setStarted] = useState(false)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pulau/:pulauId" element={<PulauPage />} />
        <Route path="/suku/:sukuId" element={<SukuPage />} />
        <Route path="/kuis/:wilayahId" element={<KuisPage />} />
        <Route path="/panduan" element={<PanduanPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BackgroundMusic src={homeMusic} />
      {!started && <WelcomeScreen onStart={() => setStarted(true)} />}
    </>
  )
}

export default App
