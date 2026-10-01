import { Link, Navigate, useParams } from 'react-router-dom'
import RoundNavButton from '../components/RoundNavButton.jsx'
import { PULAU, SUKU, sukuThumb } from '../data/budaya.js'
import { KUIS } from '../data/kuis.js'
import './PulauPage.css'

function PulauPage() {
  const { pulauId } = useParams()
  const pulau = PULAU[pulauId]
  if (!pulau) return <Navigate to="/" replace />

  const kuis = KUIS[pulau.wilayah]

  return (
    <main className="pulau-page">
      <RoundNavButton to="/" state={{ section: 'peta' }} variant="home" label="Kembali ke Home" />

      <div className="pulau-page__inner">
        <div className="pulau-page__map">
          <img src={pulau.peta} alt={`Peta ilustrasi ${pulau.nama}`} />
        </div>

        <div className="pulau-page__content">
          <h1 className="pulau-page__title">{pulau.nama}</h1>
          <p className="pulau-page__hint">Pilih suku untuk melihat ciri khas budayanya!</p>

          <ul className="suku-list">
            {pulau.suku.map((id) => (
              <li key={id}>
                <Link to={`/suku/${id}`} className="suku-link">
                  <img src={sukuThumb(id)} alt="" className="suku-link__thumb" />
                  <span className="suku-link__name">{SUKU[id].nama}</span>
                  <span className="suku-link__go" aria-hidden="true">
                    &gt;
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link to={`/kuis/${pulau.wilayah}`} className="pulau-page__quiz">
            Uji pengetahuanmu: {kuis.judul} →
          </Link>
        </div>
      </div>
    </main>
  )
}

export default PulauPage
