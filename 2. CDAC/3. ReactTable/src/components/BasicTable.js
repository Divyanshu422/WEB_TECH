import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import {MOCK_DATA} from './MOCK_DATA.json'
import { Columns } from './Column'

export const BasicTable = () => {

        const column = useMemo(()=>{
            return Columns
        },[])
        const data = useMemo(()=> MOCK_DATA, [])
        /*
            * we need to use the table instance with our jsx (table skeleton -> in html) to render all necessary ui 
            * we begin by destructuring a couple of properties and methods from the table instance
        */
        const tableInstance = useTable({
            columns: column,
            data: data
        })
        const {getTableBodyProps,  getTableProps, headerGroups, rows, prepareRow } = tableInstance;

        
return (
        <table>
            <thead>
                <tr>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
    ) 
}
