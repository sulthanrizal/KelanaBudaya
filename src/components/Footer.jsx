import footerBg from '../assets/home/footer-bg.webp'
import panduan from '../assets/home/panduan.webp'
import kontak from '../assets/home/kontak.webp'
import star from '../assets/home/star.webp'
import kidsWalking from '../assets/home/kids-walking.webp'
import ArrowIcon from './ArrowIcon.jsx'

const CONTACTS = [
  { label: 'kelanabudaya@gmail.com', href: 'mailto:kelanabudaya@gmail.com' },
  { label: 'Karawang, Jawa Barat' },
]

function Footer() {
  return (
    <footer id="panduan" className="site-footer">
      <img src={footerBg} alt="" className="site-footer__bg" aria-hidden="true" />

      <div className="site-footer__inner">
        <div className="site-footer__cards">
          <section className="info-card">
            <img src={panduan} alt="" className="info-card__image" />
            <div className="info-card__body">
              <h2 className="info-card__title">Panduan</h2>
              <p className="info-card__text">
                Panduan penggunaan, tips mendampingi warga belajar,dan ide aktivitas seru
                bersama warga belajar.
              </p>
              <button type="button" className="info-card__button">
                Lihat Panduan
                <ArrowIcon className="info-card__arrow" />
              </button>
            </div>
          </section>

          <section className="info-card">
            <img src={kontak} alt="" className="info-card__image info-card__image--kontak" />
            <div className="info-card__body">
              <h2 className="info-card__title">Kontak</h2>
              <ul className="info-card__contacts">
                {CONTACTS.map((contact) => (
                  <li key={contact.label} className="contact-pill">
                    <img src={star} alt="" className="contact-pill__star" />
                    {contact.href ? <a href={contact.href}>{contact.label}</a> : contact.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <img src={kidsWalking} alt="" className="site-footer__kids" aria-hidden="true" />
      </div>
    </footer>
  )
}

export default Footer
