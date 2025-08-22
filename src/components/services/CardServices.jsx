import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardServices = ({ title, description, Icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="p-6 rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-md overflow-hidden group"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center ">
                        <motion.div 
                            animate={{ y: isHovered ? 0 : 50, x: isHovered ? 0 : -20, color: isHovered ? "#C8F003" : "#99A1AF", scale: isHovered ? 1 : 1.5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {Icon && <Icon className="w-16 h-16" />}
                        </motion.div>
                    </div>
                    <div className='relative flex flex-col text-left w-full'>
                        <motion.h3 
                            className="text-xl font-bold group-hover:text-lg transition-all duration-300"
                            animate={{ color: isHovered ? "#6a7282" : "#99a1af"}}
                            transition={{ duration: 0.3 }}
                        >
                            {title}
                        </motion.h3>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.p
                        className="text-gray-500 text-xs text-left mt-2" 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                        exit={{ opacity: 0, y: 10 }}
                    >
                        {description}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CardServices;