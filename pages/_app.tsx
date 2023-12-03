import 'public/styles/globals.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ChakraProvider } from '@chakra-ui/provider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import { theme } from 'shared/chakra/theme';
import styles from './home/Home.module.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Slabo+27px&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </Layout>
  </ChakraProvider>
);

export default App;
