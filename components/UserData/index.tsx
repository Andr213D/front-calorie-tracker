import React from "react";

import styles from "./UserData.module.scss"

const UserData: React.FC = () => {
    return(
        <div className={styles.UserData}>
            <p>
                {"Login: "}
            </p>
            <p>
                {"Name: "}
            </p>
            <p>
                {"Height: "}
            </p>
            <p>
                {"Weight: "}
            </p>
            <p>
                {"Age: "}
            </p>
        </div>
    )
}

export default UserData