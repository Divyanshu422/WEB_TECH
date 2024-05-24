import React from 'react'
import { useEffect } from'react'
import axios from 'axios';
import Spinner from '../spinner/Spinner.js';
import useGIF from '../useHook/useGIF.js';

function Random() {
   
    // * calling the gif
    const {gif, loading, fetchData} = useGIF();

    //* Making the ApI in the useEffect:
    function gifHandler() {
        fetchData()
    }
  return (
    <div className='flex flex-col bg-green-400 border-[1px] border-black py-10 w-8/12 mx-auto items-center rounded-2xl gap-y-10'>
        <h1 className='text-2xl font-bold text-center uppercase'> Random Gif </h1>
        {
        (loading)? (<Spinner/>):(<img src={gif} alt="" className='w-[450px] h-[350px]'/>)
        }
        <button className='bg-green-200 text-xl text-center w-8/12 mx-auto py-2 rounded-lg hover:scale-105 hover:bg-slate-500' onClick={gifHandler}> Get Random </button>
      
    </div>
  )
}

export default Random
