import Question from '../components/Question'

const Questionnaire = (props) => {
  return(
    <Question {...props}/>
  )
}

Questionnaire.getInitialProps = async function(payload) {
  // console.log(payload.req.headers['user-agent'])

  // return {
  //   userAgent: payload.req.headers['user-agent']
  // }
  return {}
}

export default Questionnaire
