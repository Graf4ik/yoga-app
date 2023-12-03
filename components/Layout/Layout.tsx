import { FC, ReactNode } from 'react';
import styles from 'styles/Home.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children: ReactNode
};

const Layout:FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div className={styles.layout}>{children}</div>
    <Footer />
  </>
);

export default Layout;
