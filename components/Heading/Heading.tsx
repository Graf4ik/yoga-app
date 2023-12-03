import { FC } from 'react';
import styles from '../../styles/Home.module.scss';

interface HeadingProps {
  text: string;
}

const Heading:FC<HeadingProps> = ({ text }) => <div className={styles.title}>{text}</div>;

export default Heading;
