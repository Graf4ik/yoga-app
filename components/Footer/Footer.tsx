import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import styles from './Footer.module.scss';

const Footer:FC = () => (
  <footer className={styles.footer}>
    <Text>Created by Graf</Text>
  </footer>
);

export default Footer;
