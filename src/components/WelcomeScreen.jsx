import { useEffect, useRef, useState } from 'react'
import sky from '../assets/home/hero-sky.webp'
import landscape from '../assets/home/hero-landscape.webp'
import logo from '../assets/home/logo.webp'
import boy from '../assets/home/boy.webp'
import girl from '../assets/home/girl.webp'
import ArrowIcon from './ArrowIcon.jsx'

const FADE_MS = 500

// Layar pembuka: klik tombol "Mulai" dihitung sebagai interaksi pengguna,
// sehingga browser mengizinkan musik latar diputar setiap kali halaman dibuka.
function WelcomeScreen({ onStart }) {
  const buttonRef = useRef(null)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Fokus agar tombol Enter langsung bisa dipakai, tanpa menampilkan cincin fokus.
    buttonRef.current?.focus({ focusVisible: false })
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  const start = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onStart, FADE_MS)
  }

  return (
    <div
      className={`welcome${leaving ? ' welcome--leaving' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      style={{ '--fade-ms': `${FADE_MS}ms` }}
    >
      <img src={sky} alt="" className="welcome__bg" aria-hidden="true" />
      <img src={landscape} alt="" className="welcome__bg welcome__bg--landscape" aria-hidden="true" />

      <div className="welcome__card">
        <img src={logo} alt="Kelana Budaya" className="welcome__logo" width="320" height="320" />
        <h1 id="welcome-title" className="welcome__title">
          Siap Berpetualang?
        </h1>
        <p className="welcome__text">Ayo jelajahi keberagaman budaya Indonesia bersama kami!</p>
        <button ref={buttonRef} type="button" className="welcome__button" onClick={start}>
          Ayo Mulai
          <ArrowIcon className="welcome__arrow" />
        </button>
      </div>

      <img src={boy} alt="" className="welcome__kid welcome__kid--boy" aria-hidden="true" />
      <img src={girl} alt="" className="welcome__kid welcome__kid--girl" aria-hidden="true" />
    </div>
  )
}

export default WelcomeScreen
