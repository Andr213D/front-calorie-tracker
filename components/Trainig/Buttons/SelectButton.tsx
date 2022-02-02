import React from "react";
import styles from "./SelectButton.module.scss"

const nameSelectButton: string[] = ["Mass", "Effect", "Anthology"]

const SelectButton: React.FC = () =>{

    const [clickSelect, setClickSelect] = React.useState(false)

    const closeOutButton = () => {
        if (!clickSelect) {
            setClickSelect(true)
            addEventListener("click", visibilitySelectButton)
        } else {
            setClickSelect(false)
            removeEventListener("click", visibilitySelectButton)
        }
    }

    const visibilitySelectButton = (event: MouseEvent) => {
        const eventTarget =event.target as HTMLElement
        if (eventTarget.className !== "SelectButton_SelectButton__Q_5Mi") {
            sortParentNode(eventTarget.parentNode as HTMLElement)
        }
    }

    const sortParentNode = ( ParentNode:  HTMLElement | null)  => {
        if (ParentNode === null){
            console.log("Null ParentNode")
        } else if( ParentNode.id === "wrapper" ){
            setClickSelect(false)
            document.removeEventListener("click", visibilitySelectButton)
        } else {
            sortParentNode(ParentNode.parentNode as HTMLElement)
        }
    }

    return(
        <div className={styles.SelectButtonWrapper}>
            <button className={styles.SelectButton}
                    onClick={ closeOutButton }
            >
                Drop-down list
            </button>
            <hr/>
            {  (clickSelect)
                ? nameSelectButton.map((nameButton)=> {
                    return (
                        <button className={styles.SelectedButton}
                                key ={nameButton}
                        >
                            {nameButton}
                        </button>
                    )
                })
                : <hr/>
            }
        </div>
    )
}

export default SelectButton