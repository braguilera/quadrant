import React, { useState } from 'react'
import { motion } from "framer-motion";
import CardServices from '../components/services/CardServices'; 
import services_vector from '../assets/services/services_vector.svg';
import services_vector_computer from '../assets/services/services_vector_computer.svg';
import services_vector_mobile from '../assets/services/services_vector_mobile.svg';
import Button from '../ui/Button'
import { MessagesSquare, CodeXml, Combine, CheckCircle } from 'lucide-react';
import ContactFormModal from '../components/ContactFormModal';


const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const ourServices=[
    {
      title: "Consultoría en Tecnología y Procesos",
      description: "Te guiamos con dirección experta para optimizar tus procesos y maximizar el rendimiento de tu negocio con la tecnología adecuada.",
      Icon: MessagesSquare
    },
    {
      title: "Desarrollo de Software Personalizado",
      description: "Transformamos tus ideas en soluciones digitales a medida, creando el software exacto que tu operación necesita para ser más innovadora y escalable.",
      Icon: CodeXml
    },
    {
      title: "Integración de Software",
      description: "Armonizamos todos tus sistemas y aplicaciones en una fusión fluida para maximizar la eficiencia operativa y el flujo de datos sin interrupciones.",
      Icon: Combine
    },
    {
      title: "Proyectos de IoT",
      description: "Implementamos proyectos innovadores con tecnología RFID que conectan tus dispositivos, recopilan datos valiosos y llevan tus activos al siguiente nivel.",
      Icon: CheckCircle
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='servicios' className="relative h-[450px] lg:h-auto flex bg-white flex-col"> 
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <article className=" w-full px-4 flex items-end justify-end z-30">
        <motion.h2
          className="py-3 px-10 lg:px-20 text-2xl lg:text-5xl font-bold text-white bg-primary w-fit rounded-br-3xl rounded-bl-3xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Consultoría
        </motion.h2>
        
      </article>
      <article className="relative ml-2 lg:mt-16 lg:ml-20 gap-2 lg:gap-10 flex items-start lg:items-center z-10">
        <img
            src={services_vector} 
            alt="Vector decorativo de fondo" 
            className='w-1/4 mt-4 lg:mt-0'
        />
        <div className='flex flex-col max-w-4xl gap-4'>
          <motion.h2
              className="text-xl lg:text-7xl w-60 lg:w-4xl pt-10 lg:pt-32 font-display font-bold text-gray-600/90 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
              <span
                  className='text-primary bg-secondary px-2 mr-1 lg:mr-3 rounded-md lg:rounded-xl'
              >
                Consultoría
              </span>
              para la transformación logística
          </motion.h2>
          <motion.p
              className='text-gray-600/80 w-full hidden lg:block text-sm lg:w-6xl mb-10 lg:text-3xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
          >
            Antes de implementar, escuchamos y entendemos tu operación.
            <span
              className='font-bold px-1 lg:px-2'
            >
              Diseñamos 
            </span>
            la hoja de ruta que 
            <span
              className='font-bold px-1 lg:px-2'
            >
              conecta tus procesos 
            </span>
            con la tecnología adecuada para transformar tu operación.  
          </motion.p>
          </div>
      </article>
      <motion.p
          className='text-gray-600/80 w-full block lg:hidden text-sm lg:w-6xl px-4 mb-10 lg:text-3xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
      >
        Antes de implementar, escuchamos y entendemos tu operación.
        <span
          className='font-bold px-1 lg:px-2'
        >
          Diseñamos 
        </span>
        la hoja de ruta que 
        <span
          className='font-bold px-1 lg:px-2'
        >
          conecta tus procesos 
        </span>
        con la tecnología adecuada para transformar tu operación.  
    </motion.p>
      <img
          src={services_vector_computer} 
          alt="Vector decorativo de fondo" 
          className="hidden lg:block pointer-events-none bottom-18 lg:bottom-20 -left-10 lg:w-3/4" 
      />
      <img
          src={services_vector_mobile} 
          alt="Vector decorativo de fondo" 
          className="block lg:hidden pointer-events-none absolute bottom-18 lg:bottom-20 left-0" 
      />
      <footer
        className='mt-auto lg:my-6 flex items-center justify-center'
      >
        <Button
          variant='consulting'
          onClick={() => (setIsFormOpen(true))}
        >
          Contanos tus problemas logísticos
        </Button>
      </footer>
    </section>
  )
}

export default Services;