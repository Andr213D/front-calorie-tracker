import React from "react";
import styles from "./AllButtons.module.scss"

const nameSelectButton: string[] = ["Mass", "Effect", "Anthology"]




const SelectButton: React.FC = () =>{

    const [clickSelect, setClickSelect] = React.useState(false)

    const visibilitySelectButton = ( ParentNode:  HTMLElement)  => {
        console.log(ParentNode.id)
        if (ParentNode !== null){
            if( ParentNode.id === "wrapper" ){
                setClickSelect(!clickSelect)
            } else {
                visibilitySelectButton(ParentNode.parentNode as HTMLElement)
            }
        } else {
            setClickSelect(!clickSelect)
        }
    }

    return(
        <div className={styles.SelectButtonWrapper}>
            <button className={styles.SelectButton}
                    onClick={ (e) => {
                        setClickSelect(!clickSelect)
                        const eventTarget: HTMLElement =e.target as HTMLElement
                        visibilitySelectButton(eventTarget.parentNode as HTMLElement)
                        // if (eventTarget.className !== "AllButtons_SelectButton__R1SMf"){
                        //     console.log(eventTarget.id)
                        //     visibilitySelectButton(eventTarget.parentNode as HTMLElement)
                        // } else {
                        //     console.log("Ничего не получилось")
                        // }
                    }}
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