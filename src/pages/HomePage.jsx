import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import PetaJelajah from '../components/PetaJelajah.jsx'
import MulaiPerjalanan from '../components/MulaiPerjalanan.jsx'
import Footer from '../components/Footer.jsx'

function HomePage() {
  const location = useLocation()
  const section = location.state?.section

  // Menu "Peta"/"Kuis" dari halaman lain membawa state { section } untuk di-scroll ke sana.
  useEffect(() => {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
  }, [section, location.key])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <PetaJelajah />
        <MulaiPerjalanan />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
