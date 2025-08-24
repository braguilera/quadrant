import React, { useState, useEffect } from 'react';
import quadrantLogo from '../assets/quadrant_logo.svg'; 
import NavLinks from '../ui/NavLinks';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from '../ui/MenuToggle'; 

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);   

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 

    const mobileMenuVariants = {
        open: {
            clipPath: `circle(150% at 90% 5%)`,
            transition: { type: "spring", stiffness: 40, restDelta: 2 }
        },
        closed: {
            clipPath: "circle(0% at 93% 5%)",
            transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 }
        }
    }; 

    const listVariants = {
        open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
    }; 

    const itemVariants = {
        open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
        closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
    }; 

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
        >
        <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
            {/* --- CAMBIO AQUÍ: Se envuelve la imagen en un enlace --- */}
            <a href="#inicio">
                <img
                    src={quadrantLogo}
                    alt="Logo de Quadrant, ir al inicio"
                    className="h-10 cursor-pointer"
                />
            </a>
            
            <div className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                <NavLinks />
                <Button variant={isScrolled ? 'primary' : 'outline'}>
                    Agenda una reunión
                </Button>
            </div>
            
            <motion.div
                className='md:hidden z-50 pt-2 text-white'
                initial={false}
                animate={isOpen ? "open" : "closed"}
            >
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.div>
        </div>

            {/* Menú Desplegable Móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 h-screen bg-primary/95 backdrop-blur-sm md:hidden"
                    >
                        <motion.div
                            className="h-full flex flex-col items-center justify-center gap-12 text-white"
                            variants={listVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <img
                                    src={quadrantLogo}
                                    alt="Logo de Quadrant"
                                    className="h-10"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants} onClick={() => setIsOpen(false)}>
                                <NavLinks />
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Button variant='outlineNav' onClick={() => setIsOpen(false)}>
                                    Agenda una reunión
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Nav;