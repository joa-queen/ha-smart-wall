import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, chunks } = renderPage()
    return { html, head , chunks }
  }

  render () {
    return (
     <html>
       <Head>
         <style>{`body { margin: 0; background: #333; color: white; } /* custom! */`}</style>
       </Head>
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}