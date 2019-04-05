import Link from 'next/link'
import Home from '../components/Home';

const Index = (props) => {
  return(
    <Home {...props}/>
  )
}

Index.getInitialProps = async function(payload) {
  // console.log(payload.req.headers['user-agent'])

  // return {
  //   userAgent: payload.req.headers['user-agent']
  // }
  return {}
}

export default Index