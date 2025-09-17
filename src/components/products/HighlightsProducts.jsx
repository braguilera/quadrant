import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const HighlightsProducts = ({ index, highlight, product = 'logifleet' }) => {
    const isEven = index % 2 === 0;

    let variantClasses;
    let checkIconClasses;

    if (product === 'haxtrace') {
        variantClasses = isEven
            ? "bg-white text-gray-600 border border-gray-200" 
            : "bg-tertiary text-white";                      

        checkIconClasses = isEven
            ? "p-2 rounded-full w-7 lg:w-10 h-7 lg:h-10 flex-shrink-0 bg-tertiary text-secondary"
            : "p-2 rounded-full w-7 lg:w-10 h-7 lg:h-10 flex-shrink-0 bg-secondary text-primary"; 
            
    } else {
        variantClasses = isEven
            ? "bg-secondary text-gray-700"
            : "bg-white text-gray-600 border border-gray-200"; 
        
        checkIconClasses = "p-2 rounded-full w-7 lg:w-10 h-7 lg:h-10 flex-shrink-0 bg-primary text-white"; 
    }

    const baseClasses = "flex items-center gap-4 text-xs lg:text-2xl font-semibold rounded-2xl px-6 py-4 shadow-lg w-70 lg:w-fit max-w-lg";
    
    const marginClasses = [
        "ml-4 lg:ml-12",
        "ml-18 lg:ml-34",
        "ml-10 lg:ml-16",
        "ml-24 lg:ml-48",
    ];

    return (
        <motion.div
            className={`${baseClasses} ${variantClasses} ${marginClasses[index] || ''}`}
        >
            <Check 
                className={checkIconClasses}
            />
            <p>{highlight}</p>
        </motion.div>
    );
}

export default HighlightsProducts;