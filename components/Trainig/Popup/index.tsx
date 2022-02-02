import React from "react";
import styles from "./popup.module.scss"
import Popup from "./Popup"

const WrapPopup: React.FC = () =>{

    const ConformButton = () => {
        console.log(" Cool ")
    }

    return(
        <div className={styles.popupWrapper}>
            <p>Popup</p>
            <Popup
                headPopup = { "Test popup" }
                nameButton = { "ConformPopup" }
                //showButton = { false }
                //classNameButtonPopup = "newClass"
                callbackPopupConform = { ConformButton }

            >
                <p>
                    Кошка написала
                </p>
            </Popup>
        </div>
    )
}

export default WrapPopup