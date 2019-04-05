import Question from '../components/Question'
import fetch from 'isomorphic-fetch';
import nookies from 'nookies'

const Questionnaire = (props) => {
  return(
    <Question {...props}/>
  )
}

Questionnaire.getInitialProps = async function(context) {
  const cookies = nookies.get(context);

  let payload = {
    fp: cookies['fp'],
    se: cookies['se'],
    to: cookies['to']
  }

  // TODO: Only absolute URL
  let result = await fetch(`http://localhost:3000/api/question/get`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  return result;
}

export default Questionnaire
