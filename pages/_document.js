import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>{`body { background: #069 }`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
