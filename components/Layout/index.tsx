import Head from 'next/head';
import Header from 'components/Header';
import './index.less';
export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Next-Antd-Scafflod</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <Header />
    <main className="main-container">{children}</main>
  </div>
);
