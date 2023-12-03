import { FC, ReactNode } from 'react';
import styles from 'pages/home/Home.module.scss';
import { Box } from '@chakra-ui/react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: ReactNode
};

const Layout:FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Box className={styles.layout}>{children}</Box>
    <Footer />
  </>
);

export default Layout;
