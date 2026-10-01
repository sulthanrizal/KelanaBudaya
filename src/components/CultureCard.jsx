import { useEffect, useRef, useState } from 'react'
import { youtubeUrl } from '../data/budaya.js'

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

function SoundButton({ src, name }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => () => audioRef.current?.pause(), [])

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src)
      audioRef.current.addEventListener('ended', () => setPlaying(false))
    }
    const audio = audioRef.current
    if (audio.paused) {
      audio.currentTime = 0
      audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <button
      type="button"
      className={`sound-button${playing ? ' sound-button--on' : ''}`}
      onClick={toggle}
      aria-label={`${playing ? 'Hentikan' : 'Dengarkan'} suara ${name}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    </button>
  )
}

function CultureCard({ item }) {
  const wide = Boolean(item.video)

  return (
    <article className={`culture-card${wide ? ' culture-card--wide' : ''}`}>
      <h3 className="culture-card__category">{item.kategori}</h3>
      <div className="culture-card__media">
        {item.video ? (
          <VideoThumb src={item.gambar} alt={item.nama} item={item} />
        ) : (
          <img src={item.gambar} alt={item.nama} loading="lazy" className="culture-card__image" />
        )}
        {item.audio && <SoundButton src={item.audio} name={item.nama} />}
      </div>
      {item.sumber && <p className="culture-card__source">Sumber: {item.sumber}</p>}
      <p className="culture-card__name">{item.nama}</p>
      <p className="culture-card__desc">{item.deskripsi}</p>
    </article>
  )
}

export default CultureCard
