// Konten budaya per pulau dan suku, bersumber dari desain final "KelanaBudayaFiks".
// Beberapa kesalahan pada desain sudah diperbaiki di sini (lihat catatan "Koreksi").

const budayaImages = import.meta.glob('../assets/budaya/*.webp', { eager: true, import: 'default' })
const pulauImages = import.meta.glob('../assets/pulau/*.webp', { eager: true, import: 'default' })

const img = (name) => budayaImages[`../assets/budaya/${name}.webp`]

// Suara alat musik. Nama file disesuaikan dengan file di folder audio/alatTradisional.
const instrumentSounds = import.meta.glob('../assets/audio/alatTradisional/*.mp3', { eager: true, import: 'default' })
const sound = (file) => {
  const src = instrumentSounds[`../assets/audio/alatTradisional/${file}`]
  if (!src) throw new Error(`File audio tidak ditemukan: ${file}`)
  return src
}
const pulauImg = (name) => pulauImages[`../assets/pulau/${name}.webp`]

export const KATEGORI = {
  makanan: 'Makanan Tradisional',
  rumah: 'Rumah Adat',
  musik: 'Alat Musik Tradisional',
  pakaian: 'Pakaian Adat',
  pakaianWanita: 'Pakaian Adat Wanita',
  pakaianPria: 'Pakaian Adat Pria',
  tari: 'Tarian Tradisional',
  cerita: 'Cerita Rakyat',
}

// `video` berisi kata kunci pencarian YouTube sesuai judul video di desain.
// Isi `youtubeId` jika link video aslinya sudah ada, agar langsung membuka video tersebut.
const item = (suku, kategori, nama, deskripsi, extra = {}) => ({
  id: kategori,
  kategori: KATEGORI[kategori],
  nama,
  deskripsi,
  gambar: img(`${suku}-${kategori}`),
  ...extra,
})

export const SUKU = {
  aceh: {
    nama: 'Aceh',
    pulau: 'sumatera',
    items: [
      // Koreksi: di desain kartu ini berlabel "Alat Musik Tradisional".
      item('aceh', 'makanan', 'Mie Aceh', 'Mie dengan bumbu rempah khas Aceh, biasanya disajikan dengan daging atau seafood.', { sumber: 'travelingyuk.com' }),
      item('aceh', 'rumah', 'Rumoh Aceh', 'Rumah tradisional berbentuk panggung yang terbuat dari kayu.', { sumber: 'archify.com' }),
      item('aceh', 'musik', 'Serune Kalee', 'Alat musik tiup tradisional Aceh yang memiliki suara khas.', { audio: sound('SeruneKalee - Aceh.mp3'), sumber: 'antoreaceh.com' }),
      item('aceh', 'pakaian', 'Ulee Balang', 'Pakaian adat Aceh yang digunakan dalam acara adat dan upacara tertentu.', { sumber: 'dailydia.com' }),
      item('aceh', 'tari', 'Tari Saman', 'Tarian khas Aceh yang dilakukan secara berkelompok dengan gerakan tangan dan tubuh yang kompak.', { video: 'Tari Saman Santri Putri Darussalam Blokagung' }),
    ],
  },
  minangkabau: {
    nama: 'Minangkabau',
    pulau: 'sumatera',
    items: [
      item('minangkabau', 'makanan', 'Rendang', 'Masakan daging dengan santan dan berbagai rempah yang dimasak hingga bumbunya meresap.', { sumber: 'freepik.com' }),
      item('minangkabau', 'rumah', 'Rumah Gadang', 'Rumah tradisional Minangkabau dengan atap berbentuk seperti tanduk kerbau.', { sumber: 'kompas.com' }),
      item('minangkabau', 'musik', 'Talempong', 'Alat musik pukul berbentuk gong kecil yang dimainkan secara berkelompok.', { audio: sound('Talempong - Minangkabau.mp3'), sumber: 'indonesia.travel' }),
      item('minangkabau', 'pakaian', 'Bundo Kanduang', 'Pakaian adat perempuan Minangkabau dengan penutup kepala berbentuk khas.', { sumber: 'id.pinterest.com' }),
      item('minangkabau', 'tari', 'Tari Piring', 'Tarian tradisional Minangkabau yang menggunakan piring sebagai properti tari.', { video: 'Tari Piring Resepsi Diplomatik KBRI Brunei Darussalam' }),
      item('minangkabau', 'cerita', 'Malin Kundang', 'Kisah anak yang durhaka kepada ibunya hingga dikutuk menjadi batu.', { video: 'Legenda Malin Kundang Cerita Rakyat Sumatera Barat Kisah Nusantara' }),
    ],
  },
  batak: {
    nama: 'Batak',
    pulau: 'sumatera',
    items: [
      item('batak', 'makanan', 'Arsik', 'Masakan ikan dengan bumbu khas Batak yang kaya rempah.', { sumber: 'idntimes.com' }),
      item('batak', 'rumah', 'Rumah Bolon', 'Rumah tradisional Batak berbentuk panggung dengan atap yang khas.', { sumber: 'goodnewsfromindonesia.id' }),
      item('batak', 'musik', 'Gondang', 'Alat musik tradisional yang banyak digunakan dalam kegiatan adat Batak.', { audio: sound('godang (batak) .mp3'), sumber: 'kompasiana.com' }),
      item('batak', 'pakaian', 'Ulos', 'Kain tradisional Batak yang digunakan dalam berbagai upacara dan acara penting.', { sumber: 'sawniy.net' }),
      item('batak', 'tari', 'Tari Tor-Tor', 'Tarian tradisional Batak yang biasanya ditampilkan dalam berbagai upacara dan acara adat.', { video: 'Tari Tor Tor Hata Sopisik' }),
      item('batak', 'cerita', 'Legenda Danau Toba', 'Kisah Toba dan ikan ajaib yang menjadi asal-usul Danau Toba dan Pulau Samosir.', { video: 'Asal Usul Danau Toba Cerita Rakyat Sumatera Utara Kisah Nusantara' }),
    ],
  },
  sunda: {
    nama: 'Sunda',
    pulau: 'jawa',
    sejarah: {
      judul: 'Bagaimana Budaya Sunda Berkembang?',
      teks: 'Budaya Sunda telah berkembang melalui perjalanan sejarah yang panjang. Dahulu, di wilayah yang kini dikenal sebagai bagian dari Jawa Barat, terdapat beberapa kerajaan yang berkaitan dengan sejarah Sunda.',
      ajakan: 'Yuk, tonton videonya untuk mengetahui perkembangan budaya Sunda lebih lanjut.',
      gambar: img('sunda-sejarah'),
      video: 'Asal Usul Suku Sunda Sejarah Rakyat Jawa Barat Sang Legenda',
    },
    items: [
      item('sunda', 'makanan', 'Combro', 'Camilan dari parutan singkong dengan isi tumisan oncom pedas di dalamnya.'),
      item('sunda', 'rumah', 'Imah Jolopong', 'Rumah adat Sunda beratap jolopong (pelana panjang) dengan dinding anyaman bambu (gedek), sederhana dan fungsional.'),
      item('sunda', 'musik', 'Angklung', 'Alat musik tradisional Sunda yang terbuat dari bambu. Angklung dimainkan dengan cara digoyangkan dan menghasilkan bunyi yang khas.', { audio: sound('angklung (sunda).mp3') }),
      item('sunda', 'tari', 'Tari Jaipong', 'Tarian populer ciptaan Gugum Gumbira yang memadukan unsur pencak silat, ketuk tilu, dan ronggeng dengan gerakan lincah serta energik.', { video: 'Tari Jaipong Khas Jawa Barat Seni Tradisional' }),
      item('sunda', 'cerita', 'Sangkuriang - Tangkuban Perahu', 'Legenda Sangkuriang yang menendang perahu buatannya hingga tertelungkup menjadi Gunung Tangkuban Perahu.', { video: 'Cerita Rakyat Tangkuban Perahu Sangkuriang' }),
    ],
  },
  jawa: {
    nama: 'Jawa',
    pulau: 'jawa',
    items: [
      item('jawa', 'makanan', 'Gudeg', 'Makanan khas Jawa yang terbuat dari nangka muda yang dimasak dengan santan dan bumbu rempah.', { sumber: 'jajanjalanyuk.com' }),
      item('jawa', 'rumah', 'Rumah Joglo', 'Rumah tradisional Jawa yang memiliki ciri khas atap bertingkat dan tiang utama di bagian tengah.', { sumber: 'perumperindo.co.id' }),
      item('jawa', 'musik', 'Gamelan', 'Seperangkat alat musik tradisional yang terdiri dari gong, saron, bonang, kenong, dan alat musik lainnya.', { audio: sound('gamelan ( jawa).mp3'), sumber: 'yogyakarta.kompas.com' }),
      item('jawa', 'pakaian', 'Kebaya dan Jawi Jangkep', 'Kebaya umumnya dikenakan perempuan, sedangkan Jawi Jangkep merupakan pakaian adat laki-laki Jawa.', { sumber: 'pariwisataindonesia.id' }),
      item('jawa', 'tari', 'Tari Serimpi', 'Tarian klasik Jawa yang memiliki gerakan lembut, anggun, dan penuh makna.', { video: 'Tari Serimpi Sandiwara Candra Sari' }),
      item('jawa', 'cerita', 'Roro Jonggrang', 'Kisah Bandung Bondowoso yang membangun seribu candi dalam semalam untuk meminang Roro Jonggrang.', { video: 'Legenda Roro Jonggrang Dongeng' }),
    ],
  },
  madura: {
    nama: 'Madura',
    pulau: 'jawa',
    items: [
      item('madura', 'makanan', 'Sate Madura', 'Sate ayam atau kambing yang disajikan dengan bumbu kacang dan kecap.', { sumber: 'atik.us' }),
      item('madura', 'rumah', 'Tanean Lanjhang', 'Kompleks rumah tradisional Madura yang terdiri dari beberapa bangunan dalam satu halaman.', { sumber: 'id.pinterest.com' }),
      item('madura', 'musik', 'Saronen', 'Alat musik tiup tradisional Madura yang biasanya dimainkan dalam pertunjukan kesenian.', { audio: sound('saronen( madura).mp3'), sumber: 'validnews.id' }),
      item('madura', 'pakaian', 'Pesa’an', 'Pakaian adat Madura yang terdiri dari baju hitam atau bergaris merah-putih dan celana longgar.', { sumber: 'superradio.id' }),
      item('madura', 'tari', 'Tari Muang Sangkal', 'Tarian tradisional Madura yang menggambarkan penyambutan dan ungkapan rasa syukur.', { video: 'Tari Muang Sangkal' }),
    ],
  },
  banjar: {
    nama: 'Banjar',
    pulau: 'kalimantan',
    items: [
      item('banjar', 'makanan', 'Soto Banjar', 'Soto khas Kalimantan Selatan dengan kuah gurih berbumbu rempah, biasanya disajikan dengan ayam, telur, dan ketupat.', { sumber: 'tampang.com' }),
      item('banjar', 'rumah', 'Rumah Bubungan Tinggi', 'Rumah tradisional Banjar berbentuk rumah panggung dengan atap tinggi dan menjulang pada bagian tengahnya.', { sumber: 'propertyklik.com' }),
      item('banjar', 'musik', 'Panting', 'Alat musik petik tradisional Banjar yang bentuknya menyerupai gambus dan dimainkan dengan cara dipetik.', { audio: sound('panting (banjar).mp3'), sumber: 'serbunik.com' }),
      item('banjar', 'pakaian', 'Babaju Kun Galung Pacinan', 'Salah satu pakaian adat Banjar yang mendapat pengaruh budaya Tionghoa dan digunakan dalam acara tertentu.', { sumber: 'hotelier.id' }),
      item('banjar', 'tari', 'Tari Baksa Kembang', 'Tarian tradisional Banjar yang biasanya dibawakan oleh perempuan dengan membawa rangkaian bunga.', { video: 'Tari Baksa Kembang' }),
    ],
  },
  dayak: {
    nama: 'Dayak',
    pulau: 'kalimantan',
    items: [
      item('dayak', 'makanan', 'Juhu Singkah', 'Masakan tradisional Dayak berbahan dasar umbut rotan yang dimasak bersama ikan atau bahan lainnya.', { sumber: 'idntimes.com' }),
      item('dayak', 'rumah', 'Rumah Panjang', 'Rumah tradisional berbentuk panjang yang dapat dihuni oleh banyak keluarga dan mencerminkan kehidupan komunal masyarakat Dayak.', { sumber: 'pariwisataindonesia.id' }),
      item('dayak', 'musik', 'Sape', 'Alat musik petik khas masyarakat Dayak, terutama dikenal dalam budaya Dayak di Kalimantan.', { audio: sound('Sape (Dayak).mp3'), sumber: 'spotify.com' }),
      item('dayak', 'pakaian', 'King Baba & King Bibinge', 'Pakaian adat Dayak; King Baba merupakan pakaian laki-laki, sedangkan King Bibinge untuk perempuan.', { sumber: 'weddingmarket.com' }),
      item('dayak', 'tari', 'Tari Kancet Papatai', 'Tarian tradisional Dayak yang menggambarkan keberanian seorang prajurit dalam menghadapi peperangan.', { sumber: 'kompas.com' }),
    ],
  },
  bugis: {
    nama: 'Bugis',
    pulau: 'sulawesi',
    items: [
      // Koreksi: di desain tertulis "Kasumi". Kue pisang-santan-telur yang dikukus dalam daun pisang adalah Barongko.
      item('bugis', 'makanan', 'Barongko', 'Kue tradisional berbahan dasar pisang yang dihaluskan, dicampur santan dan telur, kemudian dibungkus daun pisang dan dikukus.', { sumber: 'traveloka.com' }),
      // Koreksi ejaan: "Bola Saba" → "Bola Soba".
      item('bugis', 'rumah', 'Bola Soba', 'Rumah tradisional Bugis berbentuk rumah panggung yang memiliki ciri khas tiang-tiang kayu dan struktur bertingkat.'),
      item('bugis', 'musik', 'Kacapi', 'Alat musik petik tradisional yang digunakan dalam kesenian masyarakat Bugis-Makassar.', { audio: sound('Kecapi - Bugis.mp3'), sumber: 'fity.club' }),
      item('bugis', 'pakaian', 'Baju Bodo', 'Pakaian adat perempuan Bugis berbentuk longgar dan memiliki warna-warna tertentu yang secara tradisional dapat menunjukkan usia atau status pemakainya.', { sumber: 'bahankain.com' }),
      item('bugis', 'tari', 'Tari Pakarena', 'Tarian tradisional Sulawesi Selatan yang juga ditampilkan dalam kesenian masyarakat Bugis, dikenal dengan gerakan lembut dan anggun.', { video: 'Tari Kreasi Pakarena' }),
    ],
  },
  makassar: {
    nama: 'Makassar',
    pulau: 'sulawesi',
    items: [
      item('makassar', 'makanan', 'Coto Makassar', 'Hidangan berkuah yang dibuat dari daging dan jeroan sapi dengan bumbu rempah khas Makassar.', { sumber: 'telusurkultur.com' }),
      item('makassar', 'rumah', 'Balla Lompoa', 'Rumah adat berbentuk rumah panggung yang menjadi salah satu ciri arsitektur tradisional masyarakat Makassar.', { sumber: 'trivad.pisor.co.id' }),
      item('makassar', 'musik', 'Puik-puik', 'Alat musik tiup tradisional Sulawesi Selatan yang menghasilkan suara khas dan biasanya dimainkan dalam pertunjukan tradisional.', { audio: sound('puik puik Makasar.mp3'), sumber: 'indonesiakaya.com' }),
      // Koreksi: di desain deskripsinya sama persis dengan Baju Bodo milik Bugis.
      item('makassar', 'pakaian', 'Baju Bodo', 'Pakaian adat perempuan Makassar berupa baju longgar berlengan pendek yang biasanya dipadukan dengan sarung sutra.', { sumber: 'kompas.com' }),
      item('makassar', 'tari', 'Tari Pakarena', 'Tarian tradisional Makassar yang berasal dari Kerajaan Gowa, dikenal dengan gerakan lembut dan anggun.', { video: 'Pesona Tari Pakarena Makassar' }),
    ],
  },
  bali: {
    nama: 'Bali',
    pulau: 'bali-nusa-tenggara',
    items: [
      // Koreksi: di desain deskripsinya tersalin dari Mie Aceh.
      item('bali', 'makanan', 'Sate Lilit', 'Sate khas Bali dari daging cincang yang dicampur kelapa parut dan bumbu base genep, lalu dililitkan pada batang serai atau bambu.', { sumber: 'lifestyle.haluan.co' }),
      item('bali', 'rumah', 'Anjungan Bali', 'Kompleks hunian tradisional yang terdiri dari beberapa bangunan terpisah di dalam satu pekarangan, ditata berdasarkan aturan tata ruang Hindu Bali.', { sumber: 'tamanmini.com' }),
      item('bali', 'musik', 'Ceng-ceng', 'Alat musik tradisional Bali yang termasuk dalam kelompok instrumen gamelan.', { audio: sound('Ceng-Ceng (Bali).mp3'), sumber: 'seringjalan.com' }),
      item('bali', 'pakaian', 'Payas Agung', 'Pakaian adat Bali yang lengkap dan mewah, dipakai oleh pengantin serta kalangan brahmana, ksatria, dan waisya.', { sumber: 'katadata.co.id' }),
      item('bali', 'tari', 'Tari Kecak', 'Pertunjukan drama tari khas Bali yang umumnya mengangkat kisah Ramayana.', { video: 'Tari Kecak Uluwatu Bali' }),
    ],
  },
  sasak: {
    nama: 'Sasak',
    pulau: 'bali-nusa-tenggara',
    items: [
      item('sasak', 'makanan', 'Ares Gedebong', 'Sayur tradisional berbahan dasar pelepah atau batang pisang muda (biasanya pisang kepok) yang dimasak dengan kuah santan dan bumbu khas (base genep).', { sumber: 'tribratanews.polri.go.id' }),
      item('sasak', 'rumah', 'Bale Sasak', 'Rumah tradisional Suku Sasak yang berada di Pulau Lombok, Nusa Tenggara Barat.'),
      item('sasak', 'musik', 'Serunai', 'Alat musik tiup yang mirip terompet dengan lubang nada dan menghasilkan suara melengking yang khas.', { audio: sound('serunai (sasak).mp3'), sumber: 'ntb.idntimes.com' }),
      item('sasak', 'pakaianWanita', 'Lambung', 'Busana Lambung memiliki potongan khas berupa baju hitam tanpa lengan dengan kerah berbentuk huruf "V". Pakaian ini melambangkan kesederhanaan, ketegasan, dan keanggunan wanita Sasak.', { sumber: 'pariwisataindonesia.id' }),
      item('sasak', 'pakaianPria', 'Pegon', 'Busana Pegon merupakan akulturasi unik yang mendapat pengaruh dari budaya Jawa dan Melayu.', { sumber: 'indonesia.travel' }),
      item('sasak', 'tari', 'Tari Gandrung', 'Tari klasik berpasangan yang dipimpin oleh seorang penari wanita (Gandrung atau Jengger).', { video: 'Tari Gandrung Sasak Lombok' }),
    ],
  },
  ambon: {
    nama: 'Ambon',
    pulau: 'maluku',
    items: [
      item('ambon', 'makanan', 'Papeda', 'Makanan berbahan dasar sagu yang bertekstur kenyal dan biasanya disajikan bersama ikan kuah kuning.', { sumber: 'idntimes.com' }),
      item('ambon', 'rumah', 'Baileo', 'Rumah atau balai adat masyarakat Maluku yang digunakan sebagai tempat berkumpul, bermusyawarah, dan melaksanakan kegiatan adat.', { sumber: 'detik.com' }),
      item('ambon', 'musik', 'Tifa Totobuang', 'Kesenian musik tradisional Maluku yang memadukan tifa sebagai alat musik pukul dan totobuang berupa gong-gong kecil bernada.', { audio: sound('SUARA TIFA MALUKU - ftm (128k).mp3'), sumber: 'mengenalindonesia.com' }),
      item('ambon', 'pakaian', 'Baju Cele', 'Pakaian adat Maluku dengan motif geometris dan warna cerah, terutama merah, yang digunakan dalam berbagai acara adat.', { sumber: 'id.theasianparent.com' }),
      item('ambon', 'tari', 'Tari Cakalele', 'Tari tradisional Maluku yang melambangkan keberanian dan ketangkasan serta menggunakan parang dan salawaku sebagai properti.', { video: 'Tarian Tradisional Adat Daerah Maluku Cakalele' }),
    ],
  },
  buton: {
    nama: 'Buton',
    pulau: 'maluku',
    items: [
      // Koreksi ejaan: "Kasumi" → "Kasuami".
      item('buton', 'makanan', 'Kasuami', 'Olahan singkong yang dikukus dan berbentuk kerucut seperti tumpeng. Biasanya dimakan bersama ikan dan sambal.', { sumber: 'authentic-indonesia.com' }),
      // Koreksi ejaan: "Malinge" → "Malige".
      item('buton', 'rumah', 'Malige', 'Rumah adat peninggalan Kesultanan Buton yang berbentuk rumah panggung dan memiliki struktur bertingkat.', { sumber: 'kompas.com' }),
      item('buton', 'musik', 'Ganda', 'Alat musik tradisional yang dimainkan dengan cara dipukul, menyerupai alat musik gendang.', { audio: sound('ganda buton.mp3'), sumber: 'salutbali.com' }),
      item('buton', 'pakaian', 'Baju Kombo', 'Salah satu pakaian adat masyarakat Buton yang digunakan dalam kegiatan atau upacara adat.', { sumber: 'fr.pinterest.com' }),
      item('buton', 'tari', 'Tari Linda', 'Tarian tradisional Buton yang memiliki kaitan dengan tradisi Posuo dan biasanya dibawakan oleh perempuan.', { video: 'Tari Linda Buton' }),
    ],
  },
  dani: {
    nama: 'Dani',
    pulau: 'papua',
    items: [
      item('dani', 'makanan', 'Papeda', 'Makanan yang terbuat dari tepung sagu murni yang dicampur air mendidih hingga bertekstur kenyal.', { sumber: 'kompasiana.com' }),
      item('dani', 'rumah', 'Rumah Honai', 'Rumah adat khas Suku Dani yang menjadi salah satu simbol paling ikonik dari kearifan lokal Papua.', { sumber: 'bali.viva.co.id' }),
      item('dani', 'musik', 'Pikon', 'Alat musik harpa mulut tradisional khas Suku Dani yang terbuat dari sejenis buluh perumpung.', { audio: sound('pikon Dani.mp3'), sumber: 'muri.org' }),
      item('dani', 'pakaian', 'Koteka', 'Koteka, yang juga disebut holim, dibuat dari kulit buah labu (kalabasah) yang dikeringkan dan dibuang isinya.', { sumber: 'iStock' }),
      item('dani', 'tari', 'Tari Perang', 'Tarian yang menyampaikan keberanian, kekuatan, dan penghormatan terhadap leluhur.', { video: 'Tarian Tradisional Suku Dani' }),
    ],
  },
  asmat: {
    nama: 'Asmat',
    pulau: 'papua',
    items: [
      item('asmat', 'makanan', 'Sate Ulat Sagu', 'Hidangan khas Suku Asmat yang sangat terkenal di Papua dan menjadi makanan kesukaan masyarakat Asmat.', { sumber: 'idntimes.com' }),
      item('asmat', 'rumah', 'Jew', 'Rumah adat Suku Asmat yang berfungsi sebagai tempat berkumpul masyarakat, terutama kaum laki-laki, untuk kegiatan sosial, musyawarah, dan kegiatan adat.', { sumber: 'foto.okezone.com' }),
      item('asmat', 'musik', 'Tifa', 'Alat musik pukul yang terbuat dari kayu dan kulit hewan.', { audio: sound('SUARA TIFA asmat - ftm (128k).mp3'), sumber: 'trek-papua.com' }),
      item('asmat', 'pakaian', 'Pakaian Rumbai', 'Pakaian yang terbuat dari daun sagu atau serat tumbuhan, digunakan untuk menutupi bagian tubuh.', { sumber: 'lampung.disway.id' }),
      item('asmat', 'tari', 'Tari Tobe', 'Tarian tradisional Suku Asmat yang menggambarkan semangat keberanian, kekuatan, dan kebersamaan.', { video: 'Tari Tobe Asmat' }),
    ],
  },
}

export const PULAU = {
  sumatera: { nama: 'Sumatera', wilayah: 'barat', peta: pulauImg('sumatera'), suku: ['aceh', 'minangkabau', 'batak'] },
  jawa: { nama: 'Jawa', wilayah: 'barat', peta: pulauImg('jawa'), suku: ['sunda', 'jawa', 'madura'] },
  kalimantan: { nama: 'Kalimantan', wilayah: 'tengah', peta: pulauImg('kalimantan'), suku: ['banjar', 'dayak'] },
  sulawesi: { nama: 'Sulawesi', wilayah: 'tengah', peta: pulauImg('sulawesi'), suku: ['bugis', 'makassar'] },
  'bali-nusa-tenggara': { nama: 'Bali & Nusa Tenggara', wilayah: 'timur', peta: pulauImg('bali-nusa-tenggara'), suku: ['bali', 'sasak'] },
  maluku: { nama: 'Maluku', wilayah: 'timur', peta: pulauImg('maluku'), suku: ['ambon', 'buton'] },
  papua: { nama: 'Papua', wilayah: 'timur', peta: pulauImg('papua'), suku: ['dani', 'asmat'] },
}

export const sukuThumb = (id) => pulauImg(`thumb-${id}`)

export const youtubeUrl = ({ youtubeId, video }) =>
  youtubeId
    ? `https://www.youtube.com/watch?v=${youtubeId}`
    : `https://www.youtube.com/results?search_query=${encodeURIComponent(video)}`
