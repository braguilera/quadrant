import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import form_arrow from '../assets/form_arrow.svg';

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <motion.div
            className="bg-white rounded-2xl p-6 pb-16 max-w-lg w-full relative overflow-hidden"
            initial={{ y: 50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src={form_arrow}
                    alt="Vector decorativo"
                    className="absolute -bottom-1/6 -left-1/4 w-full h-auto"
                />
            </div>

            <div className="relative z-10">
                <button 
                    onClick={onClose} 
                    className="absolute top-[-16px] right-[-16px] p-2 rounded-full  hover:bg-gray-200"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>
                
                <h2 
                  className="text-3xl font-display font-bold text-gray-900 mb-2 text-center"
                >
                  Hablemos de tu <span className='bg-secondary text-primary px-4 rounded-md pb-1'>Proyecto</span>
                </h2>
                <p className="text-gray-600 mb-6 text-center text-sm">Cuéntanos un poco sobre tus necesidades y nuestro equipo explorará contigo la mejor solución para tu empresa.</p>
                
                <form className="space-y-4">
                    <input type="text" placeholder="Nombre y Apellido" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <textarea placeholder="Tu consulta..." className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
                    <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-secondary hover:text-primary hover:scale-105 transition duration-300 ease-in-out cursor-pointer">Enviar Consulta</button>
                </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;