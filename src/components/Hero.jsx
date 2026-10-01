import sky from '../assets/home/hero-sky.webp'
import glow from '../assets/home/hero-glow.webp'
import landscape from '../assets/home/hero-landscape.webp'
import boy from '../assets/home/boy.webp'
import girl from '../assets/home/girl.webp'
import ArrowIcon from './ArrowIcon.jsx'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img src={sky} alt="" className="hero__sky" />
        <img src={glow} alt="" className="hero__glow" />
        <img src={landscape} alt="" className="hero__landscape" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__welcome">Selamat Datang di</span>
          <span className="hero__brand">
            <span className="hero__brand-kelana">Kelana</span>
            <span className="hero__brand-budaya">Budaya</span>
          </span>
        </h1>

        <p className="hero__desc">
          Kelana Budaya adalah media pembelajaran digital interaktif yang mengajak
          peserta didik menjelajahi keberagaman budaya Indonesia melalui
          pengalaman belajar yang menyenangkan.
        </p>

        <button
          type="button"
          className="hero__cta"
          onClick={() => document.getElementById('peta')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Mulai Jelajah
          <ArrowIcon className="hero__cta-arrow" />
        </button>
      </div>

      <img src={boy} alt="" className="hero__kid hero__kid--boy" width="800" height="800" />
      <img src={girl} alt="" className="hero__kid hero__kid--girl" width="800" height="800" />
    </section>
  )
}

export default Hero
