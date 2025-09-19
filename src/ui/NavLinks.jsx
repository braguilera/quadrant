import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Consultoria", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
];

const NavLinks = ({ activeSection, isScrolled }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 text-xl md:text-base">
            {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                const textColorClass = isScrolled 
                    ? isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    : isActive ? 'text-white' : 'text-gray-300 hover:text-white';

                return (
                    <a
                        key={item.name}
                        href={item.href}
                        className={`relative font-Hackman transition-colors duration-300 ${textColorClass}`}
                    >
                        {item.name}
                        {isActive && (
                            <motion.span
                                layoutId="underline"
                                className="absolute left-0 -bottom-1 block h-[2px] w-full bg-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            />
                        )}
                    </a>
                );
            })}
        </div>
    );
};

export default NavLinks;