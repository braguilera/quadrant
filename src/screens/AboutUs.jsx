import React from 'react';
import { motion } from "framer-motion";
import imagen_example from '../assets/aboutUs/imagen_example.png';
import aboutUs_arrow from '../assets/aboutUs/aboutUs_arrow.svg';
import aboutUs_arrow_computer from '../assets/aboutUs/aboutUs_arrow_computer.svg';

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
    <section id='nosotros' className="relative p-8 lg:px-36 bg-accent pt-8 flex flex-col md:flex-row gap-10 items-center justify-center">
      <article className='flex flex-col items-center z-10 max-w-7xl'>
        <motion.h2
          className="pt-5 self-start text-3xl lg:text-4xl font-display font-bold text-gray-600/90 mb-4"
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
          className='mb-10 rounded-lg shadow-lg xl:w-1/2'
        />
      </article>

      <div className="relative z-0 flex flex-col items-center gap-8 pb-8">
        {statsData.map((stat, index) => (
          <CardAboutUs 
            key={index}
            number={stat.number}
            title={stat.title}
            description={stat.description}
            Icon={stat.Icon}
          />
        ))}
        
        <div className="absolute inset-0 h-full -z-10 pointer-events-none">
            <img
                src={aboutUs_arrow} 
                alt="Vector decorativo de fondo para móvil" 
                className="absolute md:hidden -bottom-20 -left-20 h-full" 
            />
            <img
                src={aboutUs_arrow_computer} 
                alt="Vector decorativo de fondo para escritorio" 
                className="hidden md:block absolute bottom-0 right-20 scale-[2.0] origin-bottom-right" 
            />
        </div>
      </div>
    </section>
  )
}

export default AboutUs;