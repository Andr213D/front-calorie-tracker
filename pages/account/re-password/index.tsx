import React from "react";
import type { NextPage } from 'next'
import UserLayoutForm from "../../../layouts/UserLayoutForm.module";
import Input from "../../../components/Input";
import Link from "next/link";

const EditPassword: NextPage = () => {

    const [oldPasswordInput, setOldPasswordInput] = React.useState("")
    const [newPasswordInput, setNewPasswordInput] = React.useState("")
    const [rePasswordInput, setRePasswordInput] = React.useState("")


    const saveEditPassword = () => {
        console.log({
            oldPassword: oldPasswordInput,
            newPassword: newPasswordInput,
            rePassword: rePasswordInput,
        })
    }

    return(
        <>
            <UserLayoutForm>
                <h3>
                    Change password
                </h3>
                <Input
                    NameInput = {"Old password"}
                    callbackInput = { setOldPasswordInput }
                />
                <Input
                    NameInput = {"New Password"}
                    callbackInput = { setNewPasswordInput }
                />
                <Input
                    NameInput = {"Re password"}
                    callbackInput = { setRePasswordInput }
                />
                <button
                    onClick = {saveEditPassword}
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

export default EditPassword