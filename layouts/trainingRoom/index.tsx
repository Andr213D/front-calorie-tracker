import React from "react";

import styles from "./TrainingLayout.module.scss";

const TrainingLayout: React.FC = ({ children }) => {
    return(
        <div className={ styles.TrainingLayout }>
            { children }
        </div>
    )
}

export default TrainingLayout