import React from "react";

import styles from "./MainLayout.module.scss";

const MainLayout: React.FC = ({ children }) => {
    return(
        <div className={ styles.MainLayout }>
            { children }
        </div>
    )
}

export default MainLayout