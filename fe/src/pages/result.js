import Result from '../components/Result'

const ResultPage = (props) => {
  return(
    <Result {...props}/>
  )
}

ResultPage.getInitialProps = async function(payload) {
  // console.log(payload.req.headers['user-agent'])

  // return {
  //   userAgent: payload.req.headers['user-agent']
  // }
  return {}
}

export default ResultPage
