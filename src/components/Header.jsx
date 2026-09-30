import logo from '../assets/home/logo.webp'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Peta', href: '#peta' },
  { label: 'Kuis', href: '#kuis' },
  { label: 'Panduan', href: '#panduan' },
]

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="site-header__logo" aria-label="Kelana Budaya - Beranda">
        <img src={logo} alt="Kelana Budaya" width="320" height="320" />
      </a>
      <nav aria-label="Navigasi utama">
        <ul className="site-nav">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="site-nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
