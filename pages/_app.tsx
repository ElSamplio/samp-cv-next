import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './index.module.css';

const SampCv = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sergio Andrés Martínez CV</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default SampCv;
