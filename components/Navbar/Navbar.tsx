import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { Navigation } from 'shared/interfaces/interfaces';
import styles from './Navbar.module.scss';

const navigation: Navigation[] = [
  { id: 1, title: 'Главная', path: '/home' },
  { id: 2, title: 'Обо мне', path: '/about' },
  { id: 3, title: 'Услуги', path: '/services' },
  { id: 4, title: 'Отзывы', path: '/feedbacks' },
  { id: 5, title: 'Контакты', path: '/contacts' },
];

const Navbar:FC<any> = () => {
  const [isActive, setActive] = useState(false);
  const router = useRouter();
  const toggleClass = () => {
    setActive(!isActive);
  };
  const { pathname } = useRouter();

  useEffect(() => {
    const startHandler = () => setActive(false);
    router.events.on('routeChangeStart', startHandler);
    return () => router.events.off('routeChangeStart', startHandler);
  });

  return (
    <nav className={styles.nav}>
      <div className={isActive ? styles.open : styles.links}>
        {navigation.map(({
          id,
          title,
          path,
        }) => (
          <Link key={id} href={path} legacyBehavior>
            <a className={pathname === path ? styles.active as string : ''}>{title}</a>
          </Link>
        ))}
      </div>
      <div className={styles.navToggle} onClick={toggleClass}>
        <span className={isActive ? `${styles.navToggleItem} ${styles.active}` : styles.navToggleItem} />
      </div>
    </nav>
  );
};

export default Navbar;
