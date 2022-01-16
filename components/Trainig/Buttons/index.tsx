import React from "react";
import styles from "./AllButtons.module.scss"
import SimpleButton from "./SimpleButton";
import SelectButton from "./SelectButton";

const Buttons: React.FC = () =>{
    return(
        <div className={styles.Buttons}>
            <p>Buttons</p>
            <div>
                <button>
                    click
                </button>
                <SimpleButton/>
            </div>
            <p>Select buttons</p>
            <div>
                <SelectButton/>
            </div>
        </div>
    )
}

export default Buttons