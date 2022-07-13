import React from "react";
import styles from "./Tabel.module.scss";

interface itemTableHead{
    id: string;
    name: string;
    sortName: string;
    positionSortTable: number
    checkSortTable: (callback: number, sortName: string) => void
}


const  TableSortHead: React.FC<itemTableHead> = ({
                                                     name,
                                                     sortName,
                                                     positionSortTable,
                                                     checkSortTable
                                                 }) => {

    const [sortHeadIcon,setSortHeadIcon] = React.useState(positionSortTable)
    React.useEffect(()=> {
        setSortHeadIcon(positionSortTable)
    }, [positionSortTable])

    const SortHeadPositionStatus = (sortName:string) =>{
        let sortPosition: number
        if (sortHeadIcon === 0){
            sortPosition = 1
        } else if (sortHeadIcon === 1){
            sortPosition = -1
        } else {
            sortPosition = 0
        }
        checkSortTable(sortPosition, sortName)
    }

    const sortHeadClass = () => {
        return styles.checkSortTable+" "+ (
            sortHeadIcon === 1
                ?  styles.checkSortTableUp
                :(sortHeadIcon === -1)
                ? styles.checkSortTableDown
                : ""
        )
    }

    return(
        <th className={styles.headTable}
            onClick={() => SortHeadPositionStatus(sortName) }
        > { (name.split(" ").length === 1)
            ? <>
                { name } <span className={ sortHeadClass() }/>
            </>
            : <>
                <div className = {styles.headTableTextContainer} >
                    <p> { name.split(" ")[0] } </p>
                    <p> { name.split(" ")[1] } <span className={ sortHeadClass() }/> </p>
                </div>
            </>
        }

        </th>
    )
}

export default TableSortHead