import React from 'react'
import { motion } from "framer-motion";
import CardServices from '../components/services/CardServices'; 
import services_vector from '../assets/services/services_vector.svg';

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
    <section className="relative max-w-7xl mx-auto px-6 pb-12 overflow-hidden"> 
        <div className="absolute inset-0 z-0 pointer-events-none">
            <img
                src={services_vector} 
                alt="Vector decorativo de fondo" 
                className="absolute bottom-0 left-0 w-3/4" 
            />
        </div>

        <div className="relative z-10">
            <motion.h2
                className="pt-5 text-3xl lg:text-4xl font-display font-bold text-gray-600/90 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Nuestros
                <span
                    className='text-primary bg-secondary py-1 px-3 ml-2 rounded-xl'
                >
                    Servicios
                </span>
            </motion.h2>
            <motion.p
                className='text-gray-600/70 mb-10 text-lg'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Ponemos a tu disposición un equipo de expertos listos para transformar tus desafíos logísticos en ventajas competitivas.
            </motion.p>

            <motion.article
                className='flex flex-col gap-4' 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {ourServices.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <CardServices
                        title={service.title}
                        description={service.description}
                        Icon={service.Icon} 
                        index={index}
                    />
                </motion.div>
                ))}
            </motion.article>
        </div>
    </section>
  )
}

export default Services;