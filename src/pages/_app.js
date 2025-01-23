import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>PMS</title>
        <meta name="description" content="Welcome to Emmanuel's blog" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;