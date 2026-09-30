import jelajahBarat from '../assets/home/jelajah-barat.webp'
import jelajahTengah from '../assets/home/jelajah-tengah.webp'
import jelajahTimur from '../assets/home/jelajah-timur.webp'
import ArrowIcon from './ArrowIcon.jsx'

const JOURNEYS = [
  { id: 'barat', title: 'Jelajah Barat', image: jelajahBarat, bg: '#feedb8', button: '#f2b80e' },
  { id: 'tengah', title: 'Jelajah Tengah', image: jelajahTengah, bg: '#fdbdbc', button: '#f54343' },
  { id: 'timur', title: 'Jelajah Timur', image: jelajahTimur, bg: '#c4e8ec', button: '#0083f7' },
]

function MulaiPerjalanan() {
  return (
    <section id="kuis" className="perjalanan">
      <div className="perjalanan__heading">
        <h2 className="perjalanan__title">Ayo, Mulai Perjalananmu</h2>
        <p className="perjalanan__subtitle">Sudah kenal budaya Sunda? Saatnya buktikan !</p>
      </div>

      <ul className="perjalanan__cards">
        {JOURNEYS.map((journey) => (
          <li
            key={journey.id}
            className="journey-card"
            style={{ '--card-bg': journey.bg, '--card-button': journey.button }}
          >
            <img src={journey.image} alt={journey.title} className="journey-card__image" />
            <button type="button" className="journey-card__button">
              Mulai Kuis
              <ArrowIcon className="journey-card__arrow" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MulaiPerjalanan
