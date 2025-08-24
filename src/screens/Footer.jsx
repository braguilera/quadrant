import React from 'react'
import Button from '../ui/Button'
import { MoveUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <section className='relative max-w-7xl mx-auto p-6 pb-12 overflow-hidden'>
      <article>
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
          <Button>
            <MoveUpRight className="w-16 h-16" />
          </Button>
        </aside>
      </article>
      
      <article>
        
      </article>
    </section>
  )
}

export default Footer