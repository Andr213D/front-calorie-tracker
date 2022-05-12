import React from "react";
import styles from "./Login.module.scss";
import Input from "../Input";

const Login: React.FC = () => {

    const [loginInput, setLoginInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')

    const sendLogin = () => {
        console.log({
            Login:loginInput.toLowerCase(),
            Password:passwordInput
        })
    }

    return(
        <div className={styles.Login}>
            <h3>
                Sing in
            </h3>
            <Input
                NameInput = {"Login"}
                callbackInput = { setLoginInput }
            />
            <Input
                NameInput = {"Password"}
                callbackInput = { setPasswordInput }
            />
            <button
                onClick={sendLogin}
            >
                Login
            </button>
            <hr/>
        </div>
    )
}

export default Login