import React from 'react'
import { motion } from 'framer-motion'
function RotateName() {
  return (
    <div>
        <motion.div className='bg-slate-950 text-8xl flex w-screen h-screen items-center justify-center text-white '
            animate = {{rotateZ:[360, -360]}}
            transition={{
                duration :'3',
                // repeat: Infinity
            }}
        >
                Hello
        </motion.div>

    </div>
  )
}

export default RotateName