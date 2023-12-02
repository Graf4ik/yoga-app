import '../styles/globals.scss'
import styles from "../styles/Home.module.scss"
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Head from "next/head";
import { ChakraProvider, theme } from "@chakra-ui/react";

const App = ({Component, pageProps}: AppProps) => (
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
)

export default App;
