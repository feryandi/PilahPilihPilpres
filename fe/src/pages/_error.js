import Link from 'next/link'
import Home from '../components/Home';
import Layout from '../components/Layout';

const Error = (props) => {
  return(
    <Layout>
      Terjadi Kesalahan
      <Link href='/'>
        <button
          type="button"
          className="btn btn-danger btn-block">
          KEMBALI
        </button>
      </Link>      
    </Layout>
  )
}

export default Error