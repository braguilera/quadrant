import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NumberTicker } from '../../ui/NumberTicker';

const CardAboutUs = ({ number, title, description, Icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative p-8 rounded-2xl border border-gray-200/80 cursor-pointer overflow-hidden shadow-sm hover:shadow-md"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: true }}
            animate={{ backgroundColor: isHovered ? '#d0f04d' : '#ffffff' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <motion.div
                className="absolute -bottom-6 -right-6 z-0 "
                animate={{y: isHovered ? -100 : 0, x: isHovered ? -40 : 0, scale: isHovered ? .8 : 1, color: isHovered ? "#9BBA00" : "#e5e7eb" }}
            >
                <Icon className="w-24 h-24" />
            </motion.div>

            <div className="relative z-10 h-full flex flex-col justify-between">
                <motion.div
                    key="initial"
                    className="text-left"
                >
                    <motion.div
                        className="text-7xl font-black flex items-center" 
                        initial={{y: 0}}
                        animate={{ y: isHovered ? -20 : 0, scale: isHovered ? .5 : 1.5, x: isHovered ? -70 : 50, color: isHovered ? "#5E7100" : "#929292" }}
                    >
                        <span>+</span>
                        <NumberTicker
                            value={parseInt(number.replace('+', ''))}
                            delay={0.2}
                        />
                    </motion.div>
                    <motion.h3 
                        className="text-xl font-bold mt-2"
                        initial={{ y: 0 }}
                        animate={{ y: isHovered ? -40 : 0, scale: isHovered ? .8 : 1, x: isHovered ? -30 : 0, color: isHovered ? "#728900" : "#CBCBCB" }}
                    >
                        {title}
                    </motion.h3>
                </motion.div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.p
                            className="absolute text-[#7E960C] text-sm text-left mt-2" 
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 60, transition: { delay: 0.1 } }}
                            exit={{  y: 200 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default CardAboutUs;