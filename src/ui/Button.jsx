import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  
  const baseStyles = "px-6 py-3 rounded-full font-display font-bold transition-all duration-300 transform cursor-pointer";

  const variantStyles = {
    primary: "bg-secondary rounded-xl text-primary hover:bg-primary hover:text-white shadow-lg cursor-pointer",
    outline: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary cursor-pointer",
    outlineNav: "bg-transparent border-2 border-white text-white hover:bg-secondary hover:text-primary cursor-pointer hover:border-secondary",
    blue: "bg-primary text-white hover:bg-accent cursor-pointer", 
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;