import React from 'react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import Img from '../../Assets/Img.webp';

const parentVariants = {
    hidden: {
        y: "-100vw",
    },
    visible: {
        y: "0",
        transition: {
            duration: 1.5,
        },
    },
};

const childVariant = {
    hidden: {
        opacity: 0,
        scale: 0.5,
        rotate: 0,
        borderRadius: "20%",
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        borderRadius: "20%",
        transition: {
            type: "spring",
            delay: 5.5,
            duration: 2.5,
        },
    },
};

function RightSide() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    return (
        <motion.div
            className="w-1/2 flex items-center justify-center bg-gradient-to-b from-blue-950 to to-blue-400"
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            perspective={1000}
        >
            <motion.div
                className="flex flex-col bg-slate-400/80 rounded-[30px] cursor-grab w-2/4 h-2/4"
                variants={childVariant}
                style={{
                    transform: `perspective(1000px) rotateX(30deg)`,
                }}
            >
                <motion.img src={Img} className="w-full h-full object-cover" draggable='false' />
            </motion.div>
        </motion.div>
    );
}

export default RightSide;
