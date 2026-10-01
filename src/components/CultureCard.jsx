import { useEffect, useRef, useState } from 'react'
import { youtubeUrl } from '../data/budaya.js'
import { playInstrument, stopInstrument } from '../audio/instrumentPlayer.js'

function PlayBadge() {
  return (
    <span className="play-badge" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
      </svg>
    </span>
  )
}

// Gambar dengan tombol putar yang membuka video di YouTube (tab baru).
export function VideoThumb({ src, alt, item, className = '' }) {
  return (
    <a
      href={youtubeUrl(item)}
      target="_blank"
      rel="noreferrer"
      className={`video-thumb ${className}`}
      aria-label={`Tonton video ${alt} di YouTube (tab baru)`}
    >
      <img src={src} alt={alt} loading="lazy" />
      <PlayBadge />
    </a>
  )
}

function useInstrumentSound(src) {
  const ownerRef = useRef(Symbol('instrument'))
  const [playing, setPlaying] = useState(false)

  // Hentikan suara saat kartu hilang, misalnya pindah halaman.
  useEffect(() => {
    const owner = ownerRef.current
    return () => stopInstrument(owner)
  }, [])

  const toggle = () => {
    if (playing) {
      stopInstrument(ownerRef.current)
      return
    }
    setPlaying(true)
    playInstrument(src, ownerRef.current, () => setPlaying(false)).catch(() => {})
  }

  return { playing, toggle }
}

function Equalizer() {
  return (
    <span className="equalizer" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function InstrumentMedia({ item }) {
  const { playing, toggle } = useInstrumentSound(item.audio)

  return (
    <>
      <div className={`culture-card__media culture-card__media--sound${playing ? ' is-playing' : ''}`}>
        {/* Gambar ikut bisa diklik; tombol di bawah tetap jadi kontrol utama (keyboard & pembaca layar). */}
        <img src={item.gambar} alt={item.nama} loading="lazy" className="culture-card__image" onClick={toggle} />
        {playing && (
          <span className="culture-card__playing">
            <Equalizer /> Sedang diputar
          </span>
        )}
      </div>
      <button
        type="button"
        className={`listen-button${playing ? ' listen-button--on' : ''}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={`${playing ? 'Hentikan' : 'Dengarkan'} suara ${item.nama}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          {playing ? (
            <path d="M8 6v12M16 6v12" strokeWidth="3" />
          ) : (
            <>
              <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" />
              <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          )}
        </svg>
        {playing ? 'Hentikan' : 'Dengarkan Suara'}
      </button>
    </>
  )
}

function CultureCard({ item }) {
  const wide = Boolean(item.video)

  return (
    <article className={`culture-card${wide ? ' culture-card--wide' : ''}`}>
      <h3 className="culture-card__category">{item.kategori}</h3>
      {item.audio ? (
        <InstrumentMedia item={item} />
      ) : (
        <div className="culture-card__media">
          {item.video ? (
            <VideoThumb src={item.gambar} alt={item.nama} item={item} />
          ) : (
            <img src={item.gambar} alt={item.nama} loading="lazy" className="culture-card__image" />
          )}
        </div>
      )}
      {item.sumber && <p className="culture-card__source">Sumber: {item.sumber}</p>}
      <p className="culture-card__name">{item.nama}</p>
      <p className="culture-card__desc">{item.deskripsi}</p>
    </article>
  )
}

export default CultureCard
