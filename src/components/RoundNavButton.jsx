import { Link } from 'react-router-dom'

const ICONS = {
  home: <path d="M4 11.5 12 4.5l8 7M6.5 9.5V19h4v-5h3v5h4V9.5" />,
  back: <path d="M9 8 4.5 12.5 9 17M5 12.5h9.5a5 5 0 0 1 0 10H12" transform="translate(0 -3)" />,
}

// Tombol bulat di pojok kiri atas: oranye untuk "Home", kuning untuk "Kembali".
function RoundNavButton({ to, state, variant = 'home', label, onClick }) {
  return (
    <Link to={to} state={state} className={`round-nav round-nav--${variant}`} aria-label={label} onClick={onClick}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {ICONS[variant]}
      </svg>
    </Link>
  )
}

export default RoundNavButton
