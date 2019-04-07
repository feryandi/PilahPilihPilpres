import Link from 'next/link'
import Home from '../components/Home';
import Layout from '../components/Layout';

const Index = (props) => {
  return(
    <Layout>
      <Home {...props}/>
    </Layout>
  )
}

export default Index