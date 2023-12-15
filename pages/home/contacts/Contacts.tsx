import React, { FC } from 'react';
import { Typography } from '@mui/material';
import styles from '../Home.module.scss';

const ContactsMain:FC<any> = () => (
  <>
    <Typography className={styles.contacts__title}>Адрес проведения занятий:</Typography>
    <Typography>г. Москва, Болотная наб., 15</Typography>
    <Typography className={styles.contacts__title}>Телефон:</Typography>
    <Typography>+7916999999</Typography>
    <Typography className={styles.contacts__title}>E-mail:</Typography>
    <Typography>katerina-grafova@mail.ru</Typography>
  </>

);

export default ContactsMain;
