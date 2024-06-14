import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        // Provide the initial prop Key-values here
        opacity:0,
        x:'100vw'
    },
    visible:{
        // Provide the animate Key-values here
        opacity:1,
        x:0,
        // ! applying the transition object 
        transition:{
            type: "spring",
            delay: 0.5
        }
    }
}

function Variant() {
  return (
    <motion.div className='bg-slate-950 text-8xl flex w-screen h-screen items-center justify-center text-white '
        variants={containerVariants} 
        initial="hidden" 
        animate="visible">
     Hello to variants
    </motion.div>
  )
}

export default Variant;

/*
    * while declaring the variants => user need to define it outside the functional component
    * the user defined variant need to be seeded to the motion component using the variants props.
    * we need to define the initial and animate property in the motion component.
    * 
    * 
    * 
    * In the above code we have applied the transition object (Line 15) to the user defined variants not directly write the key
    * value pair value in the visible object. ()
*/