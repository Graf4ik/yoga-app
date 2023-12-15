import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './Footer.module.scss';

const Footer:FC = () => (
  <footer className={styles.footer}>
    <Typography>Created by Graf</Typography>
  </footer>
);

export default Footer;
