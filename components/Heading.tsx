import { FC } from "react";
import styles from "../styles/Home.module.scss"

const Heading:FC = ({ tag, text }) => {
    const Tag = tag || "h1"
    return <div className={styles.title}>{text}</div>
}

export default Heading;
