import { useEffect, useRef, useState } from 'react'

const UNLOCK_EVENTS = ['pointerdown', 'keydown', 'touchstart']

// Musik menyala secara default. Browser memblokir audio otomatis sebelum ada interaksi
// pengguna, jadi kalau diblokir, musik mulai pada klik/tap/tombol pertama.
function BackgroundMusic({ src, volume = 0.5 }) {
  const audioRef = useRef(null)
  const buttonRef = useRef(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = volume
    audioRef.current = audio
    let cancelled = false

    const removeUnlock = () => UNLOCK_EVENTS.forEach((e) => window.removeEventListener(e, unlock))
    const unlock = (event) => {
      // Interaksi dengan tombol musik ditangani oleh tombol itu sendiri.
      if (buttonRef.current?.contains(event.target)) return
      removeUnlock()
      if (!audio.muted) audio.play().catch(() => {})
    }

    audio.play().catch(() => {
      // Penolakan play() datang asinkron; bisa saja komponen sudah di-unmount.
      if (cancelled) return
      UNLOCK_EVENTS.forEach((e) => window.addEventListener(e, unlock))
    })

    return () => {
      cancelled = true
      removeUnlock()
      audio.pause()
      audioRef.current = null
    }
  }, [src, volume])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    // Masih diblokir browser: klik tombol berarti "putar", bukan "matikan".
    if (enabled && audio.paused) {
      audio.play().catch(() => {})
      return
    }
    const next = !enabled
    audio.muted = !next
    if (next) audio.play().catch(() => {})
    setEnabled(next)
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className={`music-toggle${enabled ? ' music-toggle--on' : ''}`}
      onClick={toggle}
      aria-label={enabled ? 'Matikan musik' : 'Nyalakan musik'}
      aria-pressed={enabled}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H3v6h3l5 4z" fill="currentColor" />
        {enabled ? (
          <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
        ) : (
          <path d="m16 9 6 6M22 9l-6 6" />
        )}
      </svg>
    </button>
  )
}

export default BackgroundMusic
