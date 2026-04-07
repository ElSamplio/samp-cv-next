import { AppProps } from 'next/app';
import Head from 'next/head';
import { Syne, DM_Sans } from 'next/font/google';
import 'primereact/resources/themes/arya-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import './styles.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './index.module.css';
import './creative-theme.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

const SampCv = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sergio Andrés Martínez CV</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06060a" />
      </Head>
      <main className={`app ${syne.variable} ${dmSans.variable} ${dmSans.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default SampCv;
