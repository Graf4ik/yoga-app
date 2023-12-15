import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import styles from './Layout.module.scss';
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
