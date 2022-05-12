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
            <Image
                src="/capsuleBread.svg"
                alt="Logo"
                width={48}
                height={48}
            />
            <Link href={"/registration"}>
                <a>
                    Sing in
                </a>
            </Link>
            <Link href={"/account"}>
                <a>
                    Account
                </a>
            </Link>
            <Link href={"/products"}>
                <a>
                    Products
                </a>
            </Link>
        </footer>
    )
}

export default Footer