import React, { useState } from 'react'
import Button from '../ui/Button'
import { Linkedin, MoveUpRight } from 'lucide-react'
import NavLinks from '../ui/NavLinks'
import ContactFormModal from '../components/ContactFormModal'

const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <>
    <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    <section className='relative max-w-7xl mx-auto overflow-hidden'>
      <article
        className=' p-6'
      >
        <h2
          className='text-5xl font-bold mb-4 text-gray-600/90'
        >
          ¿Listo para 
          <span className='inline-block mt-3 mr-1 text-primary bg-secondary px-3 py-1 rounded-xl'>
            transformar
          </span> 
          tu logística?
        </h2>
        <aside
          className='flex gap-4'
        >
          <p
            className='text-gray-600/70 '
          >
            Nuestro equipo está listo para analizar tus desafíos. Agenda una reunión gratuita y descubre el potencial de nuestras soluciones. 
          </p>
          <Button onClick={() => setIsFormOpen(true)}>
            <MoveUpRight className="w-16 h-16" />
          </Button>
        </aside>
      </article>
      
      <article
        className='flex flex-col justify-between items-center gap-4 text-gray-600 p-2 mt-4 bg-accent'
      >
        <p>COPYRIGHT © Quadrant, 2025</p>
        <NavLinks
          variant='gray'
        />
        <a
          href="https://www.linkedin.com/company/quadrantsaas"
          target='_blank'
        >
          <Linkedin className='hover:scale-105 hover:text-primary'></Linkedin>

        </a>
      </article>
    </section>
    </>
  )
}

export default Footer