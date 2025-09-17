import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Linkedin, Mail, MessageCircle } from 'lucide-react';
import NavLinks from '../ui/NavLinks';
import ContactFormModal from '../components/ContactFormModal';
import quadrant_logo from '../assets/footer/quadrant_logo.svg';
import quadrant_logo_min from '../assets/footer/quadrant_logo_min.svg';

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      <motion.footer
        id="contacto"
        className='relative mx-auto text-white bg-[#474747] overflow-x-hidden'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={quadrant_logo}
          alt="Quadrant Logo"
          className="absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-none"
        />
        <img
          src={quadrant_logo_min}
          alt="Quadrant Logo"
          className="absolute bottom-0 right-4 h-1/3 lg:h-11/12 lg:right-1/6 pointer-events-none"
        />
        <div className='max-w-7xl mx-auto px-8 py-16 z-10 relative'>
          <div className='flex flex-col lg:flex-row items-center justify-start gap-12'>
            
            <motion.div className='w-full lg:w-1/2 text-center lg:text-left' variants={itemVariants}>
              <h2 className='text-5xl lg:text-6xl font-bold mb-4'>
                Contactate con nuestro equipo
              </h2>
              <p className='text-xl text-gray-300'>
                Nuestro equipo está listo para analizar tus desafíos. Agendá una reunión y descubrí el potencial de nuestras soluciones.
              </p>
            </motion.div>
            
            <motion.div className='flex flex-col w-full lg:w-1/2 items-center justify-center gap-6' variants={itemVariants}>
              <Button 
                onClick={() => setIsFormOpen(true)}
                variant='consulting'
                className=" font-bold text-xl px-8 py-4"
              >
                Agendá una reunión
              </Button>
              <div className='flex items-center gap-6 text-gray-300'>
                <a href="mailto:web@quadrant.com.ar" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-secondary transition-colors'>
                  <Mail className="w-5 h-5" />
                  <span>Escribinos</span>
                </a>
                <a href="https://wa.me/5491161635392" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:text-secondary transition-colors'>
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className='flex flex-col md:flex-row justify-between items-center gap-6 pt-6 lg:pt-12 mt-6 lg:mt-12 border-t border-white/20'
            variants={itemVariants}
          >
            <p className='text-gray-400 text-sm'>COPYRIGHT © Quadrant, 2025</p>
            <div className='block'>
              <NavLinks variant="gray" />
            </div>
            <a href="https://www.linkedin.com/company/quadrantsaas" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn de Quadrant">
              <Linkedin className='text-gray-400 hover:scale-110 hover:text-white transition-all'></Linkedin>
            </a>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer;