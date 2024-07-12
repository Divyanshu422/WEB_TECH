import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import {MOCK_DATA} from './MOCK_DATA.json'
import { Columns } from './Column'

export const BasicTable = () => {

        const column = useMemo(()=>{
            return Columns
        },[])
        const data = useMemo(()=> MOCK_DATA, [])

        const tableInstance = useTable({
            columns: column,
            data: data
        })
return (
    //  Creating the basic table strucutre with followiung tags -> <thead> <tbody> <tr> <th> <td> 

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
