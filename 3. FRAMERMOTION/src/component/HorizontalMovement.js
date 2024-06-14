import React from 'react'
import { motion } from 'framer-motion'

function HorizontalMovement() {
  return (
    <div>
        {/* ! In the line of initial we have used the quotes '' => this is becoz we 
              are using the string. i.e. -250vw is string and if we have used the number */}
        <motion.div className='bg-slate-950 text-8xl flex w-screen h-screen items-center justify-center text-white '
            initial = {{
                x:'-250vw',
                opacity: 0 }}
            animate = {{
                x: '0',
                opacity: 1
            }}
            //! by setting x = 0. it means offset value (which is its natural position without the framer motion. In simple word by 0, the element will move to the location where it is placed by tailwind css)
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

export default HorizontalMovement



/*
    * Notes: 
    1.  In the code we have used opacity -> which can take value btw 0 and 1. the zero means not visible and 1 means fully visible
    2. For using the framer motion we need to import the motion from Framer and then applied the motion to the div tag.
    3. the motion element takes 3 props: initial, animate and transition
*/