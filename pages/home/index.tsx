import Head from 'next/head';
import Heading from 'components/Heading/Heading';
import Form from 'components/Forms/FeedbackForm';
import PhotoGallery from 'components/PhotoGallery/PhotoGallery';
import LocationMap from 'components/LocationMap/LocationMap';
import Messengers from 'components/Messengers/Messengers';
import { Box, Typography } from '@mui/material';
import styles from './Home.module.scss';
import ContactsMain from './contacts/Contacts';

const Home = () => (
  <Box>
    <Head>
      <title>Главная</title>
    </Head>
    <Heading text="Кто я" />
    <Box className={styles.about}>
      <Typography className={styles.about__title}>
        Екатерина Графова -
        сертифицированный преподаватель Федерации Йоги России по
        направлению Хатха-йога (YTTC-200).
      </Typography>
      <Typography className={styles.about_paragraph}>
        Преподаватель кундалини йоги, йога-нидры. Проводит сеансы гвоздетерапии с применением
        знаний и
        навыков психологии.
        Организатор и ведущая ретритных трансформационных авторских программы, Он-Лайн
        курсов по
        наули-крии и медитации.
      </Typography>
    </Box>
    <Heading text="Задать вопрос" />
    <Box className={styles.questions}>
      <Box className={styles.question__block}>
        <img
          className={styles.questionImg}
          src="/photos/7.jpg"
          alt="questionImg"
        />
      </Box>
      <Box className={styles.question__block}>
        <Form />
      </Box>
    </Box>
    <Heading text="Фотогаллерея" />
    <PhotoGallery />
    <Heading text="Контакты" />
    <Box className={styles.contacts}>
      <Box className={styles.contacts__block}>
        <LocationMap />
      </Box>
      <Box className={styles.contacts__block}>
        <ContactsMain />
      </Box>
    </Box>
    <Messengers />
  </Box>

);

export default Home;
