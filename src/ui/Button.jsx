import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  
  const arrowVariants = {
    rest: { rotate: 0, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { rotate: 45, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const baseStyles = "inline-flex items-center justify-center gap-4 px-4 lg:px-8 py-2 font-bold transition-colors duration-300 cursor-pointer";

  const variantStyles = {
    'case-study': {
      button: "relative py-1 lg:py-3 bg-white text-primary shadow-md rounded-xl mr-5 lg:mr-0 pr-8 lg:pr-10 text-sm lg:text-base 2xl:text-xl lg:mt-4 hover:bg-secondary hover:text-primary ",
      circle: "absolute shadow-md -right-6 lg:scale-130 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'nav': {
      button: "relative border border-secondary py-1 text-white rounded-full shadow-md text-xl hover:bg-secondary hover:text-primary ",
    },
    'consulting': {
      button: "relative py-3 bg-white text-primary border border-primary lg:ml-0 rounded-xl shadow-md hover:bg-primary hover:text-white text-xs px-8 lg:text-base",
      circle: "absolute shadow-md -right-9 scale-130 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'logifleet': {
      button: "relative py-3 bg-primary font-semibold pr-10 text-white border lg:w-1/3 rounded-xl border-primary shadow-md hover:bg-white hover:text-primary text-sm lg:text-lg xl:text-2xl",
      circle: "absolute shadow-md -right-8 lg:-right-10 scale-140 lg:scale-180 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'haxtrace': {
      button: "relative lg:py-3 bg-tertiary font-semibold pr-8 lg:pr-10 text-white rounded-xl hover:bg-white hover:text-tertiary text-xl lg:text-3xl shadow-[-5px_5px_0px_theme(colors.secondary)] transition-all duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:border hover:border-tertiary",
      circle: "absolute shadow-md -right-8 lg:-right-10 scale-120 lg:scale-180 border-3 border-secondary bg-tertiary",
      arrow: "text-white"
    }
  };

  const currentVariant = variantStyles[variant] || variantStyles['case-study'];

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${currentVariant.button} ${className}`}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
    >
      <span>{children}</span>
      {variant !== 'nav' && 
      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${currentVariant.circle}`}>
        <motion.div variants={arrowVariants}>
          <ArrowUpRight className={`h-6 w-6 ${currentVariant.arrow}`} strokeWidth={2.5} />
        </motion.div>
      </div>
      }
    </motion.button>
  );
};

export default Button;