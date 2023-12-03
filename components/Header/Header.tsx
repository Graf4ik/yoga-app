import React, { FC } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Header.module.scss';

const Header:FC = () => (
  <header className={styles.header}>
    <Navbar />
  </header>
);

export default Header;
