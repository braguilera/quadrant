import React from 'react';
import { motion } from "framer-motion";
import imagen_example from '../assets/aboutUs/imagen_example.png';
import aboutUs_arrow from '../assets/aboutUs/aboutUs_arrow.svg';

import CardAboutUs from '../components/aboutUs/CardAboutUs';
import { Truck, Bug, SquareTerminal } from 'lucide-react'; 

const AboutUs = () => {

  const statsData = [
    {
      number: "+30",
      title: "Años de Logística",
      description: "Ofreciendo soluciones adaptadas a las necesidades específicas de cada cliente.",
      Icon: Truck,
    },
    {
      number: "+20",
      title: "Años de Software",
      description: "Entregando productos de calidad excepcional que satisfacen las necesidades más exigentes.",
      Icon: Bug,
    },
    {
      number: "+100",
      title: "Proyectos Finalizados",
      description: "Abordando una amplia variedad de desafíos y desarrollando soluciones innovadoras.",
      Icon: SquareTerminal,
    }
  ];

  return (
    <section id='nosotros' className="relative max-w-7xl mx-auto px-6 bg-accent py-12">

        <div className="absolute inset-0 z-0 pointer-events-none">
            <img
                src={aboutUs_arrow} 
                alt="Vector decorativo de fondo" 
                className="absolute bottom-0 left-0 w-3/4" 
            />
        </div>

      <article>
        <motion.h2
          className="pt-5 text-3xl lg:text-4xl font-display font-bold text-gray-600/90 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre
          <span className='text-primary bg-secondary py-1 px-3 ml-2 rounded-xl'>
            Nosotros
          </span>
        </motion.h2>
        <motion.p
            className='text-gray-600/70 mb-10 text-base'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
          En Quadrant, nos apasiona la excelencia en todo lo que hacemos. Nos especializamos en la adaptación de los servicios y tecnologias a las diferentes necesidades de los clientes.
          Desde nuestros comienzos, nos hemos dedicado a ofrecer soluciones innovadoras y servicios de alta calidad que agregan valor a nuestros clientes y marcan una diferencia en el mundo que nos rodea.
        </motion.p>
        
        <img
          src={imagen_example}
          alt="image_example"
          className='mb-10 rounded-lg shadow-lg'
        />
      </article>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <CardAboutUs 
            key={index}
            number={stat.number}
            title={stat.title}
            description={stat.description}
            Icon={stat.Icon}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutUs;