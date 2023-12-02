import Navbar from "./Navbar";
import React, { FC } from "react";
import styles from "../styles/Header.module.scss";

const Header:FC = () => (
    <header className={styles.header}>
        <Navbar />
    </header>
)

export default Header;
