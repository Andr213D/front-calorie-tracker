import type { NextPage } from 'next'
import Link from 'next/link'
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
    return (
        <div>
            <MainLayout>
                <h2>
                    Welcome
                </h2>
                <Link href="/registration">
                    <a>
                        Registration
                    </a>
                </Link>
            </MainLayout>
        </div>
    )
}

export default Home
