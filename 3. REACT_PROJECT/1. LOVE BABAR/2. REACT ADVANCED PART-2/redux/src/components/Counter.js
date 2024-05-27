import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slice/CounterSlice';

const Counter = () => {

  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper flex flex-col justify-center items-center bg-[#0f172a] text-[#e5e7eb] w-screen h-screen
    gap-7 font-bold text-2xl"
    >
      {/* Increment and decrement button + count display */}
      <button className="border border-white rounded-xl w-[160px] h-[60px] flex items-center justify-center hover:bg-[#1d8abc] transition-all" onClick={()=>dispatch(increment())}>
        Increment
      </button>
      
      <div className="rounded-full w-[120px] h-[120px] border-2 flex items-center justify-center text-3xl">{count}</div>

      <button className="border border-white rounded-xl p-4  w-[160px] h-[60px] flex items-center justify-center hover:bg-[#1d8abc] transition-all" onClick={()=>dispatch(decrement())}>
        Decrement
      </button>

    </div>
  )
}

export default Counter 

