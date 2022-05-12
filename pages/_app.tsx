import '../styles/globals.scss'
import React from 'react'

import type { AppProps } from 'next/app'
import Head from "next/head";

import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageLayout from "../layouts/PageLayout";


function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Calorie Tracker</title>
                <meta name="description" content="Calorie tracker for needed in calculate your consumption eat and change weight in addiction of calorie" />
                <link rel="icon" href="./../public/favicon.svg" />
                <link
                    href="https://fonts.googleapis.com/css2?family=The+Girl+Next+Door&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div id="wrapper">
                <MainLayout>
                    <Header/>
                    <PageLayout>
                        <Component {...pageProps} />
                    </PageLayout>
                    <Footer/>
                </MainLayout>
            </div>
        </>
    )
}

export default App
