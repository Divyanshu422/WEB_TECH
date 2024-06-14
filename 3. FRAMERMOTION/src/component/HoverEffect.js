import React from 'react'
import { motion } from 'framer-motion'
function HoverEffect() {
  return (
    <div className='flex w-screen h-screen items-center justify-center bg-slate-200'>
        <motion.button 
            className='px-6 py-4 text-4xl border-2 border-red-300  rounded-2xl'
            whileHover={{
                scale:1.1,
                textShadow: '0px 0px 8px rgb(255,255,255)',
                boxShadow: '0px 0px 8px rgb(255,255,255)',
                color: '#C17060',
                originX:0
            }}
        >
            clickHere
        </motion.button>

    </div>
  )
}

export default HoverEffect

/* ! Hover effect
 *
 *
*/