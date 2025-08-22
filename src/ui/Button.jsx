import React from 'react';
import { motion } from 'framer-motion';

// El componente recibe 'onClick', el texto ('children') y la variante de estilo
const Button = ({ onClick, children, variant = 'primary', className = '' }) => {
  
  // Definimos los estilos para cada variante
  const baseStyles = "px-6 py-3 rounded-full font-display font-bold transition-all duration-300 transform hover:-translate-y-0.5";

  const variantStyles = {
    primary: "bg-secondary text-primary hover:bg-white shadow-lg", // Botón verde sólido
    outline: "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary", // Botón con borde verde
    blue: "bg-primary text-white hover:bg-accent", // Botón azul sólido
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;