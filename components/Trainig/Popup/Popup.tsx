import React from "react";
import styles from "./popup.module.scss"
import ConformPopup from "./ConformPopup";

interface popupInterface{
    headPopup: string,
    nameButton: string,
    showButton?: boolean,
    classNameButtonPopup?: string,
    callbackPopupConform: () => void,
}

const Popup: React.FC<popupInterface> = ({   children,
                                             classNameButtonPopup,
                                             callbackPopupConform,
                                             headPopup,
                                             nameButton,
                                             showButton,
}) => {

    const [showPopup, setShowPopup] = React.useState( false )

    const closeOutPopupEvent = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.id !== "popupOpenButton"){
            outPopupNode(target.parentNode as HTMLElement)
        }
    }

    const outPopupNode = (ParentNode: HTMLElement | null ) => {
        if (ParentNode === null) {
        } else if (ParentNode.className === "popup_Popup__HbaUz" ) {
        } else if (ParentNode.id === "wrapper" ) {
            removeEventListener("click", closeOutPopupEvent)
            setShowPopup(false)
        } else{
            outPopupNode(ParentNode.parentNode as HTMLElement)
        }
    }

    return (
        <>
            <button id = 'popupOpenButton'
                    className = {(classNameButtonPopup !== undefined) ?styles[classNameButtonPopup] : "" }
                    onClick = { () => {
                        setShowPopup(true)
                        addEventListener("click", closeOutPopupEvent)
                    }}
            >
                Open/Close
            </button>
            <div className={ (showPopup)? styles.windowPopup : styles.showPopup}>
                <div className={styles.Popup}>
                    <div className={styles.PopupHeader}>
                        <h3>
                            { headPopup }
                        </h3>
                        <button className={styles.PopupHeaderClose}
                                onClick = { () =>
                                    setShowPopup(false)
                                }
                        >
                            X
                        </button>
                    </div>
                    <hr/>
                    <div >
                        <div className={styles.PopupContent} >
                            { children }
                        </div>
                        <div className={styles.PopupContentButton}>
                            <ConformPopup
                                callbackPopupConform = { callbackPopupConform }
                                nameButtonConform = { nameButton }
                                showButtonPopup = { showButton }
                            />
                            <button
                                onClick = { () =>
                                    setShowPopup(false)
                                }
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup