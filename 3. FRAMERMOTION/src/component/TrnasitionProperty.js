import React from 'react'
import { motion } from 'framer-motion'

function TrnasitionProperty() {
  return (
    <div>
              <motion.div className='bg-slate-950 text-8xl flex w-screen h-screen items-center justify-center text-white '
            initial = {{
                x:'-250vw',
                opacity: 0 }}
            animate = {{
                x: '0',
                opacity: 1
            }}
           
            transition={{
                // duration :'10',
                delay: 0.5,
                type: 'spring',
                stiffness: 200
            }}
        >
                Hello
        </motion.div>
    </div>
  )
}

export default TrnasitionProperty

/*
 * In the transition, we have number of properties: duration, delay 
 * there is a type property in the transition which can have the 3 values tween/Spring and inertia.
 *          -> the stiffness property is applied only to the spring property. default value is 100. if higher than 100 is set
 *              then it will lead to more oscillation
 *          -> tween: provides uniform sliding effect
 * 
 * 
 * Note: 
 * In Framer Motion, the duration property is only applied to tween-type animations, not to spring or inertia-type animations. This is because spring and inertia animations are designed to simulate real-world physics and have their own built-in timing and easing mechanisms that are not directly controlled by the duration property.
 * 
 * 
*/