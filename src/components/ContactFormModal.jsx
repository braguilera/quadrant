import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import form_arrow from '../assets/form_arrow.svg';

const ContactFormModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [query, setQuery] = useState('');

  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    //https://formspree.io/f/movnzkpr

    try {
      const response = await fetch("https://formspree.io/f/movnzkpr", { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fullName, email, company, message: query })
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFullName('');
        setEmail('');
        setCompany('');
        setQuery('');
        setTimeout(() => {
          setShowSuccessPopup(false);
          onClose(); 
        }, 3000);
      } else {
        setError('Hubo un error al enviar la consulta.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor, inténtalo de nuevo.');
      console.error('Error al enviar el formulario:', err);
    } finally {
      setLoading(false);
    }
  };

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
            className="bg-white rounded-2xl p-6 pb-16 max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
            initial={{ y: 50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
            key={showSuccessPopup ? 'success' : 'form'}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img src={form_arrow} alt="" className="absolute -bottom-1/6 -left-1/4 w-full h-auto" />
            </div>

            <div className="relative z-10">
              <button 
                onClick={onClose} 
                aria-label="Cerrar formulario de contacto"
                className="absolute top-[-16px] right-[-16px] p-2 rounded-full hover:bg-gray-200"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
              
              <AnimatePresence mode="wait">
                {showSuccessPopup ? (
                  <motion.div
                    key="success"
                    className="text-center py-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="bg-primary text-white rounded-full p-3">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-2">¡Enviado con éxito!</h2>
                    <p className="text-gray-600">
                      Gracias por tu consulta. Nos pondremos en contacto a la brevedad.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h2 className="text-3xl font-display font-bold text-gray-600 mb-2 text-center">
                      Hablemos de tu <span className='bg-secondary text-primary px-4 rounded-md pb-1'>Proyecto</span>
                    </h2>
                    <p className="text-gray-600 mb-6 text-center text-sm">Cuéntanos un poco sobre tus necesidades y nuestro equipo explorará contigo la mejor solución para tu empresa.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="fullName" className="sr-only">Nombre y Apellido</label>
                        <input id="fullName" type="text" placeholder="Nombre y Apellido" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" type="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label htmlFor="company" className="sr-only">Empresa</label>
                        <input id="company" type="text" placeholder="Empresa" name="company" value={company} onChange={(e) => setCompany(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>

                      <div>
                        <label htmlFor="query" className="sr-only">Tu consulta</label>
                        <textarea id="query" placeholder="Tu consulta..." name="query" value={query} onChange={(e) => setQuery(e.target.value)} required className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                      </div>
                      
                      <button type="submit" disabled={loading} className="w-full bg-primary border border-primary text-white py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition duration-300 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
                        {loading ? 'Enviando...' : 'Enviar Consulta'}
                      </button>
                      
                      {error && <p className="text-red-500 text-center mt-2" role="alert">{error}</p>}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;
