import React from 'react'
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 overflow-hidden bg-accent"> 
      <article>
        <motion.h2
          className="pt-5 text-3xl lg:text-4xl font-display font-bold text-gray-600/90 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre
          <span
              className='text-primary bg-secondary py-1 px-3 ml-2 rounded-xl'
          >
              Nosotros
          </span>
        </motion.h2>
        <motion.p
            className='text-gray-600/70 mb-10 text-lg'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
          En Quadrant, nos apasiona la excelencia en todo lo que hacemos. Nos especializamos en la adaptación de los servicios y tecnologias a las diferentes necesidades de los clientes.
          Desde nuestros comienzos, nos hemos dedicado a ofrecer soluciones innovadoras y servicios de alta calidad que agregan valor a nuestros clientes y marcan una diferencia en el mundo que nos rodea.
        </motion.p>
        
      </article>
    </section>
  )
}

export default AboutUs
