import React from "react";

import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

 const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            |
            <Link href="/registration">
                <a>
                    Registration
                </a>
            </Link>
            |
            <Link href="/training">
                <a>
                    Training room
                </a>
            </Link>
            <Image
                src="/capsuleBread.svg"
                alt="Logo"
                width={64}
                height={64}
            />
        </footer>
    )
}

export default Footer