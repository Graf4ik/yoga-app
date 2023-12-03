import Head from 'next/head';
import { FC } from 'react';
import Heading from 'components/Heading/Heading';
import Socials from 'components/Socials/Socials';
import { Box, Link, Spacer } from '@chakra-ui/react';
import { SocialsType } from 'constants/interfaces';
import styles from './Contacts.module.scss';

interface SocialsTypeProps {
  socials: SocialsType[]
}

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    console.log('getStaticProps');
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Contacts:FC<SocialsTypeProps> = ({ socials }) => (
  <>
    <Head>
      <title>Contacts</title>
    </Head>
    <Box className={styles.contacts}>
      <Heading text="Контакты:" />
      <Link className={styles.tel} href="tel:+79261891973">Tel: +7 926 189 19 73</Link>
      <Spacer />
      <Link className={styles.whatsApp} href="https://api.whatsapp.com/send?phone=79261891973">
        Написать в
        WhatsApp
      </Link>
      <Spacer />
      <Link className={styles.telegram} href="http://t.me/EkaterinaGrafova">Написать в Telegram</Link>
      <Spacer />
      <Link href="mailto:katerina-grafova@mail.ru">katerina-grafova@mail.ru</Link>
      <br />
      <Box className={styles.socials}>
        <Socials socials={socials} />
      </Box>
    </Box>
  </>
);

export default Contacts;
