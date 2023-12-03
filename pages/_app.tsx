import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Layout from 'components/Layout/Layout';
import styles from 'styles/Home.module.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </Layout>
  </ChakraProvider>
);

export default App;
