import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/CounterSlice';

const Counter = () => {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className=' flex gap-x-10 items-center justify-center h-screen bg-slate-100'>
      {/* Increment and decrement button + count display */}
      <button className='bg-slate-500 p-10 shadow-2xl rounded text-white text-center text-4xl font-extrabold' onClick={()=>dispatch(increment())}>
        Increment
      </button>
      
      <div className='bg-slate-500 p-10 shadow-2xl rounded text-white text-center text-4xl font-extrabold'>{count}</div>

      <button className='bg-slate-500 p-10 shadow-2xl rounded text-white text-center text-4xl font-extrabold' onClick={()=>dispatch(decrement())}>
        Decrement
      </button>

    </div>
  )
}

export default Counter 

