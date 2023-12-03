import Head from 'next/head';
import {
  Box, Image, Text,
} from '@chakra-ui/react';
import Heading from 'components/Heading/Heading';
import Form from 'components/Forms/FeedbackForm';
import PhotoGallery from 'components/PhotoGallery/PhotoGallery';
import LocationMap from 'components/LocationMap/LocationMap';
import Messengers from 'components/Messengers/Messengers';
import styles from './Home.module.scss';

const Home = () => (
  <Box>
    <Head>
      <title>Главная</title>
    </Head>
    <Heading text="Кто я" />
    <Box className={styles.about}>
      <Text className={styles.about__title}>
        Екатерина Графова -
        сертифицированный преподаватель Федерации Йоги России по
        направлению Хатха-йога (YTTC-200).
      </Text>
      <Text className={styles.about_paragraph}>
        Преподаватель кундалини йоги, йога-нидры. Проводит сеансы гвоздетерапии с применением
        знаний и
        навыков психологии.
        Организатор и ведущая ретритных трансформационных авторских программы, Он-Лайн
        курсов по
        наули-крии и медитации.
      </Text>
    </Box>
    <Heading text="Задать вопрос" />
    <Box className={styles.questions}>
      <Box className={styles.question__block}>
        <Image
          className={styles.questionImg}
          src="/photos/7.jpg"
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
        <Text fontWeight="bold" color="#420670">Адрес проведения занятий:</Text>
        <Text>г. Москва, Болотная наб., 15</Text>
        <Text fontWeight="bold" color="#420670">Телефон:</Text>
        <Text>+7916999999</Text>
        <Text fontWeight="bold" color="#420670">E-mail:</Text>
        <Text>katerina-grafova@mail.ru</Text>
      </Box>
    </Box>
    <Messengers />
  </Box>

);

export default Home;
