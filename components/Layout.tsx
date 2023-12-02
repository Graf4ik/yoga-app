import Header from "./Header";
import Footer from "./Footer";
import { FC, ReactNode } from "react";
import styles from "../styles/Home.module.scss"

type layoutProps = {
    children: ReactNode
}

const Layout:FC<layoutProps> = ({ children }) => (
    <>
        <Header />
        <div className={styles.layout}>{children}</div>
        <Footer />
    </>
)

export default Layout;
