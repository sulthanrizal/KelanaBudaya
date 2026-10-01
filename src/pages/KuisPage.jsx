import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import RoundNavButton from '../components/RoundNavButton.jsx'
import { KUIS } from '../data/kuis.js'
import { PULAU } from '../data/budaya.js'
import './KuisPage.css'

const HURUF = ['A', 'B', 'C', 'D']

function IdentitasForm({ kuis, initial, onSubmit }) {
  const [form, setForm] = useState(initial)
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    onSubmit({ nama: form.nama.trim(), kelas: form.kelas.trim(), absen: form.absen.trim() })
  }

  return (
    <form className="kuis-form" onSubmit={submit}>
      <h1 className="kuis-form__title">
        {kuis.judul}
        <span>{kuis.cakupan}</span>
      </h1>

      <label className="kuis-field">
        <span className="kuis-field__label">Nama Lengkap</span>
        <input required value={form.nama} onChange={update('nama')} placeholder="Masukkan nama kamu" autoComplete="name" />
      </label>
      <label className="kuis-field">
        <span className="kuis-field__label">Kelas</span>
        <input required value={form.kelas} onChange={update('kelas')} placeholder="Masukkan kelas" />
      </label>
      <label className="kuis-field">
        <span className="kuis-field__label">Nomor Absen</span>
        <input required value={form.absen} onChange={update('absen')} placeholder="Masukkan nomor absen" inputMode="numeric" />
      </label>

      <button type="submit" className="kuis-button kuis-button--start">
        Mulai Kuis →
      </button>
    </form>
  )
}

function SoalView({ soal, nomor, total, skor, dipilih, onPilih, onLanjut }) {
  const sudahDijawab = dipilih !== undefined
  const benar = dipilih === soal.jawaban

  const stateOf = (i) => {
    if (!sudahDijawab) return ''
    if (i === soal.jawaban) return ' kuis-option--correct'
    if (i === dipilih) return ' kuis-option--wrong'
    return ' kuis-option--dim'
  }

  return (
    <section className={`kuis-panel${soal.gambar ? '' : ' kuis-panel--text'}`} aria-labelledby="soal-heading">
      <div className="kuis-panel__top">
        <span className="kuis-chip">Skor: {skor}/{total}</span>
        <span className="kuis-chip">Soal: {nomor}/{total}</span>
        <h2 id="soal-heading" className="kuis-panel__number">
          Soal {nomor}
        </h2>
      </div>

      <div className="kuis-panel__body">
        {soal.gambar && <img src={soal.gambar} alt="Gambar soal" className="kuis-panel__image" />}

        <div className="kuis-panel__question">
          <p className="kuis-panel__text">{soal.pertanyaan}</p>

          <div className="kuis-options" role="group" aria-label="Pilihan jawaban">
            {soal.pilihan.map((pilihan, i) => (
              <button
                key={pilihan}
                type="button"
                className={`kuis-option${stateOf(i)}`}
                onClick={() => onPilih(i)}
                disabled={sudahDijawab}
                aria-pressed={dipilih === i}
              >
                <span className="kuis-option__letter">{HURUF[i]}.</span> {pilihan}
              </button>
            ))}
          </div>

          <p className="kuis-feedback" role="status">
            {sudahDijawab &&
              (benar
                ? 'Benar! Hebat sekali! 🎉'
                : `Kurang tepat. Jawaban yang benar: ${HURUF[soal.jawaban]}. ${soal.pilihan[soal.jawaban]}`)}
          </p>
        </div>
      </div>

      <button type="button" className="kuis-button kuis-button--next" onClick={onLanjut} disabled={!sudahDijawab}>
        {nomor === total ? 'Lihat Hasil' : 'Lanjut'}
      </button>
    </section>
  )
}

function pesanHasil(skor, total) {
  const persen = skor / total
  if (persen === 1) return { bintang: 3, judul: 'Sempurna!', teks: 'Kamu benar-benar penjelajah budaya sejati!' }
  if (persen >= 0.8) return { bintang: 3, judul: 'Luar Biasa!', teks: 'Pengetahuan budayamu sangat baik.' }
  if (persen >= 0.6) return { bintang: 2, judul: 'Bagus!', teks: 'Sedikit lagi menuju sempurna. Terus semangat!' }
  return { bintang: 1, judul: 'Ayo Belajar Lagi!', teks: 'Jelajahi lagi materinya, lalu coba kuis ini sekali lagi.' }
}

function HasilView({ kuis, identitas, jawaban, onUlangi }) {
  const total = kuis.soal.length
  const skor = kuis.soal.filter((s, i) => jawaban[i] === s.jawaban).length
  const pesan = pesanHasil(skor, total)
  const tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })

  return (
    <section className="hasil">
      <div className="hasil__card">
        <p className="hasil__eyebrow">
          Hasil {kuis.judul} · {kuis.cakupan}
        </p>
        <div className="hasil__stars" aria-label={`${pesan.bintang} dari 3 bintang`}>
          {[1, 2, 3].map((n) => (
            <span key={n} className={n <= pesan.bintang ? 'is-on' : ''} aria-hidden="true">
              ★
            </span>
          ))}
        </div>
        <h1 className="hasil__title">{pesan.judul}</h1>
        <p className="hasil__text">{pesan.teks}</p>

        <div className="hasil__score">
          <span className="hasil__score-value">{skor * 10}</span>
          <span className="hasil__score-label">
            Nilai · {skor} dari {total} benar
          </span>
        </div>

        <dl className="hasil__identity">
          <div>
            <dt>Nama</dt>
            <dd>{identitas.nama}</dd>
          </div>
          <div>
            <dt>Kelas</dt>
            <dd>{identitas.kelas}</dd>
          </div>
          <div>
            <dt>No. Absen</dt>
            <dd>{identitas.absen}</dd>
          </div>
          <div>
            <dt>Tanggal</dt>
            <dd>{tanggal}</dd>
          </div>
        </dl>

        <div className="hasil__actions">
          <button type="button" className="kuis-button" onClick={onUlangi}>
            Ulangi Kuis
          </button>
          <button type="button" className="kuis-button kuis-button--secondary" onClick={() => window.print()}>
            Cetak / Simpan PDF
          </button>
          <Link to="/" state={{ section: 'kuis' }} className="kuis-button kuis-button--secondary">
            Kembali ke Home
          </Link>
        </div>
      </div>

      <div className="pembahasan">
        <h2 className="pembahasan__title">Pembahasan</h2>
        <ol className="pembahasan__list">
          {kuis.soal.map((s, i) => {
            const ok = jawaban[i] === s.jawaban
            return (
              <li key={s.pertanyaan} className={`pembahasan__item${ok ? ' is-correct' : ' is-wrong'}`}>
                <p className="pembahasan__q">{s.pertanyaan}</p>
                <p>
                  Jawabanmu: <strong>{HURUF[jawaban[i]]}. {s.pilihan[jawaban[i]]}</strong> {ok ? '✓' : '✗'}
                </p>
                {!ok && (
                  <p>
                    Jawaban benar: <strong>{HURUF[s.jawaban]}. {s.pilihan[s.jawaban]}</strong>
                  </p>
                )}
              </li>
            )
          })}
        </ol>
        <div className="pembahasan__links">
          <span>Pelajari lagi:</span>
          {kuis.pulau.map((id) => (
            <Link key={id} to={`/pulau/${id}`} className="pill-link">
              {PULAU[id].nama}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function KuisFlow({ kuis }) {
  const [tahap, setTahap] = useState('identitas')
  const [identitas, setIdentitas] = useState({ nama: '', kelas: '', absen: '' })
  const [index, setIndex] = useState(0)
  const [jawaban, setJawaban] = useState([])

  const total = kuis.soal.length
  const skor = jawaban.filter((j, i) => j === kuis.soal[i].jawaban).length

  const mulai = (data) => {
    setIdentitas(data)
    setIndex(0)
    setJawaban([])
    setTahap('soal')
  }

  const pilih = (i) => {
    if (jawaban[index] !== undefined) return
    const next = [...jawaban]
    next[index] = i
    setJawaban(next)
  }

  const lanjut = () => {
    if (index + 1 < total) setIndex(index + 1)
    else setTahap('hasil')
    window.scrollTo(0, 0)
  }

  const konfirmasiKeluar = (e) => {
    if (tahap === 'soal' && !window.confirm('Keluar dari kuis? Jawabanmu belum tersimpan.')) e.preventDefault()
  }

  return (
    <main className={`kuis-page kuis-page--${tahap}`}>
      <RoundNavButton to="/" state={{ section: 'kuis' }} variant="home" label="Kembali ke Home" onClick={konfirmasiKeluar} />

      {tahap === 'identitas' && <IdentitasForm kuis={kuis} initial={identitas} onSubmit={mulai} />}
      {tahap === 'soal' && (
        <SoalView
          key={index}
          soal={kuis.soal[index]}
          nomor={index + 1}
          total={total}
          skor={skor}
          dipilih={jawaban[index]}
          onPilih={pilih}
          onLanjut={lanjut}
        />
      )}
      {tahap === 'hasil' && <HasilView kuis={kuis} identitas={identitas} jawaban={jawaban} onUlangi={() => mulai(identitas)} />}
    </main>
  )
}

function KuisPage() {
  const { wilayahId } = useParams()
  const kuis = KUIS[wilayahId]
  if (!kuis) return <Navigate to="/" replace />
  // `key` agar kuis mulai dari awal saat berpindah wilayah.
  return <KuisFlow key={wilayahId} kuis={kuis} />
}

export default KuisPage
