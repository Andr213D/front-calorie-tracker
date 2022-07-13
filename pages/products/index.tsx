import React from "react";
import type { NextPage } from 'next'
import Table from "../../components/Table/Table";

interface TableHeadInterface{
    id: string;
    name: string;
    sortName: string;
}

interface TableBodyInterface{
    id: string ;
    [propName: string]: string | number;
}

const tableHead: TableHeadInterface[] = [
    {id: "A11" ,name: "Eat", sortName: "eat"},
    {id: "A12" ,name: "Portion",sortName: "portion"},
    {id: "A13" ,name: `Weight gm`,sortName: "weight"},
    {id: "A14" ,name: "Calorie kcal",sortName: "calorie"},
]

const tableBody: TableBodyInterface[] = [
    {id: "A1" ,eat: "111cont", portion: "1cont", weight: "5cont", calorie: 12, fiveColumn: 12},
    {id: "A2" ,eat: "11cont", portion: "2cont", weight: "4cont", calorie: 11, fiveColumn: 11},
    {id: "A3" ,eat: "81cont", portion: "3cont", weight: "3cont", calorie: 100, fiveColumn: 100},
    {id: "A4" ,eat: "31cont", portion: "4cont", weight: "2cont", calorie: 13, fiveColumn: 13},
    {id: "A5" ,eat: "41cont", portion: "5cont", weight: "1cont", calorie: 14, fiveColumn: 14},
]

const Products: NextPage = () => {

    return(
        <>
            <h3>Products calorie</h3>
            <Table
                headTable={tableHead}
                bodyTable={tableBody}
                findInTable={''}
            />
        </>
    )
}

export default Products