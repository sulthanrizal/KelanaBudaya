// Soal kuis per wilayah, bersumber dari desain final "KelanaBudayaFiks".
// `jawaban` adalah indeks pilihan yang benar (0 = A, 1 = B, 2 = C, 3 = D).

const kuisImages = import.meta.glob('../assets/kuis/*.webp', { eager: true, import: 'default' })
const gambar = (name) => kuisImages[`../assets/kuis/${name}.webp`]

const barat = {
  judul: 'Kuis Wilayah Barat',
  cakupan: 'Sumatera & Jawa',
  pulau: ['sumatera', 'jawa'],
  soal: [
    { gambar: gambar('barat-1'), pertanyaan: 'Berdasarkan gambar tersebut, makanan tradisional yang ditampilkan adalah ....', pilihan: ['Rendang', 'Combro', 'Arsik', 'Mie Aceh'], jawaban: 3 },
    { gambar: gambar('barat-2'), pertanyaan: 'Rumah tradisional pada gambar tersebut merupakan rumah adat ....', pilihan: ['Rumah Gadang', 'Rumoh Aceh', 'Rumah Joglo', 'Rumah Bolon'], jawaban: 0 },
    { gambar: gambar('barat-3'), pertanyaan: 'Benda budaya yang ditampilkan pada gambar adalah ....', pilihan: ['Kebaya dan Jawi Jangkep', 'Bundo Kanduang', 'Ulee Balang', 'Ulos'], jawaban: 3 },
    { gambar: gambar('barat-4'), pertanyaan: 'Tarian tradisional yang menggunakan piring sebagai properti tari adalah ....', pilihan: ['Tari Tor-Tor', 'Tari Saman', 'Tari Piring', 'Tari Jaipong'], jawaban: 2 },
    { gambar: gambar('barat-5'), pertanyaan: 'Tarian pada gambar tersebut merupakan tari tradisional ....', pilihan: ['Jawa', 'Sunda', 'Aceh', 'Madura'], jawaban: 1 },
    { pertanyaan: 'Dalam materi budaya Aceh, alat musik tradisional yang merupakan alat musik tiup dan memiliki suara khas adalah ....', pilihan: ['Angklung', 'Talempong', 'Gondang', 'Serune Kalee'], jawaban: 3 },
    { pertanyaan: 'Perhatikan deskripsi berikut: makanan ini berbahan dasar daging, dimasak dengan santan dan berbagai rempah hingga bumbunya meresap. Makanan tersebut adalah ....', pilihan: ['Rendang', 'Combro', 'Mie Aceh', 'Sate Madura'], jawaban: 0 },
    { pertanyaan: 'Menurut materi Kelana Budaya, pakaian adat perempuan Minangkabau yang memiliki penutup kepala berbentuk khas disebut ....', pilihan: ['Ulos', 'Ulee Balang', 'Kebaya dan Jawi Jangkep', 'Bundo Kanduang'], jawaban: 3 },
    { pertanyaan: 'Pada materi budaya Sunda, makanan tradisional yang dibuat dari singkong dan memiliki isian berupa oncom disebut ....', pilihan: ['Combro', 'Soto Banjar', 'Gudeg', 'Sate Madura'], jawaban: 0 },
    // Koreksi: di desain tertulis "menggambarkan pengembangan gerakan pada tradisi", tidak sesuai materi.
    { pertanyaan: 'Dalam materi budaya Madura, tari tradisional yang menggambarkan penyambutan dan ungkapan rasa syukur adalah ....', pilihan: ['Tari Serimpi', 'Tari Muang Sangkal', 'Tari Jaipong', 'Tari Piring'], jawaban: 1 },
  ],
}

const tengah = {
  judul: 'Kuis Wilayah Tengah',
  cakupan: 'Kalimantan & Sulawesi',
  pulau: ['kalimantan', 'sulawesi'],
  soal: [
    { gambar: gambar('tengah-1'), pertanyaan: 'Berdasarkan gambar tersebut, nama alat musik tradisional yang ditampilkan adalah ....', pilihan: ['Kacapi', 'Panting', 'Sape', 'Puik-puik'], jawaban: 2 },
    { gambar: gambar('tengah-2'), pertanyaan: 'Rumah pada gambar merupakan rumah tradisional yang berbentuk panjang dan dapat dihuni oleh banyak keluarga. Rumah tersebut disebut ....', pilihan: ['Balla Lompoa', 'Bola Soba', 'Rumah Panjang', 'Rumah Bubungan Tinggi'], jawaban: 2 },
    { gambar: gambar('tengah-3'), pertanyaan: 'Makanan pada gambar merupakan makanan khas masyarakat Banjar. Nama makanan tersebut adalah ....', pilihan: ['Barongko', 'Juhu Singkah', 'Coto Makassar', 'Soto Banjar'], jawaban: 3 },
    { gambar: gambar('tengah-4'), pertanyaan: 'Pakaian tradisional yang tampak pada gambar dikenal sebagai ....', pilihan: ['King Baba', 'Babaju Kun Galung Pacinan', 'Baju Bodo', 'Baju Cele'], jawaban: 2 },
    { gambar: gambar('tengah-5'), pertanyaan: 'Tarian pada gambar merupakan tari tradisional dari Sulawesi Selatan yang dikenal dengan gerakannya yang lembut dan anggun. Nama tari tersebut adalah ....', pilihan: ['Tari Gantar', 'Tari Baksa Kembang', 'Tari Pakarena', 'Tari Kancet Papatai'], jawaban: 2 },
    { pertanyaan: 'Alat musik tradisional masyarakat Banjar yang berbentuk seperti gambus dan dimainkan dengan cara dipetik disebut ....', pilihan: ['Kacapi', 'Panting', 'Puik-puik', 'Sape'], jawaban: 1 },
    { pertanyaan: 'Rumah tradisional masyarakat Banjar yang memiliki ciri khas atap tinggi dan menjulang disebut ....', pilihan: ['Balla Lompoa', 'Rumah Panjang', 'Rumah Bubungan Tinggi', 'Bola Soba'], jawaban: 2 },
    { pertanyaan: 'Juhu Singkah merupakan makanan tradisional masyarakat Dayak yang berbahan dasar ....', pilihan: ['Daging dan jeroan sapi', 'Ayam dan ketupat', 'Pisang dan santan', 'Umbut rotan'], jawaban: 3 },
    { pertanyaan: 'Dalam materi Bugis, pakaian adat perempuan yang berbentuk longgar dan memiliki warna-warna tertentu yang secara tradisional dapat menunjukkan usia atau status pemakainya disebut ....', pilihan: ['King Bibinge', 'Baju Bodo', 'Baju Cele', 'Babaju Kun Galung Pacinan'], jawaban: 1 },
    { pertanyaan: 'Coto Makassar merupakan makanan tradisional masyarakat Makassar. Berdasarkan materi Kelana Budaya, makanan tersebut dibuat dari ....', pilihan: ['Umbut rotan dan ikan', 'Daging dan jeroan sapi', 'Sagu dan ikan kuah kuning', 'Pelepah pisang dan santan'], jawaban: 1 },
  ],
}

const timur = {
  judul: 'Kuis Wilayah Timur',
  cakupan: 'Bali, Nusa Tenggara, Maluku & Papua',
  pulau: ['bali-nusa-tenggara', 'maluku', 'papua'],
  soal: [
    { gambar: gambar('timur-1'), pertanyaan: 'Amati gambar bangunan berikut. Rumah tradisional Suku Sasak di Pulau Lombok dikenal dengan nama ....', pilihan: ['Rumah Honai', 'Bale Sasak', 'Anjungan Bali', 'Baileo'], jawaban: 1 },
    { gambar: gambar('timur-2'), pertanyaan: 'Alat musik pada gambar dimainkan dengan cara ditiup dan menghasilkan bunyi melengking. Nama alat musik tersebut adalah ....', pilihan: ['Tifa', 'Ganda', 'Serunai', 'Pikon'], jawaban: 2 },
    { gambar: gambar('timur-3'), pertanyaan: 'Makanan pada gambar berbahan dasar sagu dan biasanya disajikan bersama ikan. Nama makanan tersebut adalah ....', pilihan: ['Kasuami', 'Papeda', 'Sate Ulat Sagu', 'Ares Gedebong'], jawaban: 1 },
    // Koreksi: pilihan C di desain adalah "Sate Ulat Sagu" (bukan rumah adat).
    { gambar: gambar('timur-4'), pertanyaan: 'Rumah panggung bertingkat pada gambar merupakan rumah adat peninggalan Kesultanan Buton yang disebut ....', pilihan: ['Malige', 'Jew', 'Baileo', 'Rumah Honai'], jawaban: 0 },
    { gambar: gambar('timur-5'), pertanyaan: 'Hidangan pada gambar berupa olahan ulat sagu yang dikenal dalam materi sebagai makanan khas Suku Asmat. Namanya adalah ....', pilihan: ['Papeda', 'Sate Lilit', 'Sate Ulat Sagu', 'Kasuami'], jawaban: 2 },
    // Koreksi: kunci jawaban di desain "A. Tifa"; yang benar Ceng-ceng.
    { gambar: gambar('timur-6'), pertanyaan: 'Alat musik tradisional Bali yang termasuk dalam kelompok instrumen gamelan adalah ....', pilihan: ['Tifa', 'Ceng-ceng', 'Pikon', 'Serunai'], jawaban: 1 },
    { gambar: gambar('timur-7'), pertanyaan: 'Makanan tradisional Suku Sasak yang dibuat dari pelepah atau batang pisang muda dan dimasak dengan santan serta bumbu khas adalah ....', pilihan: ['Kasuami', 'Papeda', 'Ares Gedebong', 'Sate Lilit'], jawaban: 2 },
    { gambar: gambar('timur-8'), pertanyaan: 'Makanan tradisional Maluku yang berbahan dasar sagu dan biasanya disajikan bersama ikan kuah kuning adalah ....', pilihan: ['Papeda', 'Sate Lilit', 'Sate Ulat Sagu', 'Kasuami'], jawaban: 0 },
    { gambar: gambar('timur-9'), pertanyaan: 'Rumah adat khas Suku Dani yang menjadi salah satu simbol kearifan lokal Papua adalah ....', pilihan: ['Baileo', 'Bale Sasak', 'Rumah Honai', 'Malige'], jawaban: 2 },
    { gambar: gambar('timur-10'), pertanyaan: 'Alat musik tradisional Suku Dani yang dimainkan dengan cara dipetik dan terbuat dari jenis buluh perumpung adalah ....', pilihan: ['Tifa', 'Pikon', 'Ceng-ceng', 'Ganda'], jawaban: 1 },
  ],
}

export const KUIS = { barat, tengah, timur }
