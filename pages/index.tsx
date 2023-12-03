import Head from 'next/head';
import {
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import styles from 'styles/Home.module.scss';
import Heading from 'components/Heading/Heading';
import PhotoGallery from 'components/PhotoGallery/PhotoGallery';
import Messengers from 'components/Messengers/Messengers';
import LocationMap from 'components/LocationMap/LocationMap';
import Form from '../components/Forms/FeedbackForm';

const Home = () => (
  <>
    <Head>
      <title>Главная</title>
    </Head>
    <Grid
      h="200px"
      className="container"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem colSpan={5}>
        <Heading text="Кто я" />
      </GridItem>
      <GridItem colSpan={5}>
        <div className={styles.about}>
          <h1 className={styles.about__title}>
            Екатерина Графова -
            сертифицированный преподаватель Федерации Йоги России по
            направлению Хатха-йога (YTTC-200).
          </h1>
          <p className={styles.paragraph}>
            Преподаватель кундалини йоги, йога-нидры. Проводит сеансы гвоздетерапии с применением
            знаний и
            навыков психологии.
            Организатор и ведущая ретритных трансформационных авторских программы, Он-Лайн
            курсов по
            наули-крии и медитации.
          </p>
        </div>
      </GridItem>
      <GridItem colSpan={5}>
        <Heading text="Задать вопрос" />
      </GridItem>
      <GridItem colSpan={3}>
        <img
          className={styles.img}
          src="/photos/7.jpg"
        />
      </GridItem>
      <GridItem colSpan={2}>
        <Form />
      </GridItem>
      <GridItem colSpan={5}>
        <Heading text="Фотогаллерея" />
        <PhotoGallery />
      </GridItem>
      <GridItem colSpan={5}>
        <Heading text="Контакты" />
      </GridItem>
      <GridItem colSpan={2} className={styles.height}>
        <LocationMap />
      </GridItem>
      <GridItem colSpan={2} className={styles.height} ml="200px">
        <Text fontWeight="bold" color="#420670">Адрес проведения занятий:</Text>
        <Text>г. Москва, Болотная наб., 15</Text>
        <Text fontWeight="bold" color="#420670">Телефон:</Text>
        <Text>+7916999999</Text>
        <Text fontWeight="bold" color="#420670">E-mail:</Text>
        <Text>katerina-grafova@mail.ru</Text>
        <Text fontWeight="bold" color="#420670">Социальные сети:</Text>
        {/* <Text><Socials socials={socials} /></Text> */}
        <Messengers />
      </GridItem>

    </Grid>
  </>
);
export default Home;
