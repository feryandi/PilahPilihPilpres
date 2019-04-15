import Layout from '../components/Layout';
import ErrorPage from '../components/Error';

const Error = (props) => {
  return(
    <Layout>
      <ErrorPage {...props}/>
    </Layout>
  )
}

export default Error