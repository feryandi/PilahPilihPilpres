import Link from 'next/link'
import Layout from '../components/Layout';

const Privacy = (props) => {
  return(
    <Layout>
      <div className="row text-right">
        <div className="col col-md">
        </div>
        <div className="col col-md">
        </div>
        <div className="col-12 col-md">
          <Link href='/'>
            <button
              type="button"
              className="btn btn-danger">
              <b>KEMBALI&nbsp;&nbsp;<i className="fas fa-arrow-circle-left"/></b>
            </button>
          </Link>
        </div>
      </div>
        <div style={{ textAlign: 'justify'}}>
        <h2>DISCLAIMER</h2>
        <p>
        Kuis ini ditujukan untuk membantu Anda memahami kecocokan preferensi pribadi dengan program maupun gagasan kedua pasangan calon Pemilu 2019. Kami merancang kuis ini secara independen dan tidak berafiliasi dengan entitas manapun di dalam maupun luar negeri—baik itu dari pihak pemerintah, partai politik, KPU, swasta, maupun lembaga non-pemerintah. Kami selaku pembuat kuis juga tidak memperoleh keuntungan finansial dari kuis ini.
        </p>
        <p>
        Kuis ini memiliki sejumlah keterbatasan. Yang paling utama, kuis ini tidak dapat menyertakan semua isu yang dibahas oleh paslon; selain disebabkan keterbatasan waktu, tenaga, dan latar belakang kepakaran tim pembuat kuis, kesulitan ini juga disebabkan ada kalanya kedua paslon tidak memiliki kerangka yang konsisten dan/atau mudah disederhanakan. Meski demikian, ada kalanya pula kedua paslon bungkam mengenai sejumlah isu, sehingga posisi mereka tidak dapat dipastikan.
        </p>
        <p>
        Pada akhirnya, kami menyarankan Anda tidak menjadikan kuis ini sebagai pertimbangan akhir ketika memilih, melainkan sebagai instrumen untuk mengevaluasi kembali asumsi Anda mengenai gagasan dan program kedua paslon. Harapan kami, akan selalu terdapat inisiatif sipil—kecil maupun besar—untuk meningkatkan pengalaman berdemokrasi di Indonesia.
        </p>
        <p>Selamat mengeksplorasi!</p>
        <br/>
        <p>Kami,</p>
        <p>Asanilta Fahda
          <br/>Audhina Nur Afifah
          <br/>Eduard Lazarus
          <br/>Fikri Khalqih S.
          <br/>Feryandi Nurdiantoro</p>
        </div>
        <div className="row text-right">
          <div className="col col-md">
          </div>
          <div className="col col-md">
          </div>
          <div className="col-12 col-md">
            <Link href='/'>
              <button
                type="button"
                className="btn btn-danger">
                <b>KEMBALI&nbsp;&nbsp;<i className="fas fa-arrow-circle-left"/></b>
              </button>
            </Link>
          </div>
        </div>
    </Layout>
  )
}

export default Privacy