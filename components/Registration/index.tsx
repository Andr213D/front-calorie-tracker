import React from "react";

import Input from "../../components/Input";

import styles from "./Registration.module.scss";


const Registration = () => {

    const [loginInput, setLoginInput] = React.useState('')
    const [emailInput, setEmailInput] = React.useState('')
    const [passwordInput, setPasswordInput] = React.useState('')
    const [rePasswordInput, setRePasswordInput] = React.useState('')

    const [rulesCheckbox, setRulesCheckbox] = React.useState(false)

    const sendRegistration = () => {
        console.log({
            Login:loginInput.toLowerCase(),
            eMail: emailInput,
            Password:passwordInput,
            rePassword: rePasswordInput,
        })
    }

    return(
        <div className={styles.Registration}>
            <h3>
                Registration
            </h3>
            <Input
                NameInput = {"Login"}
                callbackInput = { setLoginInput }
            />
            <Input
                NameInput = {"eMail"}
                callbackInput = { setEmailInput }
            />
            <Input
                NameInput = {"Password"}
                callbackInput = { setPasswordInput }
            />
            <Input
                NameInput = {"Re password"}
                callbackInput = { setRePasswordInput }
            />
            <label className ={styles.rulesLabelCheckbox} >
                <input
                    className ={styles.rulesCheckbox}
                    name =      "rulesCheckbox"
                    type=       { "checkbox" }
                    onChange =  {() => setRulesCheckbox( !rulesCheckbox ) }
                    defaultChecked = { rulesCheckbox }
                />
                Сonsent to the processing of personal data
            </label>
            <button
                onClick={sendRegistration}
                disabled={ !rulesCheckbox }
            >
                Registration
            </button>
            <hr/>
        </div>
    )
}

export default Registration