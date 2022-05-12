import React from "react";
import type { NextPage } from 'next'
import UserData from "../../components/UserData";
import Link from "next/link";


const Account: NextPage = () => {

    const testTasks = () => {
        setTimeout(() => console.log("1 Tasks"))
        Promise.resolve().then(() => console.log("2 Tasks"));
        Promise.resolve().then(() => setTimeout(() => console.log("3 Tasks")));
        setTimeout(() => Promise.resolve().then(() => console.log("4 Tasks")))
        console.log("5 Tasks")
    }

    return (
        <>
            <h3>My account</h3>
            <UserData/>
            <Link href={"/account/edit"}>
                <a>
                    Edit
                </a>
            </Link>
            <Link href={"/account/re-password"}>
                <a>
                    Change password
                </a>
            </Link>
            <button
                onClick={
                    testTasks
                }
            >
                testTasks
            </button>
        </>
    )
}

export default Account