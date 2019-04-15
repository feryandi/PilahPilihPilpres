import Document, { Head, Main, NextScript } from 'next/document'
export default class MyDocument extends Document {
  
  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <title>PilahPilihPilpres: Kuis Pilpres 2019, Siapa Capres Pilihanmu?</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>          
          {/* <link rel="stylesheet" href="/_next/static/style.css" />    */}
          <link rel='stylesheet' type='text/css' href='/static/css/style.css' />
          <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
          <link rel="icon" href="/static/favicon.ico"></link>

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@asanilta" />
          <meta property="og:url" content="https://pilahpilihpilpres.com/" />
          <meta property="og:title" content="PilahPilihPilpres: Kuis Pilpres 2019, Siapa Capres Pilihanmu?" />
          <meta property="og:description" content="Kuis ini ditujukan untuk membantu Anda memahami kecocokan preferensi pribadi dengan program maupun gagasan kedua pasangan calon Pemilu 2019" />
          <meta property="og:image" content="https://pilahpilihpilpres.com/static/images/logo.squared.jpeg" />

        </Head>
        <body className="bg-light">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }

}
