import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Productos", href: "#productos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const NavLinks = ({ variant = 'white' }) => {

  const textColorClass = variant === 'gray' ? 'text-gray-600 hover:text-primary transition-colors duration-300 lg:text-xl' : 'text-white hover:text-secondary transition-colors duration-300';

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 text-xl md:text-base"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.href}
          className={`relative font-semibold  ${textColorClass}`}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
        >
          {item.name}
          <motion.span
            className="absolute -bottom-2 left-1/2 w-2 h-2 bg-secondary rounded-full"
            style={{ x: "-50%" }}
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default NavLinks;