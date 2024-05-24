import React from 'react'
import { useState, useEffect } from'react'
import axios from 'axios';
import Spinner from '../spinner/Spinner.js';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    

    //* Making the ApI in the useEffect:
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const response = await axios.get(url);
        console.log(response?.data?.data);
        setGif(response?.data?.data?.images?.downsized?.url);
        setLoading(false)
    }
   

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
