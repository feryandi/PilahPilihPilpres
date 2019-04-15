import main

questions = [
  {
    "question": "Menurut Anda, langkah apa yang perlu _diprioritaskan_ untuk mengurangi risiko korupsi oleh pejabat publik?",
    "choice": [
      {
        'id': 1,
        'text': 'Memperbaiki sistem rekrutmen dan pengawasan internal.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Menaikkan gaji pegawai atau pejabat.',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'Menyusun aturan hukum yang lebih menimbulkan efek jera.',
        'result': [0]
      }
    ],
    'reason': 'Meski kedua Paslon menjanjikan peningkatan kesejahteraan ASN (Aparatur Sipil Negara), perbaikan sistem akuntabilitas, dan sinergi antar lembaga, mereka berdua punya penekanan solusi yang cukup berbeda terkait isu korupsi oleh ASN dan pejabat publik.\n\nPada [debat capres pertama](http://debatcapres.bahasakita.co.id/release/debat-capres-1), Paslon 01 berkali-kali menekankan pentingnya transparansi, meritokrasi, dan akuntabilitas dalam proses rekrutmen. Sementara Paslon 02 berpendapat bahwa kesejahteraan yang lebih baik akan mengurangi godaan untuk korupsi.\n\nDi sisi lain, Indonesia Corruption Watch (ICW) melihat bahwa kedua paslon [belum memiliki program komprehensif](https://katadata.co.id/berita/2019/01/22/icw-program-pemberantasan-korupsi-jokowi-dan-prabowo-tak-membuat-jera) untuk menangani korupsi. Diperlukan strategi baru - seperti memiskinkan koruptor - mengingat mekanisme hukuman denda dan penjara terbukti kurang efektif menimbulkan efek jera.',
    'sources': ['Transkrip debat capres 1: http://debatcapres.bahasakita.co.id/release/debat-capres-1', 'https://news.detik.com/berita/d-4489034/jurus-jokowi-versus-prabowo-benahi-birokrasi-ri?single=1', 'https://katadata.co.id/berita/2019/01/22/icw-program-pemberantasan-korupsi-jokowi-dan-prabowo-tak-membuat-jera']
  },
  {
    "question": "Bagaimana sikap Anda terhadap kandidat pemilihan umum yang pernah terlibat tindak pidana korupsi?",
    "choice": [
      {
        'id': 1,
        'text': 'Masyarakat tetap berhak menentukan pilihan mereka sendiri.',
        'result': [2]
      },
      {
        'id': 2,
        'text': 'Partai politik seharusnya memperketat rekrutmen kandidat seperti ini.',
        'result': [1]
      },
      {
        'id': 3,
        'text': 'Seharusnya hukum melarang mantan narapidana korupsi untuk mencalonkan diri.',
        'result': [0]
      }
    ],
    'reason': 'Jokowi: “_Ada 6 \[mantan terpidana korupsi\] yang bapak calonkan. Dan yang tanda tangan dalam pencalegan itu adalah Ketua Umumnya dan Sekjen. Artinya, bapak \[yang\] tanda tangan._”\n\nPrabowo: “_Jadi mantan korupsi saya kira kita pelajari dan begini, ini kan demokrasi, pak. Kita umumkan aja ke rakyat kalau rakyat nggak mau milih ya nggak akan dipilih._”\n\nPada [debat pertama](http://debatcapres.bahasakita.co.id/release/debat-capres-1), kedua paslon tidak menyatakan penolakan mereka terhadap pencalonan mantan narapidana korupsi. Meski Jokowi tampak menyampaikan keberatannya, ia sendiri pada 2018 pernah menyatakan bahwa mantan narapidana korupsi [berhak mencalonkan diri](https://nasional.kompas.com/read/2018/05/29/18143281/jokowi-tegaskan-mantan-napi-koruptor-punya-hak-jadi-caleg).\n\nData mengenai caleg eks napi tindak pidana korupsi dapat dilihat pada tautan berikut: [https://tirto.id/daftar-nama-49-caleg-eks-koruptor-dari-gerindra-hingga-pdip-dfsH]',
    'sources': ['Transkrip debat capres 1: http://debatcapres.bahasakita.co.id/release/debat-capres-1', 'Debat capres 1, segmen tanya-jawab antar paslon. https://www.youtube.com/watch?v=dPU_-Jdxfh8', 'https://nasional.kompas.com/read/2018/05/29/18143281/jokowi-tegaskan-mantan-napi-koruptor-punya-hak-jadi-caleg']
  },
  {
    "question": "Di samping memperbaiki kesejahteraan masyarakat, menurut Anda strategi apa yang _lebih tepat_ untuk mengatasi terorisme?",
    "choice": [
      {
        'id': 1,
        'text': 'Investasi lebih besar untuk intelijen dan militer guna mencegah aksi teror yang berasal dari luar negeri.',
        'result': [2]
      },
      {
        'id': 2,
        'text': 'Pembinaan agama melibatkan MUI dan ormas keagamaan untuk menangkal radikalisme.',
        'result': [1]
      }
    ],
    'reason': 'Kedua paslon sepakat bahwa [faktor ekonomi](https://nasional.kompas.com/read/2019/01/18/11255701/soal-terorisme-maruf-dinilai-tajam-dan-mengena-prabowo-tak-paham-akar) berperan dalam mempermudah penyebaran terorisme, namun dalam kadar yang berbeda: Paslon 02 menganggap kesenjangan sosial dan ekonomi sebagai faktor utama, sedangkan Paslon 01 menekankan perlunya melihat taraf korelasi ekonomi dan terorisme dalam tiap kasus.\n\nPerbedaan paling mendasar dari kedua paslon adalah apa hal yang mereka identifikasi sebagai penyebab terorisme. Paslon 02 berpendapat bahwa bibit terorisme bisa jadi [“didatangkan” dari luar Indonesia](https://nasional.kompas.com/read/2019/01/18/10261291/pernyataan-prabowo-tentang-terorisme-dikirim-dari-negara-lain-dinilai), sementara Paslon 01 menganggap pemahaman agama yang radikal sebagai faktor penentu.',
    'sources': ['Transkrip debat capres 1: http://debatcapres.bahasakita.co.id/release/debat-capres-1', 'https://www.bbc.com/indonesia/indonesia-46878117', 'https://nasional.kompas.com/read/2019/01/18/11255701/soal-terorisme-maruf-dinilai-tajam-dan-mengena-prabowo-tak-paham-akar']
  },
  {
    "question": "Apakah Anda mendukung impor komoditas pangan di saat swasembada?",
    "choice": [
      {
        'id': 1,
        'text': 'Ya, untuk cadangan dan menstabilkan harga pasar.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Tidak, praktik tersebut cenderung merugikan petani lokal.',
        'result': [2]
      }
    ],
    'reason': 'Berikut ini adalah pernyataan kedua calon Presiden pada [debat kedua](http://debatcapres.bahasakita.co.id/release/debat-capres-2):\n\nJokowi: “_Kita ini sebetulnya sudah surplus \[beras\]. Kenapa kita \[tetap perlu\] impor? Karena impor itu untuk menjaga ketersediaan stok, untuk menstabilkan harga. Kita juga harus punya cadangan untuk bencana. Kita harus punya cadangan juga untuk gagal panen. Kita harus punya cadangan untuk kalo terkena hama._”\n\nPrabowo: “_Jadi kalau memang kita sudah kelebihan stok, ya kenapa kita harus impor? Apakah tidak lebih baik devisa itu dihemat kemudian digulirkan \[untuk petani\]? ….. Kalau dulu tidak boleh impor satu bulan sebelum panen, dan tidak boleh impor dua bulan setelah panen. Sekarang impor, Pak. Ini tolong Bapak perlu cek karena ini jadi masalah \[di kalangan petani\]._”',
    'sources': ['Transkrip debat capres 2: http://debatcapres.bahasakita.co.id/release/debat-capres-2']
  },
  {
    "question": "Apakah Anda mendukung penggunaan _biofuel_ dari produk kelapa sawit untuk menggantikan BBM?",
    "choice": [
      {
        'id': 1,
        'text': 'Ya, karena kelapa sawit merupakan biofuel dengan produktivitas paling efektif.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Ya, namun perlu diversifikasi dengan biofuel dari produk agrikultur lain.',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'Tidak. Pada kenyataannya, perluasan perkebunan kelapa sawit cenderung menimbulkan sejumlah masalah lain.',
        'result': [0]
      }
    ],
    'reason': 'Kedua paslon sepakat bahwa Indonesia perlu menggunakan _biofuel_ dalam skala yang lebih besar [demi mengurangi impor BBM](https://kumparan.com/@kumparanbisnis/jokowi-genjot-biodiesel-sawit-prabowo-mau-bikin-biofuel-dari-singkong-1550453836242896793). Baik Jokowi maupun Prabowo berkomitmen untuk meningkatkan produksi _biofuel_ berbasis minyak kelapa sawit. Lebih jauh, Prabowo turut menyarankan diversifikasi sumber _biofuel_, [seperti aren atau singkong](https://www.slideshare.net/luffy_06/perubahan-visi-misi-prabowo-sandi).\n\nNamun kedua paslon tidak menyinggung [risiko](https://www.mongabay.co.id/2012/09/21/rugikan-rakyat-dan-ekologi-hentikan-pengembangan-pangan-monokultur/) yang timbul dari perluasan pertanian bahan baku _biofuel_, seperti: (1) konflik horizontal yang muncul dari perebutan lahan; (2) krisis pangan akibat fokus berlebihan pada perkebunan bahan baku _biofuel_; (3) [kerusakan lingkungan](https://www.cnnindonesia.com/nasional/20190218173819-32-370449/bahas-biodiesel-jokowi-prabowo-tak-sentuh-efek-negatif-sawit) pasca pembukaan area hutan dan lahan gambut.',
    'sources': ['Transkrip debat capres 2: http://debatcapres.bahasakita.co.id/release/debat-capres-2', 'https://www.slideshare.net/luffy_06/perubahan-visi-misi-prabowo-sandi', 'https://kumparan.com/@kumparanbisnis/jokowi-genjot-biodiesel-sawit-prabowo-mau-bikin-biofuel-dari-singkong-1550453836242896793', 'https://www.cnnindonesia.com/nasional/20190218173819-32-370449/bahas-biodiesel-jokowi-prabowo-tak-sentuh-efek-negatif-sawit', 'https://www.mongabay.co.id/2012/09/21/rugikan-rakyat-dan-ekologi-hentikan-pengembangan-pangan-monokultur/']
  },
  {
    "question": "Bagaimana tanggapan Anda terhadap kasus pelanggaran HAM berat di masa lalu?",
    "choice": [
      {
        'id': 1,
        'text': 'Kita perlu menyelesaikan kasus-kasus tersebut, namun melalui mekanisme non-peradilan.',
        'result': [1, 2]
      },
      {
        'id': 2,
        'text': 'Kita perlu menyelesaikan kasus-kasus tersebut menggunakan mekanisme peradilan HAM.',
        'result': [0]
      },
      {
        'id': 3,
        'text': 'Kita sebaiknya meninggalkan kasus-kasus tersebut karena sudah terlalu lama dan tampak sulit dibuktikan.',
        'result': [0]
      }
    ],
    'reason': 'Kedua paslon melalui pernyataan [Joko Widodo](https://news.detik.com/berita/d-4389482/jokowi-bilang-sulit-selesaikan-kasus-ham-masa-lalu-benarkah) dan [Sandiaga Uno](https://www.merdeka.com/politik/prabowo-sandi-punya-solusi-move-on-selesaikan-kasus-ham-masa-lalu.html) telah menyatakan komitmen dan keinginan mereka menyelesaikan kasus pelanggaran HAM masa lalu, meski tanpa melalui peradilan HAM: melalui Menkopolhukam Wiranto, Jokowi menyetujui terbentuknya [Dewan Kerukunan Nasional](https://nasional.kompas.com/read/2018/06/05/13294231/dewan-kerukunan-nasional-bakal-selesaikan-kasus-ham-masa-lalu-tanpa) sebagai “solusi non-yudisial”, sedangkan Sandiaga merujuk pada [Komisi Kebenaran dan Rekonsiliasi](https://www.hukumonline.com/berita/baca/hol8242/komisi-kebenaran-dan-rekonsiliasi-suatu-kritik/) seperti yang pernah diterapkan Afrika Selatan. Keduanya dapat berujung pada impunitas bagi para pelanggar HAM.\n\nSelama ini, mekanisme peradilan HAM mandek karena keruwetan birokrasi. Menurut ketua Komnas HAM Taufan Damanik, berbagai dokumen penyelidikan kasus pelanggaran HAM masa lalu yang disusun oleh Komnas HAM selalu ditolak oleh Kejaksaan Agung [dengan dalih kurangnya saksi dan bukti](https://newnaratif.com/journalism/kiat-kiat-menghindari-hukum-para-pelanggar-ham/share/xuna/2e99b7de2efefc11e5f273f35e10e0c7/)—meski sebenarnya tanggung jawab menentukan saksi jatuh pada Kejaksaan Agung sendiri.',
    'sources': ['https://www.merdeka.com/politik/prabowo-sandi-punya-solusi-move-on-selesaikan-kasus-ham-masa-lalu.html', 'https://tirto.id/kontras-nilai-jawaban-jokowi-soal-kasus-ham-masa-lalu-masih-ambigu-deCR', 'https://newnaratif.com/journalism/kiat-kiat-menghindari-hukum-para-pelanggar-ham/share/xuna/2e99b7de2efefc11e5f273f35e10e0c7/', 'https://www.hukumonline.com/berita/baca/hol8242/komisi-kebenaran-dan-rekonsiliasi-suatu-kritik/']
  },
  {
    "question": "Pernyataan mana yang _lebih sesuai_ dengan posisi Anda terkait perekrutan perempuan dalam politik praktis?",
    "choice": [
      {
        'id': 1,
        'text': 'Kita perlu merekrut berdasarkan kapasitas, terlepas dari jenis kelamin. Keterlibatan perempuan akan terjadi dengan sendirinya.',
        'result': [2]
      },
      {
        'id': 2,
        'text': 'Beri kesempatan lebih besar bagi perempuan untuk menempati posisi-posisi penting.',
        'result': [1]
      }
    ],
    'reason': 'Pada debat capres pertama, Jokowi mempertanyakan rendahnya proporsi perempuan pada struktur kepengurusan Partai Gerindra. Ia kemudian membandingkan rendahnya proporsi ini dengan jumlah menteri perempuan di kabinetnya:\n\nJokowi: “_...kalau boleh bandingkan, mohon maaf, misalnya di kabinet saya. Saat saya membentuk kabinet ada 9 menteri perempuan yang menempati tempat-tempat strategis. Misalnya Menlu itu adalah menteri luar negeri [perempuan] pertama. Kemudian Menteri BUMN; Menteri Keuangan; Menteri LHK._”\n\nSementara itu, Prabowo menanggapi Jokowi dengan menyiratkan bahwa kapasitas individu lebih penting:\n\n“_Yang kita masalahkan adalah kebijakan-kebijakan yang ia hasilkan dan dia produkkan. Jadi kalau dibilang masalah gender oke kita cari, kita bisa hitung jumlah….jangan hanya perempuan diangkat dan kita bangga, harus perempuan tapi juga cakap dan pro rakyat._”',
    'sources': ['Transkrip debat capres 1: http://debatcapres.bahasakita.co.id/release/debat-capres-1', 'Debat capres 1, segmen tanya-jawab antar paslon: https://www.youtube.com/watch?v=lVIrnASgm8U']
  },
  {
    "question": "Pernyataan mana mengenai kebudayaan Indonesia di bawah ini yang _paling sesuai_ dengan pandangan Anda?",
    "choice": [
      {
        'id': 1,
        'text': 'Kebudayaan Indonesia merupakan hasil akulturasi berbagai budaya yang akan terus berkembang dan berubah.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Kebudayaan Indonesia merupakan warisan bangsa yang berharga dan perlu untuk dilindungi.',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'Kebudayaan Indonesia saat ini belum perlu menjadi prioritas nasional.',
        'result': [0]
      }
    ],
    'reason': 'Meski kedua paslon berkomitmen menempatkan kebudayaan sebagai haluan pembangunan nasional pada [debat capres ketiga](http://debatcapres.bahasakita.co.id/release/debat-capres-3), dokumen visi-misi keduanya menunjukkan perbedaan cara pandang yang krusial.\n\nPaslon 01 menggunakan kata _[pemajuan kebudayaan](https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20FINAL%2022%20SEPT%202018.pdf)_, mengacu pada UU Pemajuan Kebudayaan no. 5 tahun 2017 yang menempatkan kebudayaan sebagai hal yang dinamis, terus berkembang dan saling mempengaruhi dengan kebudayaan lainnya. Dalam kerangka ini, Negara lebih berperan untuk memfasilitasi masyarakat mengembangkan kebudayaannya sendiri.\n\nSebaliknya, Paslon 02 lebih melihat Negara berperan untuk [melindungi](https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20ADIL%20MAKMUR%20BERSAMA%20PRABOWO%20SANDI.pdf) kebudayaan yang sudah ada sebagai identitas bangsa, seperti melalui pelestarian warisan budaya dan revitalisasi cagar budaya.',
    'sources': ['Transkrip debat capres 3: http://debatcapres.bahasakita.co.id/release/debat-capres-3', 'Visi-misi paslon 01 yanghttps://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20FINAL%2022%20SEPT%202018.pdf', 'Visi-misi paslon 02: https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20ADIL%20MAKMUR%20BERSAMA%20PRABOWO%20SANDI.pdf']
  },
  {
    "question": "Menurut Anda, apa akar masalah pengangguran di Indonesia?",
    "choice": [
      {
        'id': 1,
        'text': 'Kapasitas SDM yang tidak memadai.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Kurangnya lapangan kerja.',
        'result': [2]
      }
    ],
    'reason': 'Paslon 01 berpendapat bahwa akar masalah pengangguran adalah kapasitas SDM untuk bersaing di dunia kerja, sehingga peningkatan kapasitas—serta pemberian insentif bagi masyarakat yang menganggur melalui program [kartu prakerja](https://www.cnnindonesia.com/nasional/20190310180656-32-375996/pemegang-kartu-prakerja-jokowi-dapat-jatah-honor-pengangguran)—menjadi solusi utama.\n\nSebaliknya, Paslon 02 menganggap bahwa pengangguran disebabkan [tidak tersedianya cukup lapangan kerja](https://www.merdeka.com/politik/prabowo-sindir-jokowi-pengangguran-harusnya-dikasih-pekerjaan-bukan-kartu-duit.html) bagi masyarakat Indonesia, dan karenanya Negara harus bertanggung jawab menciptakan lapangan kerja tersebut.',
    'sources': ['https://www.cnnindonesia.com/nasional/20190310180656-32-375996/pemegang-kartu-prakerja-jokowi-dapat-jatah-honor-pengangguran', 'https://www.merdeka.com/politik/prabowo-sindir-jokowi-pengangguran-harusnya-dikasih-pekerjaan-bukan-kartu-duit.html']
  },
  {
    "question": "Apakah Ujian Nasional (UN) perlu dipertahankan?",
    "choice": [
      {
        'id': 1,
        'text': 'Ya, sebagai tolak ukur pendidikan nasional sekaligus syarat kelulusan.',
        'result': [0]
      },
      {
        'id': 2,
        'text': 'Tidak, gantikan dengan penelusuran minat dan bakat.',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'Ya, sebagai survei perkembangan pendidikan, tanpa menjadi syarat kelulusan.',
        'result': [1]
      }
    ],
    'reason': 'Saat masih menjadi syarat kelulusan, UN adalah bahan evaluasi kebijakan pendidikan, yang juga dapat berfungsi sebagai mekanisme [standardisasi dan pemerataan](https://www.cnnindonesia.com/nasional/20180518171132-20-299362/wacana-mendikbud-jadikan-un-penentu-kelulusan-dikecam) pendidikan nasional.\n\nTetapi karena menuai keberatan dari berbagai kalangan, [sejak 2015](https://www.cnnindonesia.com/nasional/20190319111848-32-378624/tkn-klaim-jokowi-sudah-hapus-un-sebagai-syarat-kelulusan) pemerintahan Jokowi tidak lagi menjadikan UN sebagai syarat kelulusan. UN dipertahankan hanya sebagai metode pengumpulan data tentang kemampuan peserta didik secara nasional.\n\nDi sisi lain, Paslon 02 menganggap bahwa UN hanya memberi tekanan bagi pelajar. Dengan berkaca dari pengalaman negara lain, program alternatif yang mereka tawarkan adalah [penelusuran minat dan bakat](https://www.jawapos.com/nasional/18/03/2019/alasan-prabowo-sandi-ingin-hapus-un-di-indonesia/). Untuk mengukur kualitas pelajar dan sekolah, Paslon 02 akan berkoordinasi dengan Badan Akreditasi Nasional dan Daerah.',
    'sources': ['https://www.jawapos.com/nasional/18/03/2019/alasan-prabowo-sandi-ingin-hapus-un-di-indonesia/', 'https://www.cnnindonesia.com/nasional/20190317224759-32-378163/menakar-mimpi-prabowo-sandi-menghapus-ujian-nasional', 'https://www.cnnindonesia.com/nasional/20190319111848-32-378624/tkn-klaim-jokowi-sudah-hapus-un-sebagai-syarat-kelulusan', 'https://www.liputan6.com/news/read/2663678/jk-kalau-tidak-ada-un-bagaimana-tentukan-standar-pendidikan']
  },
  {
    "question": "Menurut Anda, sektor apa yang _untuk saat ini_ seharusnya menjadi landasan utama kebijakan luar negeri Indonesia?",
    "choice": [
      {
        'id': 1,
        'text': 'Kebudayaan (diplomasi berbasis pendidikan, bahasa, kesenian, olahraga)',
        'result': [0]
      },
      {
        'id': 2,
        'text': 'Pertahanan & kedaulatan negara (persenjataan, penjagaan perbatasan, intelijen)',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'Ekonomi (perjanjian dagang antar negara, pembuatan free trade area)',
        'result': [1]
      }
    ],
    'reason': 'Debat capres keempat menunjukkan perbedaan pendekatan hubungan internasional Jokowi dan Prabowo. Jokowi lebih nyaman membicarakan perjanjian dagang antar negara, sambil sesekali menyentuh topik lain. Di sisi lain, Prabowo terus-menerus mengungkit pertahanan dan keamanan.\n\nJokowi: “_Diplomasi yang ketiga adalah bagaimana kita bisa menjalin perdagangan investasi dengan negara negara lain. Saya melihat perkembangan sekarang ini baik di PTA, di FTA, di SEPA kita memiliki kemajuan yang sangat besar._”\n\nPrabowo: “_Kekayaan suatu bangsa kalau nggak dijaga oleh suatu kekuatan pertahanan yang kuat tidak mungkin. … Saya menilai pertahanan Indonesia terlalu lemah. Jauh dari yang diharapkan._”\n\nMeskipun tidak diabaikan sama sekali, [diplomasi kebudayaan](http://www.culturaldiplomacy.org/index.php?en_culturaldiplomacy) belum menjadi prioritas. Baik dalam debat capres maupun dokumen visi-misi, keduanya kekurangan kerangka kerja yang komprehensif dan praktis.',
    'sources': ['http://debatcapres.bahasakita.co.id/release/debat-capres-4', 'https://www.youtube.com/watch?v=-guyUY0NVzI', 'https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20FINAL%2022%20SEPT%202018.pdf', 'https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20ADIL%20MAKMUR%20BERSAMA%20PRABOWO%20SANDI.pdf', 'https://www.slideshare.net/luffy_06/perubahan-visi-misi-prabowo-sandi', 'http://www.culturaldiplomacy.org/index.php?en_culturaldiplomacy']
  },
  {
    "question": "Jika pemerintah hendak melakukan pengurangan pajak, pihak mana yang menurut Anda paling tepat mendapatkannya?",
    "choice": [
      {
        'id': 1,
        'text': 'Perusahaan besar, untuk menarik investasi.',
        'result': [0]
      },
      {
        'id': 2,
        'text': 'Individu, agar daya beli masyarakat meningkat.',
        'result': [2]
      },
      {
        'id': 3,
        'text': 'UMKM, untuk mempercepat perkembangan ekonomi rakyat.',
        'result': [1]
      }
    ],
    'reason': 'Di dokumen visi-misi dan debat capres kelima, Jokowi hendak memotong pajak untuk UMKM. Jokowi tidak membicarakan tentang potongan pajak untuk perorangan dan perusahaan besar.\n\nPrabowo lebih tertarik untuk mengurangi beban pajak perorangan. Mulai dari menaikkan Penghasilan Tak Kena Pajak (PTKP), menurunkan pajak penghasilan karyawan, dan menghapus PBB untuk rumah tinggal pertama dan utama. Harapannya, ekonomi tumbuh lebih pesat, berkat peningkatan daya beli dan konsumsi masyarakat.\n\nMereka juga sebetulnya menawarkan insentif pajak untuk UMKM, yang mereka tambahkan pada revisi visi-misi Januari 2019. Di debat capres kelima, Sandiaga bahkan menawarkan potongan pajak untuk dunia usaha pada umumnya. Hanya saja, hal itu membuat visi mereka soal pajak kontradiktif.',
    'sources': ['Transkrip debat capres 5, http://debatcapres.bahasakita.co.id/release/debat-capres-5', 'Visi-misi Paslon 01: https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20FINAL%2022%20SEPT%202018.pdf', 'Visi-misi Paslon 02: https://www5.jetro.go.jp/newsletter/jkt/2018/VISI%20MISI%20ADIL%20MAKMUR%20BERSAMA%20PRABOWO%20SANDI.pdf']
  },
  {
    "question": "Bagaimana cara meningkatkan tingkat penerimaan pajak Indonesia?",
    "choice": [
      {
        'id': 1,
        'text': 'Memperluas basis pajak melalui kebijakan tax amnesty (pengampunan pajak).',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Menurunkan pajak perorangan yang memberatkan.',
        'result': [2]
      }
    ],
    'reason': 'Pada debat kelima, Sandi sepertinya bergerak dengan kerangka berpikir _[Laffer Curve](https://www.investopedia.com/terms/l/laffercurve.asp)_: semakin sedikit tarif pajak yang dibebankan pada pelaku ekonomi, justru semakin besar pajak yang akan diterima pemerintah. Meskipun demikian, karena menyederhanakan dinamika ekonomi dan pajak, pendekatan ini sering pula menuai kritik.\n\nDi dalam realisasi [APBN 2018](https://www.kemenkeu.go.id/media/11668/apbn-kita-januari-2019.pdf), penerimaan perpajakan dari PPh berkontribusi sebesar 57% dari total Rp1.315,93 triliun realisasi penerimaan pajak. Menurunkan PPh dapat mengurangi secara signifikan penerimaan perpajakan negara.\n\nSebaliknya, Jokowi memilih melanjutkan program amnesti pajak. Harapannya, _[tax base](https://www.investopedia.com/terms/t/taxbase.asp)_ akan naik secara gradual, yang mengurangi risiko syok pada ekonomi Indonesia. Menurut Jokowi, sejauh ini program tersebut sudah berhasil menambah basis wajib pajak. Pemerintah juga sudah menerima [Rp 114 triliun](https://katadata.co.id/berita/2019/04/13/debat-rasio-pajak-jokowi-kritik-target-16-ala-prabowo) dari program tersebut.',
    'sources': ['Transkrip debat capres 5, http://debatcapres.bahasakita.co.id/release/debat-capres-5', 'https://www.investopedia.com/terms/l/laffercurve.asp', 'https://katadata.co.id/berita/2019/04/13/debat-rasio-pajak-jokowi-kritik-target-16-ala-prabowo', 'https://www.cnbcindonesia.com/news/20190111172743-4-50277/turunkan-pph-hapus-ppn-ini-janji-perpajakan-prabowo-sandi', 'https://www.kemenkeu.go.id/media/11668/apbn-kita-januari-2019.pdf']
  },
  {
    "question": "Revolusi industri 4.0 membawa otomatisasi yang dapat mempengaruhi dinamika lapangan kerja. Apakah Anda percaya Indonesia siap menghadapinya?",
    "choice": [
      {
        'id': 1,
        'text': 'Tidak. Risiko bertambahnya pengangguran tetap sangat besar.',
        'result': [2]
      },
      {
        'id': 2,
        'text': 'Ya. Kita dapat mengantisipasinya dengan mengembangkan kapasitas SDM agar sesuai dengan kebutuhan.',
        'result': [1]
      },
      {
        'id': 3,
        'text': 'Ya, tapi kita perlu memilah sektor industri yang menyerap banyak tenaga kerja.',
        'result': [0]
      }
    ],
    'reason': 'Paslon 01 [bersikap optimis](https://katadata.co.id/berita/2018/04/04/jokowi-tak-percaya-teknologi-hilangkan-800-ribu-pekerjaan-pada-2030) akan potensi yang didatangkan revolusi industri 4.0. Selain membangun [infrastruktur dan ekosistem digital](https://inet.detik.com/cyberlife/d-4432203/revolusi-industri-40-di-mata-jokowi-dan-prabowo), mereka meyakini bahwa program retraining maupun reskilling di bidang analisa data, statistik, atau Artificial Intelligence (AI) [untuk SDM Indonesia](https://nasional.kontan.co.id/news/revolusi-industri-40-dan-cara-capres-menyikapinya) akan cukup sebagai antisipasi.\n\nSementara Paslon 02 menyatakan bahwa memastikan kesejahteraan [masyarakat](https://www.cnbcindonesia.com/news/20190217210030-4-55999/prabowo-jangan-bicara-industri-40-sebelum-swasembada-pangan) lebih penting ketimbang menyongsong revolusi industri 4.0. Mereka juga skeptis akan rencana petahana untuk mengatasi problem ketenagakerjaan: "_Kita sama-sama memahami dahsyatnya perkembangan industri 4.0 dengan AI dan robotics. Satu pabrik mobil di Jerman dengan 15.000 pekerja akan mengurangi pekerja hingga 50%,_" tukas Prabowo dalam [debat kedua](http://debatcapres.bahasakita.co.id/release/debat-capres-2).\n\nMeski demikian, Paslon 02 pun tidak menawarkan solusi alternatif untuk melindungi pekerja pada industri padat karya yang menampung pekerja dalam jumlah besar.',
    'sources': ['Transkrip debat capres 2: http://debatcapres.bahasakita.co.id/release/debat-capres-2', 'https://www.cnbcindonesia.com/news/20190217210030-4-55999/prabowo-jangan-bicara-industri-40-sebelum-swasembada-pangan', 'https://inet.detik.com/cyberlife/d-4432203/revolusi-industri-40-di-mata-jokowi-dan-prabowo', 'https://katadata.co.id/berita/2018/04/04/jokowi-tak-percaya-teknologi-hilangkan-800-ribu-pekerjaan-pada-2030', 'https://nasional.kontan.co.id/news/revolusi-industri-40-dan-cara-capres-menyikapinya']
  },
  {
    "question": "Langkah apa yang menurut Anda _paling tepat_ untuk mengembangkan potensi industri kreatif Indonesia?",
    "choice": [
      {
        'id': 1,
        'text': 'Mengangkat status Badan Ekonomi Kreatif (BEKRAF) menjadi kementerian agar memiliki wewenang lebih besar.',
        'result': [1]
      },
      {
        'id': 2,
        'text': 'Melakukan pembinaan kewirausahaan terhadap pelaku industri kreatif UMKM.',
        'result': [2]
      }
    ],
    'reason': 'Pada 2018, kontribusi industri kreatif Indonesia terhadap Pendapatan Domestik Bruto (PDB) diperkirakan [mencapai Rp. 1.000 triliun](https://ekonomi.kompas.com/read/2018/08/01/170900726/bekraf--kontribusi-ekonomi-kreatif-ke-pdb-2018-lebih-dari-rp-1.000-triliun) dan berpotensi menjadi tulang punggung perekonomian Indonesia.\n\nUntuk mendukung pertumbuhan industri kreatif, Wakil Sekretaris Tim Kampanye Nasional Raja Juli Antoni mengatakan bahwa Paslon 01 berencana menaikkan Badan Ekonomi Kreatif (Bekraf) [menjadi kementerian](https://www.idntimes.com/news/indonesia/teatrika/tingkatkan-industri-kreatif-jokowi-usul-bekraf-jadi-kementerian/full). Dengan ini, Bekraf dapat memiliki otoritas dan anggaran lebih besar serta berkoordinasi dengan kementerian lainnya.\n\nSementara itu, Paslon 02 berpendapat bahwa [pembinaan dan pelatihan untuk UMKM](https://www.cnnindonesia.com/ekonomi/20181027161839-92-341950/sandi-mimpi-naikkan-pendapatan-ekonomi-kreatif-jadi-rp1000-t) di bidang ekonomi kreatif—layaknya gerakan OK OCE yang dilaksanakan di DKI Jakarta—merupakan program paling tepat untuk meningkatkan ekonomi kreatif dalam skala nasional.',
    'sources': ['https://ekonomi.kompas.com/read/2018/08/01/170900726/bekraf--kontribusi-ekonomi-kreatif-ke-pdb-2018-lebih-dari-rp-1.000-triliun', 'https://www.idntimes.com/news/indonesia/teatrika/tingkatkan-industri-kreatif-jokowi-usul-bekraf-jadi-kementerian', 'https://www.cnnindonesia.com/ekonomi/20181027161839-92-341950/sandi-mimpi-naikkan-pendapatan-ekonomi-kreatif-jadi-rp1000-t']
  },
  {
    "question": "Jika pemilihan umum dilakukan sekarang juga, siapa pilihan Anda?",
    "helper": "Pertanyaan ini tidak akan mempengaruhi penghitungan skor akhir",
    "choice": [
      {
        'id': 1,
        'text': 'Jokowi-Amin',
        'result': [-1]
      },
      {
        'id': 2,
        'text': 'Prabowo-Sandi',
        'result': [-1]
      },
      {
        'id': 3,
        'text': 'Tidak memilih',
        'result': [-1]
      },
      {
        'id': 4,
        'text': 'Belum menentukan',
        'result': [-1]
      }
    ],
    'reason': '',
    'sources': []
  }
]

qnum = 1
random = 82938221

for q in questions:
  question = main.Question(main.client,
    q.get("question", "Terjadi kesalahan."),
    q.get("choice", []),
    q.get("reason", "Tidak ada data."),
    q.get("sources", []),
    q.get("helper", None))

  question.create((qnum + 1) * random)
  qnum += 1
