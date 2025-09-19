import React, { useState, useEffect } from 'react';
import quadrantLogo from '../assets/quadrant_logo.svg';
import NavLinks from '../ui/NavLinks';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuToggle } from '../ui/MenuToggle';
import ContactFormModal from './ContactFormModal';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');

    const navItems = [
        { id: "inicio" }, { id: "productos" }, { id: "servicios" }, { id: "nosotros" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            let newActiveSection = activeSection;
            navItems.forEach(item => {
                const section = document.getElementById(item.id);
                if (section) {
                    const sectionTop = section.offsetTop - 150;
                    if (window.scrollY >= sectionTop) {
                        newActiveSection = item.id;
                    }
                }
            });
            if (activeSection !== newActiveSection) {
                setActiveSection(newActiveSection);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    const mobileMenuVariants = {
        open: { clipPath: `circle(150% at 90% 5%)`, transition: { type: "spring", stiffness: 40, restDelta: 2 } },
        closed: { clipPath: "circle(0% at 93% 5%)", transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 } }
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
        <>
            <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

            <motion.nav
                className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${isScrolled ? 'bg-black/60 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
            >
                <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
                    <a href="#inicio" aria-label="Ir a la página de inicio de Quadrant">
                        <img
                            src={quadrantLogo}
                            alt="Logo de Quadrant, ir al inicio"
                            className="h-10 cursor-pointer"
                        />
                    </a>

                    <aside className='hidden lg:flex'>
                        <NavLinks activeSection={activeSection} isScrolled={isScrolled} />
                    </aside>
                    
                    <div className={`hidden lg:flex items-center gap-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                        <Button variant='nav' onClick={() => (setIsOpen(false), setIsFormOpen(true))}>
                            Agenda una reunión
                        </Button>
                    </div>
                    
                    <motion.div
                        className='lg:hidden z-50 pt-2 text-white'
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        <MenuToggle 
                            toggle={() => setIsOpen(!isOpen)} 
                            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                        />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="mobile-menu"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed inset-0 h-screen bg-primary/95 backdrop-blur-sm lg:hidden"
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
                                    <NavLinks activeSection={activeSection} isScrolled={isScrolled} />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <Button onClick={() => (setIsOpen(false), setIsFormOpen(true))}>
                                        Agenda una reunión
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}

export default Nav;