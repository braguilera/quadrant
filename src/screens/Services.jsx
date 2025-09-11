import React from 'react'
import { motion } from "framer-motion";
import CardServices from '../components/services/CardServices'; 
import services_vector from '../assets/services/services_vector.svg';
import services_vector_computer from '../assets/services/services_vector_computer.svg';
import Button from '../ui/Button'
import { MessagesSquare, CodeXml, Combine, CheckCircle } from 'lucide-react';

const Services = () => {

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
    <section id='servicios' className="relative h-screen flex bg-white flex-col"> 
      <article className=" w-full px-4 flex items-end justify-end z-30">
        <motion.h2
          className="py-3 px-20 text-5xl font-bold text-white bg-primary w-fit rounded-br-3xl rounded-bl-3xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Consultoría
        </motion.h2>
        
      </article>
        <article className="relative ml-20 gap-10 flex items-center z-10">
          <img
              src={services_vector} 
              alt="Vector decorativo de fondo" 

          />
            <div className='flex flex-col max-w-4xl gap-4'>

            <motion.h2
                className=" text-7xl w-4xl pt-32 font-display font-bold text-gray-600/90 "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span
                    className='text-primary bg-secondary px-2 mr-3 rounded-xl'
                >
                  Consultoría
                </span>
                para la transformación logística
            </motion.h2>
            <motion.p
                className='text-gray-600/80 w-6xl mb-10 text-3xl'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
              Antes de implementar, escuchamos y entendemos tu operación. 
              <span
                className='font-bold px-2'
              >
                Diseñamos 
              </span>
              la hoja de ruta que 
              <span
                className='font-bold px-2'
              >
                conecta tus procesos 
              </span>
              con la tecnología adecuada para transformar tu operación.  
            </motion.p>
            </div>
        </article>
        <img
            src={services_vector_computer} 
            alt="Vector decorativo de fondo" 
            className="pointer-events-none absolute bottom-20 -left-10 w-2/3" 
        />
        <footer
          className='mt-auto mb-6 flex items-center'
        >
        <Button
          variant='consulting'
        >
          Contanos tus problemas logísticos
        </Button>
        </footer>
    </section>
  )
}

export default Services;