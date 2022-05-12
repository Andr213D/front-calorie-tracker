import React from "react";
import type { NextPage } from 'next'

import Login from "../components/Login";
import Link from "next/link";
import UserLayoutForm from "../layouts/UserLayoutForm.module";

const Home: NextPage = () => {

    return (
        <>
            <h2>
                Welcome
            </h2>
            <div>
                <h3>
                    About calorie tracker
                </h3>
                <p>
                    Calorie tracker for needed in calculate your consumption eat and change weight in addiction of calorie
                </p>
            </div>
            <UserLayoutForm>
                <Login/>
                <Link href="./registration">
                    <a>
                        Registration
                    </a>
                </Link>
            </UserLayoutForm>
        </>
    )
}

export default Home
