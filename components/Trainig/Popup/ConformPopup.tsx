import React from "react";
import styles from "./ConformPopup.module.scss"

interface conformPopupInterface{
    classNameButtonConformPopup?: string;
    callbackPopupConform: () => void;
    nameButtonConform: string;
    showButtonPopup: boolean | undefined;
}

const Popup: React.FC<conformPopupInterface> = ({
                                                    classNameButtonConformPopup,
                                                    callbackPopupConform,
                                                    nameButtonConform,
                                                    showButtonPopup,
                                                }) => {

    const [showConformPopup, setShowConformPopup] = React.useState( false )

    const closeOutConformPopupEvent = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        if (target.id !== "conformPopupOpenButton"){
            outConformPopupNode(target.parentNode as HTMLElement)
        }
    }

    const outConformPopupNode = (ParentNode: HTMLElement | null ) => {
        if (ParentNode === null) {
        } else if (ParentNode.className === "ConformPopup_ConformPopup__YMQnv" ) {
        } else if (ParentNode.id === "wrapper" ) {
            removeEventListener("click", closeOutConformPopupEvent)
            setShowConformPopup(false)
        } else{
            outConformPopupNode(ParentNode.parentNode as HTMLElement)
        }
    }



    return (
        <>
            { (!showButtonPopup) ?
                <button id = 'conformPopupOpenButton'
                        className = {(classNameButtonConformPopup !== undefined) ?styles[classNameButtonConformPopup] : "" }
                        onClick = { () => {
                            setShowConformPopup(true)
                            addEventListener("click", closeOutConformPopupEvent)
                        }}
                >
                    { nameButtonConform }
                </button>
                : <></>
            }
            <div className={ (showConformPopup)? styles.windowConformPopup : styles.showConformPopup}>
                <div className={styles.ConformPopup}>
                    <div className={styles.ConformPopupHeader}>
                        <h3>
                            Selection confirmation
                        </h3>
                        <button className={styles.ConformPopupHeaderClose}
                            // @ts-ignore
                                onClick = { () =>
                                    setShowConformPopup(false)
                                }
                        >
                            X
                        </button>
                    </div>
                    <hr/>
                    <div className={styles.PopupContent}>
                        <p>
                            Confirm selection
                        </p>
                        <button
                            onClick={ () =>
                                callbackPopupConform()
                            }
                        >
                            Conform
                        </button>
                        <button
                            onClick = { () =>
                                setShowConformPopup(false)
                            }
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup