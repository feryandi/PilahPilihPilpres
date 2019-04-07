import Link from 'next/link'
import Home from '../components/Home';
import Layout from '../components/Layout';

const Error = (props) => {
  return(
    <Layout>
      <center>
        <h3>Terjadi Kesalahan</h3>
        Maaf, sistem kami mengalami gangguan. Tunggu beberapa saat atau laporkan.
        <br/>
        <br/>
        Anda dapat menekan tombol di bawah ini dan mencoba lagi.
      </center>
      <br/>
      <Link href='/'>
        <button
          type="button"
          className="btn btn-danger btn-block">
          <b>KEMBALI</b>
        </button>
      </Link>      
    </Layout>
  )
}

export default Error