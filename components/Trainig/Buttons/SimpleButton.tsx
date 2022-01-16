import React from "react";
import styles from "./AllButtons.module.scss"

const SimpleButton: React.FC = () =>{
    return(
        <button className={styles.SimpleButton}>
            Click me
        </button>
    )
}

export default SimpleButton