import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  
  const arrowVariants = {
    rest: { rotate: 0, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { rotate: 45, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const baseStyles = "inline-flex items-center justify-center gap-4 px-10 pl-6 py-2 rounded-xl font-bold transition-colors duration-300 cursor-pointer";

  const variantStyles = {
    'case-study': {
      button: "relative py-3 bg-white text-primary shadow-md text-xl mt-4 hover:bg-secondary hover:text-primary ",
      circle: "absolute shadow-md -right-6 scale-130 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'consulting': {
      button: "relative py-3 bg-white text-primary border border-primary shadow-md mx-auto hover:bg-primary hover:text-white",
      circle: "absolute shadow-md -right-6 scale-130 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'logifleet': {
      button: "relative py-3 bg-primary font-semibold text-white border border-primary shadow-md hover:bg-white hover:text-primary text-4xl",
      circle: "absolute shadow-md -right-10 scale-180 border-3 border-secondary bg-primary",
      arrow: "text-white"
    },
    'haxtrace': {
      button: "relative py-3 bg-tertiary font-semibold text-white hover:bg-white hover:text-tertiary text-4xl shadow-[-5px_5px_0px_theme(colors.secondary)] transition-all duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:border hover:border-tertiary",
      circle: "absolute shadow-md -right-10 scale-180 border-3 border-secondary bg-tertiary",
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

      <div className={`h-12 w-12 rounded-full flex items-center justify-center ${currentVariant.circle}`}>
        <motion.div variants={arrowVariants}>
          <ArrowUpRight className={`h-6 w-6 ${currentVariant.arrow}`} strokeWidth={2.5} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default Button;