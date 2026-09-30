import mapBg from '../assets/home/map-bg.webp'
import mapIcon from '../assets/home/map-icon.svg'
import indonesiaMap from '../assets/home/indonesia-map.webp'
import leaves from '../assets/home/leaves.webp'
import iconSumatra from '../assets/home/icon-sumatra.webp'
import iconKalimantan from '../assets/home/icon-kalimantan.webp'
import iconSulawesi from '../assets/home/icon-sulawesi.webp'
import iconMaluku from '../assets/home/icon-maluku.webp'
import iconJawa from '../assets/home/icon-jawa.webp'
import iconBali from '../assets/home/icon-bali.webp'
import iconPapua from '../assets/home/icon-papua.webp'

// Posisi pill mengikuti desain Canva, dalam piksel pada panel 1264 x 712.
const PANEL_W = 1264
const PANEL_H = 712

const REGIONS = [
  { id: 'sumatra', name: 'Sumatra', icon: iconSumatra, bg: '#fcd28b', accent: '#fe8f02', box: [12, 151, 307, 77] },
  { id: 'kalimantan', name: 'Kalimantan', icon: iconKalimantan, bg: '#b9d57e', accent: '#2d5a2f', box: [344, 156, 336, 84] },
  { id: 'sulawesi', name: 'Sulawesi', icon: iconSulawesi, bg: '#e3d0f5', accent: '#a319c6', box: [707, 155, 327, 84] },
  { id: 'maluku', name: 'Maluku', icon: iconMaluku, bg: '#9ccdf1', accent: '#0084fc', box: [992, 260, 259, 69] },
  { id: 'jawa', name: 'Jawa', icon: iconJawa, bg: '#fffa86', accent: '#d5cc19', box: [46, 516, 261, 74] },
  { id: 'bali-nusa-tenggara', name: 'Bali & Nusa Tenggara', icon: iconBali, bg: '#fdbdbc', accent: '#f84145', box: [542, 531, 401, 81], small: true },
  { id: 'papua', name: 'Papua', icon: iconPapua, bg: '#e0ef95', accent: '#9fb838', box: [975, 513, 266, 83] },
]

const toPercent = ([x, y, w, h]) => ({
  '--x': `${(x / PANEL_W) * 100}%`,
  '--y': `${(y / PANEL_H) * 100}%`,
  '--w': `${(w / PANEL_W) * 100}%`,
  '--h': `${(h / PANEL_H) * 100}%`,
})

function PetaJelajah() {
  return (
    <section id="peta" className="peta">
      <img src={mapBg} alt="" className="peta__bg" aria-hidden="true" />
      <img src={leaves} alt="" className="peta__leaves peta__leaves--left" aria-hidden="true" />
      <img src={leaves} alt="" className="peta__leaves peta__leaves--right" aria-hidden="true" />

      <div className="peta__panel">
        <div className="peta__heading">
          <h2 className="peta__title">
            <img src={mapIcon} alt="" className="peta__title-icon" />
            Peta Jelajah Budaya
          </h2>
          <p className="peta__subtitle">
            Pilih wilayah untuk memulai perjalananmu dan temukan beragam budaya Indonesia!
          </p>
        </div>

        <img
          src={indonesiaMap}
          alt="Peta Indonesia berwarna yang dibagi per wilayah"
          className="peta__map"
          width="1599"
          height="900"
        />

        <ul className="peta__regions">
          {REGIONS.map((region) => (
            <li key={region.id} className="peta__region" style={toPercent(region.box)}>
              <button
                type="button"
                className={`region-pill${region.small ? ' region-pill--small' : ''}`}
                style={{ '--pill-bg': region.bg, '--pill-accent': region.accent }}
              >
                <img src={region.icon} alt="" className="region-pill__icon" />
                <span className="region-pill__name">{region.name}</span>
                <span className="region-pill__go" aria-hidden="true">
                  &gt;
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PetaJelajah
