import { Link } from 'react-router-dom'
import logo from '../assets/home/logo.webp'

// `section` di-scroll oleh HomePage, sehingga menu tetap bekerja dari halaman lain.
const NAV_LINKS = [
  { label: 'Home', to: '/', section: 'home' },
  { label: 'Peta', to: '/', section: 'peta' },
  { label: 'Kuis', to: '/', section: 'kuis' },
  { label: 'Panduan', to: '/panduan' },
]

function Header() {
  return (
    <header className="site-header">
      <Link to="/" state={{ section: 'home' }} className="site-header__logo" aria-label="Kelana Budaya - Beranda">
        <img src={logo} alt="Kelana Budaya" width="320" height="320" />
      </Link>
      <nav aria-label="Navigasi utama">
        <ul className="site-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link to={link.to} state={link.section && { section: link.section }} className="site-nav__link">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
