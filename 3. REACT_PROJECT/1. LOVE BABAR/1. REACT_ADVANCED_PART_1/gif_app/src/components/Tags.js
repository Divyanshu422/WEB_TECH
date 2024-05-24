import React from 'react'
import { useState  } from'react'
// import axios from 'axios';
import Spinner from '../spinner/Spinner.js';
import useGIF from '../useHook/useGIF.js';

function Tags() {
  
    const [tag, setTag] = useState('');

    //* passing the tag to the useGif function 
    const {gif, loading, fetchData} = useGIF(tag);
   

    function gifHandler() {
        fetchData()
    }

    function changeHandler(event){
      setTag(event.target.value)
    }
  return (
    <div className='flex flex-col bg-blue-500 border-[1px] border-black py-10 w-8/12 mx-auto items-center rounded-2xl gap-y-10'>
        <h1 className='text-2xl font-bold text-center uppercase'> Random {tag} Gif </h1>
        {
        (loading)? (<Spinner/>):(<img src={gif} alt="" className='w-[450px] h-[350px]'/>)
        }
        <input type = 'text' className='w-8/12  text-xl text-center mx-auto py-2 rounded-lg' value ={tag} onChange={changeHandler}/>
        <button className='bg-green-200 text-xl text-center w-8/12 mx-auto py-2 rounded-lg hover:scale-105 hover:bg-slate-500' onClick={gifHandler}> Get Random </button>
      
    </div>
  )
}

export default Tags
