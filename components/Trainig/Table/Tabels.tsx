import React from "react";
import styles from "./Tabel.module.scss"

interface TableHeadInterface{
    key: string;
    name: string;
}

interface TableBodyInterface{
    key: string ;
    [propName: string]: string | number;
}

interface PositionStatusInterface{
    [propName: string]: number;
}

const tableHead: TableHeadInterface[] = [
    {key: "A1" ,name: "oneColumn",},
    {key: "A2" ,name: "twoColumn",},
    {key: "A3" ,name: "treeColumn",},
    {key: "A4" ,name: "fourColumn",},
    {key: "A5" ,name: "fiveColumn",},
]

const tableBody: TableBodyInterface[] = [
    {key: "A1" ,oneColumn: "1cont", twoColumn: "2cont", treeColumn: "3cont", fourColumn: "4cont", fiveColumn: "5cont"},
    {key: "A2" ,oneColumn: "11cont", twoColumn: "12cont", treeColumn: "13cont", fourColumn: "14cont", fiveColumn: "15cont"},
    {key: "A3" ,oneColumn: "21cont", twoColumn: "22cont", treeColumn: "23cont", fourColumn: "24cont", fiveColumn: "25cont"},
    {key: "A4" ,oneColumn: "31cont", twoColumn: "32cont", treeColumn: "33cont", fourColumn: "34cont", fiveColumn: "35cont"},
    {key: "A5" ,oneColumn: "41cont", twoColumn: "42cont", treeColumn: "43cont", fourColumn: "44cont", fiveColumn: "45cont"},
]

const Tabels: React.FC = () => {

    const [sortTable, setSortTable] = React.useState(tableBody)
    const [inputValue, setInputValue] = React.useState('')
    const [sortHead,setSortHead] = React.useState('')

    const sortHeadPositionStatus: PositionStatusInterface = {}

    React.useEffect(() =>{
        let newSortTable = sortTable



        setSortTable(
            sortTable
        )
    },[])
    const tableBodyContent = (key: string) => {
        tableHead.forEach(( item  ) => {
            sortHeadPositionStatus[item.key] = 1
        })
        if (0 === 0){
            setSortHead("")
        } else if (1 === 1){
            setSortHead(styles.checkSortTableUp)
        } else {
            setSortHead(styles.checkSortTableDown)
        }
    }

    return(
        <div className = {styles.Tables}>
            <p>Tables</p>
            <div>
                <label>
                    <input
                        //onChange = { setInputValue(inputValue) }
                    />
                </label>
            </div>
            <table>
                <thead>
                <tr>
                    { tableHead.map((item) => {
                        return(
                            <th className={styles.headTable}
                                key={item.key}
                                onClick={ () => {
                                    tableBodyContent(item.key)
                                }}
                            >
                                { item.name }
                                <span className={ styles.checkSortTable + " " + sortHead }  />
                            </th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                {
                    tableHead.map((itemHead) => {
                        return (
                            <tr
                                key={itemHead.key}
                            >
                                { sortTable.map((itemBody) => {
                                    return (
                                        <td
                                            key={itemBody.key}
                                        >
                                            { itemBody[itemHead.name] }
                                        </td>
                                    )
                                })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Tabels