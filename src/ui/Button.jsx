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
      button: "bg-white text-primary border border-gray-200/80 shadow-sm",
      circle: "bg-primary",
      arrow: "text-white"
    },
    'consulting': {
      button: "relative py-3 bg-white text-primary border border-primary shadow-md mx-auto hover:bg-primary hover:text-white",
      circle: "absolute shadow-md -right-6 scale-130 border-4 border-secondary bg-primary",
      arrow: "text-white"
    },
    'logifleet': {
      button: "bg-primary text-white shadow-[0_0_15px_rgba(192,255,50,0.8)]",
      circle: "bg-secondary",
      arrow: "text-primary"
    },
    'haxtrace': {
      button: "bg-accent text-white shadow-[0_0_15px_rgba(192,255,50,0.8)]",
      circle: "bg-secondary",
      arrow: "text-accent"
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