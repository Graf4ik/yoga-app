import Head from 'next/head';
import { FC } from 'react';
import Heading from 'components/Heading/Heading';
import { SocialsType } from 'constants/types';
import styles from 'styles/Home.module.scss';
import Socials from 'components/Socials/Socials';

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
    <div className={styles.contacts}>
      <Heading text="Контакты:" />
      <a className={styles.tel} href="tel:+79261891973">Tel: +7 926 189 19 73</a>
      <br />
      <a className={styles.whatsApp} href="https://api.whatsapp.com/send?phone=79261891973">
        Написать в
        WhatsApp
      </a>
      <br />
      <a className={styles.telegram} href="http://t.me/EkaterinaGrafova">Написать в Telegram</a>
      <br />
      <a href="mailto:katerina-grafova@mail.ru">katerina-grafova@mail.ru</a>
      <br />
      <div className={styles.socials}>
        <Socials socials={socials} />
      </div>
    </div>
  </>
);

export default Contacts;
