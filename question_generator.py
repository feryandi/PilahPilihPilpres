import main

questions = [
  {
    "question": "Langkah apa yang perlu _diprioritaskan_ untuk mengurangi risiko korupsi oleh pejabat publik?",
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
    'reason': 'Meski kedua paslon menjanjikan peningkatan kesejahteraan ASN (Aparatur Sipil Negara), perbaikan sistem akuntabilitas, dan sinergi antar lembaga, mereka berdua punya penekanan solusi yang cukup berbeda terkait isu korupsi oleh ASN dan pejabat publik.\n\nPada [debat capres pertama](http://debatcapres.bahasakita.co.id/release/debat-capres-1), paslon 01 berkali-kali menekankan pentingnya transparansi, meritokrasi, dan akuntabilitas dalam proses rekrutmen. Sementara paslon 02 berpendapat bahwa kesejahteraan yang lebih baik akan mengurangi godaan untuk korupsi.\n\nDi sisi lain, Indonesia Corruption Watch (ICW) melihat bahwa kedua paslon [belum memiliki program komprehensif](https://katadata.co.id/berita/2019/01/22/icw-program-pemberantasan-korupsi-jokowi-dan-prabowo-tak-membuat-jera) untuk menangani korupsi. Diperlukan strategi baru - seperti memiskinkan koruptor - mengingat mekanisme hukuman denda dan penjara terbukti kurang efektif menimbulkan efek jera.',
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


]

for q in questions:
  question = main.Question(main.client,
    q.get("question", "Terjadi kesalahan."),
    q.get("choice", []),
    q.get("reason", "Tidak ada data."),
    q.get("sources", []))

  question.create()
