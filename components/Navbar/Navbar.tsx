import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { Navigation } from '../../constants/interfaces';
import styles from './Navbar.module.scss';

const navigation: Navigation[] = [
  { id: 1, title: 'Главная', path: '/home' },
  { id: 2, title: 'Обо мне', path: '/about' },
  { id: 3, title: 'Услуги', path: '/services' },
  { id: 4, title: 'Отзывы', path: '/feedbacks' },
  { id: 5, title: 'Контакты', path: '/contacts' },
];

const Navbar:FC<any> = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path} legacyBehavior>
            <a className={pathname === path ? (styles.active) as string : ''}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
