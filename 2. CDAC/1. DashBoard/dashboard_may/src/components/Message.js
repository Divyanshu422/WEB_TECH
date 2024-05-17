import React from 'react'
import { motion, Variants } from "framer-motion";
import Img from '../Assets/2.jpeg';

const fadeInUpAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

function Message({data}) {
    return (
      <div>
        <div>
                    <img src={Img} alt="Image not available" className='rounded-full p-2 w-18 h-16' />
                    
        </div>
        <div className="flex flex-col w-100% justify-center items-center h-screen">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUpAnimation}
            className="flex justify-center text-center flex-col gap-4"
          >
            <motion.h1
              variants={fadeInUpAnimation}
              className=" font-extrabold text-black tracking-tight mb-6 text-5xl"
            >
             {data.title} <br/>
             <span className='py-3'>{data.subtitle} </span>
            </motion.h1>
            <motion.p
              variants={fadeInUpAnimation}
              className=" font-extrabold text-black tracking-tight mb-6 text-xl italic"
            >
             {data.description}
            </motion.p>
            {/* <motion.p
              variants={fadeInUpAnimation}
              className="text-base text-richblack-600 font-extrabold md:text-3xl"
            >
             Forgot password
            </motion.p>

            <motion.button
                variants={fadeInUpAnimation}
                className="bg-blue- rounded-[8px] font-medium text-richblack-900 w-full px-[12px] py-[8px] mt-6">
                    <div className='text-black font-bold text-xl'>
                        Sign In
                    </div>
            </motion.button> */}
          </motion.div>
        </div>

      </div>
        
      );
    };    


export default Message


/*
    import { motion, Variants } from "framer-motion";

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const Message = () => {
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
        className="flex justify-center text-center flex-col gap-4"
      >
        <motion.p variants={fadeInUpAnimation}>
          MONITOR. ALERT. AI DIAGNOSTICS REPORT.
        </motion.p>
        <motion.h1
          variants={fadeInUpAnimation}
          className=" linear__text__gradient text-4xl font-extrabold leading-10 tracking-tight  sm:text-6xl sm:leading-none md:text-8xl"
        >
          Get downtime <br />
          AI Diagnostics to help you <br />
          build better apps
        </motion.h1>
        <motion.p
          variants={fadeInUpAnimation}
          className="text-base text-gray-500 md:text-lg"
        >
          Join the mailing list for early access to the alpha release
        </motion.p>
      </motion.div>
    </div>
  );
};

/*/