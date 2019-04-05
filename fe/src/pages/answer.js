import Answer from '../components/Answer'

const Explanation = (props) => {
  return(
    <Answer {...props}/>
  )
}

Explanation.getInitialProps = async function(payload) {
  // console.log(payload.req.headers['user-agent'])

  // return {
  //   userAgent: payload.req.headers['user-agent']
  // }
  return {}
}

export default Explanation
