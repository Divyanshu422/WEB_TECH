import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import {MOCK_DATA} from './MOCK_DATA.json'
import { Columns } from './Column'

export const BasicTable = () => {

        const column = useMemo(()=>{
            return Columns
        },[])
        const data = useMemo(()=> MOCK_DATA, [])

        //* 1. The call to the useTable return an table instance which is stored in the constant variable
        const tableInstance = useTable({
            columns: column,
            data: data
        })
return (
        <div>
                
        </div>
    ) 
}
