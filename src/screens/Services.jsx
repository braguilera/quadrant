import React from 'react'
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6  z-30">
        <motion.h2
          className="pt-5 text-2xl font-bold text-gray-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros 
          <span
            className='text-primary bg-secondary py-1 px-2 ml-1 rounded-xl'
          >
            Servicios
          </span>
        </motion.h2>
      <p
        className='text-gray-500 mb-6 text-sm'
      >
        Ponemos a tu disposición un equipo de expertos listos para transformar tus desafíos logísticos en ventajas competitivas.
      </p>
    </section>
  )
}

export default Services
