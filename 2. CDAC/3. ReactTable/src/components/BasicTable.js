import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import {MOCK_DATA} from './MOCK_DATA.json'
import { Columns } from './Column'

export const BasicTable = () => {

        //*  the useTable hook recommends to memorize the row and columns using useMemo hook
        /*
            * The useMemo hook is a React hook that helps optimize performance by memoizing, or caching, 
            * expensive calculations. It takes a callback function that performs a calculation and an array of 
            * dependencies. If any of the dependencies change between renders, useMemo will re-run the 
            * calculation and return the new result. If none of the dependencies change, useMemo will return the 
            * memoized result from the previous render, avoiding the expensive re-calculation.
        */

        const column = useMemo(()=>{
            return Columns
        },[])
        const data = useMemo(()=> MOCK_DATA, [])

        //* Passing the output of useMemo hook to the useTable
        useTable({
            columns: column,
            data: data
        })


return (
        <div>
                
        </div>
    ) 
}
