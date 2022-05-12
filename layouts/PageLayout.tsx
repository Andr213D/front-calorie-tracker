import React from "react";

import styles from "./PageLayout.module.scss";

const PageLayout: React.FC = ({ children }) => {
    return(
        <div className={ styles.PageLayout }>
            { children }
        </div>
    )
}

export default PageLayout