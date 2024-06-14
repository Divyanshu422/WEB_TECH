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
            transition ={{
              type: 'spring',
              stiffness: 600
            }}
        >
            clickHere
        </motion.button>

    </div>
  )
}

export default HoverEffect

/* ! Hover effect
 *  To provide the hover effect we need to use the 'whileHover' rather than using animate prop.
 *  In the above code I have applied the transition => type as spring and the stiffness as 300. By using the stiffness the spring
 *  will swing more. the ideal value of stiffness is  100.
*/