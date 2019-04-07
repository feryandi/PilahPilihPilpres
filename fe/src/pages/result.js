import Final from '../components/Final'
import nookies from 'nookies'
import Layout from '../components/Layout';

const ResultPage = (props) => {
  return(
    <Layout>
      <Final {...props}/>
    </Layout>
  )
}

ResultPage.getInitialProps = async function(context) {
  const cookies = nookies.get(context);

  let payload = {
    fp: cookies['fp'],
    se: cookies['se'],
    to: cookies['to']
  }

  // TODO: Only absolute URL
//  let result = await fetch(`https://survey-dot-hoax-analyzer.appspot.com/api/result/get`, {
  let result = await fetch(`http://localhost:3000/api/result/get`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then(res => res.json());

  console.log(result);

  // if (result.last_unanswered == null) {
  //   if (context.res) {
  //     context.res.writeHead(302, {
  //       Location: '/result'
  //     })
  //     context.res.end()
  //   } else {
  //     Router.push('/result')
  //   }
  // }

  return result;
}

export default ResultPage
