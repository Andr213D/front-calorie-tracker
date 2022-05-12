import React from "react";

import styles from "./Input.module.scss";

interface InputInterface {
    NameInput: string,
    callbackInput: (callback: string) => void
}

const Input: React.FC<InputInterface> = ({
                                             NameInput,
                                             callbackInput
}) => {
    return(
        <label className={ styles.Input }>
            { NameInput }
            <input
                type = {"text"}
                name={ NameInput }
                placeholder={ NameInput }
                autoFocus
                onChange = { (input: React.ChangeEvent<HTMLInputElement>)=> {
                    callbackInput(input.currentTarget.value)
                } }
            />
        </label>
    )
}

export default Input