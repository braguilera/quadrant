import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardServices = ({ title, description, Icon, index }) => {
    const [isActive, setIsActive] = useState(false);
    const isTouchDevice = () => 'ontouchstart' in window;

    return (
        <motion.div
            onHoverStart={() => !isTouchDevice() && setIsActive(true)}
            onHoverEnd={() => !isTouchDevice() && setIsActive(false)}
            onTap={() => setIsActive(!isActive)} 
            
            layout
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="p-6 rounded-2xl cursor-pointer bg-white shadow-sm hover:shadow-md overflow-hidden group min-h-[120px]"
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center ">
                        <motion.div 
                            animate={{ y: isActive ? 0 : 50, x: isActive ? 0 : -20, color: isActive ? "#C8F003" : "#99A1AF", scale: isActive ? 1 : 1.5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {Icon && <Icon className="w-16 h-16" />}
                        </motion.div>
                    </div>
                    <div className='relative flex flex-col text-left w-full'>
                        <motion.h3 
                            className="text-xl font-bold group-hover:text-lg transition-all duration-300"
                            animate={{ color: isActive ? "#6a7282" : "#99a1af"}}
                            transition={{ duration: 0.3 }}
                        >
                            {title}
                        </motion.h3>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.p
                        className="text-gray-500 text-xs text-left mt-2" 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
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