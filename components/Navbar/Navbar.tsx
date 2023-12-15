import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import { navigation } from 'shared/constants/navigation';
import styles from './Navbar.module.scss';

const Navbar:FC<any> = () => {
  const [isActive, setActive] = useState(false);
  const router = useRouter();
  const { pathname } = useRouter();
  const toggleClass = () => setActive(!isActive);

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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={styles.navToggle} onClick={toggleClass}>
        <span className={isActive ? `${styles.navToggleItem} ${styles.active}` : styles.navToggleItem} />
      </div>
    </nav>
  );
};

export default Navbar;
