import React from "react";
// css를 global이 아닌 Header folder에 local화를 시키려면 파일명을 파일명.module.css로 만들고 import를 javascript 하듯 만든후에 className 선언도 자바스크립트 하듯 하면 된다.
import styles from "./Header.module.scss";

export default () => (
    <header>
        <ul className={styles.navlist}>
            <li>
                <a href="/">Movies</a>
            </li>
            <li>
                <a href="/tv">TV</a>
            </li>
            <li>
                <a href="/search">Search</a>
            </li>
        </ul>
    </header>
);