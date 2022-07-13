import React from "react";

import TableSortHead from "./TableSortHead";
import styles from "./Tabel.module.scss";

interface TableHeadInterface{
    id: string;
    name: string;
    sortName: string
}

interface TableBodyInterface{
    id: string ;
    [propName: string]: string | number;
}

interface propsInterface{
    headTable: TableHeadInterface[],
    bodyTable: TableBodyInterface[],
    findInTable: string
}

interface TableHeadClassInterface{
    [propName: string]: number;
}


const Table: React.FC<propsInterface> = ({
                                             headTable,
                                             bodyTable,
                                             findInTable,
                                         }) => {

    const [sortTable, setSortTable] = React.useState([...bodyTable])
    const [sortHead, setSortHead] = React.useState((): TableHeadClassInterface => {
        return headTable.reduce((state: TableHeadClassInterface, item) => {
            state[item.sortName] = 0
            return state
        }, {})
    })
    const [sortKey, setSortKey] = React.useState('')


    React.useEffect(() => {
        let sortBodyTable = [...bodyTable]

        if(findInTable){
            sortBodyTable = sortBodyTable.filter((row) => {
                return Object.keys(row).some((key) => {
                    return String(row[key]).toLowerCase().indexOf(findInTable) > -1
                })
            })
        }

        if (sortKey){
            if (sortHead[sortKey] !== 0){
                sortBodyTable = sortBodyTable.sort((a, b)=> {
                    let aa: string | number = a[sortKey]
                    let bb: string | number = b[sortKey]
                    return (aa === bb ? 0 : aa > bb ? 1 : -1) * sortHead[sortKey]
                })
            }
        }
        setSortTable([...sortBodyTable])
    }, [bodyTable, sortHead, sortKey, findInTable])

    const changeSortHead = (callback :number, sortName: string) => {
        let sortAllPosition = sortHead
        for (let key in sortHead){
            if (key === sortName){
                sortAllPosition[sortName] = callback
            } else {
                sortAllPosition[key] = 0
            }
        }
        setSortKey(sortName)
        setSortHead(sortAllPosition =>
            ({...sortAllPosition, sortName: callback}))
    }

    return (
        <table className={styles.Table}>
            <thead>
            <tr>
                {
                    headTable.map((item) => {
                        return (
                            <TableSortHead
                                key={item.id}
                                positionSortTable = { sortHead[item.sortName] }
                                checkSortTable = { changeSortHead }
                                {...item}
                            />
                        )
                    })
                }
            </tr>
            </thead>
            <tbody>
            {
                sortTable.map((itemBody) => {
                    return (
                        <tr
                            key={itemBody.id}
                        >
                            {headTable.map((itemHead) => {
                                return (
                                    <td
                                        key={itemHead.id}
                                    >
                                        {itemBody[itemHead.sortName]}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Table