import Question from '../components/Question'
import fetch from 'isomorphic-fetch';
import nookies from 'nookies'
import Router from 'next/router'
import Layout from '../components/Layout';
import Error from './_error';

const Questionnaire = (props) => {
  if (props.status != 'ok') return(<Error/>)
  return(
    <Layout>
      <Question {...props}/>
    </Layout>
  )
}

Questionnaire.getInitialProps = async function(context) {
  const cookies = nookies.get(context);

  let payload = {
    fp: cookies['fp'],
    se: cookies['se'],
    to: cookies['to']
  }

  let host = "http://localhost:3000"
  if (process.env.NODE_ENV === 'production') {
    host = "https://pilahpilihpilpres.com"
  }

  // TODO: Only absolute URL
  let result = await fetch(host + `/api/question/get`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  if (result.status == 'ok' && result.last_unanswered == null) {
    if (context.res) {
      context.res.writeHead(302, {
        Location: '/result'
      })
      context.res.end()
    } else {
      Router.push('/result')
    }
  }

  return result;
}

export default Questionnaire
