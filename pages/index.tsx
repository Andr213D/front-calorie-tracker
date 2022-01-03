import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Calorie Tracker</title>
                <meta name="description" content="Calorie tracker for needed in calculate your consumption eat and change weight in addiction of calorie" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome
                </h1>
            </main>

            <footer className={styles.footer}>
                <Image
                    src="/capsuleBread.svg"
                    alt="Logo"
                    width={128}
                    height={128}
                />
            </footer>
        </div>
    )
}

export default Home
