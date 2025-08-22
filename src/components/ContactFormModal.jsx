import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ContactFormModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative"
            initial={{ y: 50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
            
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Hablemos de tu Proyecto</h2>
            <p className="text-gray-600 mb-6">Cuéntanos un poco sobre tus necesidades y nuestro equipo explorará contigo la mejor solución para tu empresa.</p>
            
            {/* Aquí irían los campos de tu formulario */}
            <form className="space-y-4">
              <input type="text" placeholder="Nombre y Apellido" className="w-full p-3 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Email de Trabajo" className="w-full p-3 border border-gray-300 rounded-lg" />
              <textarea placeholder="Tu consulta o desafío..." className="w-full p-3 border border-gray-300 rounded-lg h-32"></textarea>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-bold">Enviar Consulta</button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;