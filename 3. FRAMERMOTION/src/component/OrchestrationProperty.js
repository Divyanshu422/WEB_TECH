import React from 'react';
import { motion } from 'framer-motion';

const parentVariants = {
  hidden: {
    y: '200vw',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 0.4,    // Higher mass means move slower
      damping: 8,         // damping means opposing force. if 0 then it will oscillate infinitely
      delay: 1,
      duration: 2,
      when: 'beforeChildren'
    }
    
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.5,
    },
  },
};

function OrchestrationProperty() {
  return (
    <motion.div
      className="bg-slate-950 flex flex-col h-screen text-white gap-y-10 items-center justify-center"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className='text-4xl'>Hello to the Framer Motion</h1>
      <motion.h2 variants={childVariants}>this is Orchestration property</motion.h2>
      <motion.p variants={childVariants}>In which we populate after the parent</motion.p>
    </motion.div>
  );
}

export default OrchestrationProperty;


/*
    * what is Orchestration_Property?
    * The transition orchestration properties in Framer Motion are used to 
    * control the timing and spacing of animations. It  applied to parent
    * component using the attribute 'when'.
    * 
    * the value of when can be afterChildren or beforeChildren
*/