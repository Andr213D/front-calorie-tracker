import React from "react";
import styles from "./userLayoutForm.module.scss";


const UserLayoutForm: React.FC = ({children}) => {

    return(
        <div className={styles.UserLayoutForm}>
            { children }
        </div>
    )
}

export default UserLayoutForm