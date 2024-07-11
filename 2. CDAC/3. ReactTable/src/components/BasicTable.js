import React, {useMemo} from 'react'

/*
    * to create table component => we need to import 3 things: 
            * 1. useTable hook from the react-table
            * 2. Mock Data which is created using the Mockroo
            * 3. Arrays of Columns which we defined Column.js
*/
import { useTable } from 'react-table'
import {MOCK_DATA} from './MOCK_DATA.json'
import { Columns } from './Column'

export const BasicTable = () => {

    // * Using the useTable hook -> which takes object as the i/p.  the hook 
    // * consume 2 properties: rows and column. 
    // * The columns is the imported array of Columns and data represent the row
    useTable({
        columns: Columns,
        data: MOCK_DATA
    })

   

  return (
    <div>

    </div>
  )
}
