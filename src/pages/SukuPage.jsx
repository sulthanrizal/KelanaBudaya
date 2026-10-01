import { Link, Navigate, useParams } from 'react-router-dom'
import RoundNavButton from '../components/RoundNavButton.jsx'
import CultureCard, { VideoThumb } from '../components/CultureCard.jsx'
import { PULAU, SUKU } from '../data/budaya.js'
import { KUIS } from '../data/kuis.js'
import './SukuPage.css'

function SukuPage() {
  const { sukuId } = useParams()
  const suku = SUKU[sukuId]
  if (!suku) return <Navigate to="/" replace />

  const pulau = PULAU[suku.pulau]
  const tetangga = pulau.suku.filter((id) => id !== sukuId)
  const kuis = KUIS[pulau.wilayah]

  return (
    <main className="suku-page">
      <RoundNavButton to={`/pulau/${suku.pulau}`} variant="back" label={`Kembali ke ${pulau.nama}`} />

      <header className="suku-page__header">
        <p className="suku-page__eyebrow">{pulau.nama}</p>
        <h1 className="suku-page__title">{suku.nama}</h1>
      </header>

      {suku.sejarah && (
        <section className="sejarah-card">
          <h2 className="sejarah-card__title">{suku.sejarah.judul}</h2>
          <p className="sejarah-card__text">{suku.sejarah.teks}</p>
          <VideoThumb
            src={suku.sejarah.gambar}
            alt={suku.sejarah.judul}
            item={suku.sejarah}
            className="sejarah-card__video"
          />
          <p className="sejarah-card__cta">{suku.sejarah.ajakan}</p>
        </section>
      )}

      <div className="culture-grid">
        {suku.items.map((item) => (
          // Key menyertakan suku agar kartu (dan suaranya) dibuat ulang saat pindah suku.
          <CultureCard key={`${sukuId}-${item.id}`} item={item} />
        ))}
      </div>

      <nav className="suku-page__more" aria-label="Lanjut menjelajah">
        <p className="suku-page__more-title">Jelajahi suku lain di {pulau.nama}</p>
        <div className="suku-page__more-links">
          {tetangga.map((id) => (
            <Link key={id} to={`/suku/${id}`} className="pill-link">
              {SUKU[id].nama}
            </Link>
          ))}
          <Link to={`/kuis/${pulau.wilayah}`} className="pill-link pill-link--quiz">
            Mulai {kuis.judul} →
          </Link>
        </div>
      </nav>
    </main>
  )
}

export default SukuPage
