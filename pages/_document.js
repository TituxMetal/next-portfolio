import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width' />
          <meta name='description' content='A site for my portfolio' />
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          />
          <link href='//fonts.googleapis.com/css?family=Roboto' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx>{`
          body {
            font-family: 'Roboto', sans-serif;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-size: 110%;
            background: lightgrey;
          }
        `}</style>
      </html>
    )
  }
}
