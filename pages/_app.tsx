import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import React from 'react'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Calorie Tracker</title>
                <meta name="description" content="Calorie tracker for needed in calculate your consumption eat and change weight in addiction of calorie" />
                <link rel="icon" href="favicon.svg" />
            </Head>
            <React.StrictMode>
                <div id="wrapper">
                    <Header/>
                    <Component {...pageProps} />
                    <Footer/>
                </div>
            </React.StrictMode>
        </>
    )
}

export default App
