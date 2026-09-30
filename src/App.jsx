import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import PetaJelajah from './components/PetaJelajah.jsx'
import MulaiPerjalanan from './components/MulaiPerjalanan.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
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

export default App
