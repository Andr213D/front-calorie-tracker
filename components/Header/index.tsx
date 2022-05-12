import React from "react";

import styles from "./Header.module.scss";
import Image from "next/image";
import line from "../../public/header/line.svg"

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className = {styles.titleImage}>
                <Image
                    src={line}
                    alt="line"
                    width={1200}
                />
            </div>
            <div className = {styles.titleName}>
                <div>
                    <h1>
                        Calorie tracker
                    </h1>
                    <i>Hello stranger!</i>
                </div>
            </div>
            <div className = { styles.SunHeader }>
                <div className={ styles.SunRays }/>
            </div>
        </header>
    )
}

export default Header