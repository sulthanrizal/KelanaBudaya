import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import panduanImg from '../assets/home/panduan.webp'
import { KUIS } from '../data/kuis.js'
import { PULAU } from '../data/budaya.js'
import './PanduanPage.css'

const LANGKAH = [
  { judul: 'Mulai petualangan', teks: 'Tekan tombol "Ayo Mulai" di layar pembuka, lalu "Mulai Jelajah" di halaman Home.' },
  { judul: 'Pilih pulau', teks: 'Di bagian Peta Jelajah Budaya, pilih salah satu dari tujuh wilayah Indonesia.' },
  { judul: 'Kenali sukunya', teks: 'Pilih suku untuk melihat ciri khasnya: makanan, rumah adat, alat musik, pakaian, tarian, dan cerita rakyat.' },
  { judul: 'Tonton videonya', teks: 'Kartu dengan tombol merah ▶ berisi video. Klik untuk menontonnya di YouTube.' },
  { judul: 'Kerjakan kuis', teks: 'Di bagian "Ayo, Mulai Perjalananmu", pilih Jelajah Barat, Tengah, atau Timur. Isi nama, kelas, dan nomor absen, lalu jawab 10 soal.' },
  { judul: 'Lihat hasilnya', teks: 'Setelah soal terakhir, nilai dan pembahasan akan muncul. Hasilnya bisa dicetak atau disimpan sebagai PDF.' },
]

const TIPS = [
  'Dampingi warga belajar menjelajah satu pulau dalam satu pertemuan agar materinya tidak terlalu padat.',
  'Ajak warga belajar menceritakan budaya dari daerah asalnya sendiri, lalu bandingkan dengan yang ada di Kelana Budaya.',
  'Ajukan pertanyaan pemantik, misalnya "Mengapa rumah adat ini berbentuk panggung?", sebelum membuka kartunya.',
  'Kerjakan kuis setelah materi satu wilayah selesai dipelajari, lalu bahas soal yang masih salah bersama-sama.',
  'Berikan apresiasi pada setiap usaha, bukan hanya pada nilai yang tinggi.',
]

const AKTIVITAS = [
  { emoji: '🎭', judul: 'Tebak Budaya', teks: 'Tutup nama pada kartu, lalu minta warga belajar menebak nama makanan, tarian, atau rumah adat dari gambarnya.' },
  { emoji: '🗺️', judul: 'Peta Budayaku', teks: 'Buat peta Indonesia besar di kertas, lalu tempelkan gambar atau tulisan ciri khas budaya pada pulau yang sesuai.' },
  { emoji: '📖', judul: 'Cerita Bergiliran', teks: 'Tonton salah satu cerita rakyat, lalu ceritakan ulang secara bergiliran dengan kata-kata sendiri.' },
  { emoji: '💃', judul: 'Gerak Bersama', teks: 'Tonton video tarian, lalu tirukan beberapa gerakan sederhananya bersama-sama.' },
  { emoji: '🍲', judul: 'Pameran Kuliner Mini', teks: 'Setiap kelompok mengenalkan satu makanan tradisional: bahan, cara membuat, dan daerah asalnya.' },
  { emoji: '🏆', judul: 'Lomba Kuis Kelompok', teks: 'Bagi kelas menjadi kelompok dan kerjakan kuis bersama di layar; kelompok dengan nilai tertinggi menang.' },
]

function PanduanPage() {
  return (
    <>
      <Header />
      <main className="panduan-page">
        <section className="panduan-hero">
          <img src={panduanImg} alt="" className="panduan-hero__image" />
          <div>
            <h1 className="panduan-hero__title">Panduan Kelana Budaya</h1>
            <p className="panduan-hero__text">
              Panduan penggunaan, tips mendampingi warga belajar, dan ide aktivitas seru untuk menjelajahi
              keberagaman budaya Indonesia bersama-sama.
            </p>
          </div>
        </section>

        <section className="panduan-section" aria-labelledby="cara-pakai">
          <h2 id="cara-pakai" className="panduan-section__title">Cara Menggunakan</h2>
          <ol className="langkah-list">
            {LANGKAH.map((l, i) => (
              <li key={l.judul} className="langkah">
                <span className="langkah__nomor" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="langkah__judul">{l.judul}</h3>
                  <p>{l.teks}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="panduan-section" aria-labelledby="wilayah-kuis">
          <h2 id="wilayah-kuis" className="panduan-section__title">Pembagian Wilayah Kuis</h2>
          <div className="wilayah-grid">
            {Object.entries(KUIS).map(([id, kuis]) => (
              <div key={id} className={`wilayah-card wilayah-card--${id}`}>
                <h3>{kuis.judul.replace('Kuis ', '')}</h3>
                <p>{kuis.pulau.map((p) => PULAU[p].nama).join(', ')}</p>
                <p className="wilayah-card__meta">{kuis.soal.length} soal pilihan ganda</p>
                <Link to={`/kuis/${id}`} className="pill-link">
                  Mulai Kuis →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="panduan-section" aria-labelledby="tips">
          <h2 id="tips" className="panduan-section__title">Tips Mendampingi Warga Belajar</h2>
          <ul className="tips-list">
            {TIPS.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="panduan-section" aria-labelledby="aktivitas">
          <h2 id="aktivitas" className="panduan-section__title">Ide Aktivitas Seru</h2>
          <div className="aktivitas-grid">
            {AKTIVITAS.map((a) => (
              <div key={a.judul} className="aktivitas-card">
                <span className="aktivitas-card__emoji" aria-hidden="true">
                  {a.emoji}
                </span>
                <h3>{a.judul}</h3>
                <p>{a.teks}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="panduan-page__back">
          <Link to="/" state={{ section: 'peta' }} className="pill-link pill-link--quiz">
            Mulai Menjelajah →
          </Link>
        </div>
      </main>
    </>
  )
}

export default PanduanPage
