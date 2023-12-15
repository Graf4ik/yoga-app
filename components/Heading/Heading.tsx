import { FC } from 'react';
import styles from 'pages/home/Home.module.scss';
import { Box } from '@mui/material';

interface HeadingProps {
  text: string;
}

const Heading:FC<HeadingProps> = ({ text }) => <Box className={styles.title}>{text}</Box>;

export default Heading;
