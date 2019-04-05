import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>

          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>          
          {/* <link rel="stylesheet" href="/_next/static/style.css" />    */}
          <link rel='stylesheet' type='text/css' href='/static/css/style.css' />
        </Head>
        <body className="bg-light">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
