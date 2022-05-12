import React from "react";
import type { NextPage } from 'next'
import UserLayoutForm from "../../../layouts/UserLayoutForm.module";
import Input from "../../../components/Input";
import Link from "next/link";

const Edit: NextPage = () => {

    const [nameInput, setNameInput] = React.useState("")
    const [heightInput, setHeightInput] = React.useState("")
    const [weightInput, setWeightInput] = React.useState("")
    const [ageInput, setAgeInput] = React.useState("")


    const saveEditUser = () => {
        console.log({
            name: nameInput,
            height: heightInput,
            weight: weightInput,
            age: ageInput,
        })
    }

    return(
        <>
            <UserLayoutForm>
                <h3>
                    User info
                </h3>
                <Input
                    NameInput = {"Name"}
                    callbackInput = { setNameInput }
                />
                <Input
                    NameInput = {"Height"}
                    callbackInput = { setHeightInput }
                />
                <Input
                    NameInput = {"Weight"}
                    callbackInput = { setWeightInput }
                />
                <Input
                    NameInput = {"Age"}
                    callbackInput = { setAgeInput }
                />
                <button
                    onClick = {saveEditUser}
                >
                    Save
                </button>
            </UserLayoutForm>
            <Link href={"/account"}>
                <a>
                    {"<-Back"}
                </a>
            </Link>
        </>
    )
}

export default Edit