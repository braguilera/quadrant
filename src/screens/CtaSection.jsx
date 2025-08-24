import React, { useState } from 'react';
import cta_bg from '../assets/ctaSection/cta_bg.png';
import quadrant_logo from '../assets/quadrant_logo.svg';
import cta_arrow from '../assets/ctaSection/cta_arrow.svg';
import Button from '../ui/Button'; 
import ContactFormModal from '../components/ContactFormModal'; 

const CtaSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <section className='relative h-screen w-full p-4 flex flex-col'>
          <img
            src={cta_bg} 
            alt="Fondo de sección de llamada a la acción" 
            className="absolute top-0 left-0 -z-10 h-full object-left object-cover"
          />
          <img
            src={quadrant_logo} 
            alt="Logo de Quadrant"
            className="py-4 w-40"
          />
          <img
            src={cta_arrow} 
            alt="Flecha de llamada a la acción"
            className="absolute bottom-10 left-0 w-3/4"
          />
          
          <div className="max-w-lg">
            <h2 className='text-5xl text-gray-100/90 font-bold'>
              Transforma tu Logística Hoy
            </h2>
            <p className='text-gray-300/80 mt-4 text-base'>
              Hablemos. Nuestro equipo de especialistas está listo para analizar tus desafíos y mostrarte cómo nuestras soluciones pueden potenciar tu negocio. Agenda una demostración personalizada y sin compromiso.
            </p>

            <div className="flex justify-center items-center mt-8">
              <Button onClick={() => setIsFormOpen(true)} variant="primary">
                Agendar Reunión
              </Button>
            </div>
          </div>
      </section>
    </>
  )
}

export default CtaSection;