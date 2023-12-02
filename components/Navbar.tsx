import styles from "../styles/Navbar.module.scss"
import Link from "next/link";
import { useRouter } from "next/router";
import {FC} from "react";
import {Navigation} from "../constants/types";

const navigation: Navigation[] = [
    { id: 1, title: 'Главная', path: '/' },
    { id: 2, title: 'О себе', path: '/about' },
    { id: 3, title: 'Контакты', path: '/contacts' },
];

const Navbar:FC<Navigation[]> = () => {
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path} legacyBehavior>
                        <a className={pathname === path ? styles.active : null}>{title}</a>
                    </Link>
                    ))}
            </div>
        </nav>
    )
}

export default Navbar;
