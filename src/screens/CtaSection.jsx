import React, { useState } from 'react';
import cta_bg from '../assets/ctaSection/cta_bg.png';
import quadrant_logo from '../assets/quadrant_logo.svg';
import cta_arrow from '../assets/ctaSection/cta_arrow.svg';
import cta_arrow_computer from '../assets/ctaSection/cta_arrow_computer.svg';
import Button from '../ui/Button'; 
import ContactFormModal from '../components/ContactFormModal'; 

const CtaSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <section className='relative h-screen lg:h-[500px] lg:px-10 w-full p-4 flex flex-col'>
          <img
            src={cta_bg} 
            alt="Fondo de sección de llamada a la acción" 
            className="absolute top-0 left-0 -z-10 lg:w-full h-full object-left object-cover"
          />
          <img
            src={cta_arrow} 
            alt="Flecha de llamada a la acción"
            className="absolute bottom-10 sm:bottom-20 left-0 w-3/4 sm:w-2/4 hidden-smh block lg:hidden"
          />
          <img
            src={cta_arrow_computer} 
            alt="Flecha de llamada a la acción"
            className="absolute bottom-0 left-0 w-2/4 hidden-smh hidden lg:block"
          />
          
          <div className="max-w-lg lg:max-w-md sm:flex sm:self-center sm:justify-center sm:flex-col lg:gap-2 mb-20 lg:self-end xl:gap-0 xl:mr-40">
            <img
              src={quadrant_logo} 
              alt="Logo de Quadrant"
              className="py-4 w-40"
            />
            <h2 className='text-5xl text-gray-100/90 font-bold'>
              Transforma tu Logística Hoy
            </h2>
            <p className='text-gray-300/80 mt-4 text-base '>
              Hablemos. Nuestro equipo de especialistas está listo para analizar tus desafíos y mostrarte cómo nuestras soluciones pueden potenciar tu negocio. Agenda una demostración personalizada y sin compromiso.
            </p>

            <div className="flex justify-center items-center sm:justify-start mt-8">
              <Button onClick={() => setIsFormOpen(true)} variant="outline">
                Agendar Reunión
              </Button>
            </div>
          </div>
      </section>
    </>
  )
}

export default CtaSection;