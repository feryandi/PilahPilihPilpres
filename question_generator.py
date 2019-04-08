import main

questions = [
  {
    "question": "Apakah Anda setuju bahwa peningkatan gaji pejabat, birokrat, dan semua pegawai negeri secara signifikan merupakan solusi mewujudkan birokrasi bebas korupsi?",
    "choice": [
      {
        'id': 1,
        'text': 'Ya',
        'result': [2],
        'reason': 'text and <html/>',
        'sources': ['http://', 'http://']
      },
      {
        'id': 2,
        'text': 'Tidak',
        'result': [1],
        'reason': 'text and <html/>',
        'sources': ['http://', 'http://']
      }
    ]
  },
  {
    "question": "Bagaimana seharusnya pemerintah menghadapi Revolusi Industri 4.0?",
    "choice": [
      {
        'id': 1,
        'text': 'Menyiapkan sarana-sarana pendukung kreativitas dan memberi regulasi yang longgar agar memudahkan investasi-investasi bisnis start-up berkembang',
        'result': [1, 2],
        'reason': 'text and <html/>',
        'sources': ['http://', 'http://']
      },
      {
        'id': 2,
        'text': 'Lebih berfokus pada Industri Manufaktur karena SDM Indonesia belum siap menghadapi Revolusi Industri 4.0',
        'result': [0],
        'reason': 'text and <html/>',
        'sources': ['http://', 'http://']
      }
    ]
  },


]

for q in questions:
  question = main.Question(main.client, q.get("question", "Terjadi kesalahan."), q.get("choice", []))
  question.create()
