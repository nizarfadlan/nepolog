import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return {...initialProps}
   }
   
   render() {
      return (
         <Html lang="en">
         <Head>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="/js/myscript.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
         </Head>
         <body className="">
            <Main />
            <NextScript />
         </body>
         </Html>
      )
   }
}