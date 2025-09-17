import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import about_us_img from '../assets/aboutUs/about_us_img.webp';
import quadrant_logo from '../assets/aboutUs/quadrant_logo.svg';
import { ArrowRight, ChevronLeft } from 'lucide-react';

const AboutUs = () => {
  const [showValues, setShowValues] = useState(false);

  const valuesData = [
    {
      title: "Sobre Tecnología, Innovación y Producto",
      description: "Nos impulsa la pasión por crear y explorar soluciones basadas en tecnologías emergentes, anticipándonos a los desafíos de la logística. Perseguimos siempre la excelencia técnica, la robustez y la eficiencia en cada línea de código. Entendemos que la eficiencia es también nuestra contribución a un mundo más sustentable."
    },
    {
      title: "Sobre Nuestros Clientes",
      description: "Practicamos la honestidad y la transparencia. Somos claros y directos en lo que hacemos, y nos dedicamos a entender en profundidad dónde radican sus verdaderos problemas para convertirnos en socios estratégicos."
    },
    {
      title: "Sobre Nuestro Equipo",
      description: "Creemos firmemente que juntos somos imparables. Nos cuidamos, nos potenciamos y compartimos la convicción de estar construyendo algo grande. Formamos equipos colaborativos que trabajan con comunicación constante, apertura al cambio y foco en encontrar soluciones rápidas y efectivas."
    }
  ];

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeOut' } }
  };


  return (
    <section id='nosotros' className="relative p-8 pb-20 bg-white flex items-center justify-center ">
      <div className='flex flex-col min-[820px]:flex-row  items-center justify-center w-full max-w-7xl'>
        <motion.img
          src={about_us_img}
          alt="Equipo de Quadrant trabajando"
          className='block rounded-2xl lg:rounded-4xl aspect-square min-[500px]:aspect-video   min-[820px]:aspect-auto  min-[820px]:h-[70vh]  min-[820px]:w-1/3 object-cover shadow-xl'
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <article className='flex flex-col border border-t-0 min-[820px]:border-t  min-[820px]:border-l-0 p-8 rounded-4xl  min-[820px]:rounded-l-none  min-[820px]:rounded-r-4xl rounded-t-none border-primary z-10 mx-4  min-[820px]:mx-0 lg:w-2/3 lg:h-[60vh] bg-white'>
          <header className='flex items-center justify-start mb-6'>
            <motion.h2
              className="text-2xl xl:text-5xl font-bold text-gray-700"
              initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              Sobre
            </motion.h2>
            <motion.img
              src={quadrant_logo}
              alt="Logo de Quadrant"
              className='h-8 mt-2 lg:mt-0 lg:h-12 ml-4'
              initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            />
          </header>

          <div className='flex-grow flex flex-col overflow-hidden relative'>
            
            {showValues && (
              <motion.button
                layoutId="cta-title"
                onClick={() => setShowValues(false)}
                className='flex items-center gap-2 text-primary font-bold xl:text-2xl mb-4 cursor-pointer'
              >
                <ChevronLeft /> Nuestros Valores
              </motion.button>
            )}

            <AnimatePresence mode="wait">
              {!showValues ? (
                <motion.div
                  key="mainContent"
                  className='flex-grow'
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.p variants={itemVariants} className='text-sm min-[820px]:text-base xl:text-lg text-gray-600 mb-4 lg:mb-6'>
                    <span className='font-bold'>Somos una empresa de tecnología</span> enfocada en resolver problemas logísticos con plataformas robustas, escalables y ágiles. Con experiencia en sectores clave y un equipo que combina visión comercial y técnica, ayudamos a que la logística se convierta en ventaja competitiva.
                  </motion.p>
                  <motion.p variants={itemVariants} className='text-sm min-[820px]:text-base xl:text-lg text-gray-600 mb-4 lg:mb-6'>
                    <span className='font-bold text-primary'>Visión:</span> 
                    Ser facilitadores de un nuevo paradigma en logística, donde la eficiencia, la escalabilidad y la transparencia permitan a las empresas ser más ágiles, adaptativas, flexibles y sustentables. 
                  </motion.p>
                  <motion.p variants={itemVariants} className='text-sm min-[820px]:text-base xl:text-lg text-gray-600'>
                    <span className='font-bold text-primary'>Misión:</span>
                    Ayudar a las organizaciones desde la consultoría, desarrollo e integración tecnológica, en forma segura, efectiva y con visibilidad para la toma de decisiones.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="valuesContent"
                  className='flex-grow flex flex-col gap-4 overflow-y-auto'
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {valuesData.map((value) => (
                    <motion.div key={value.title} variants={itemVariants}>
                      <h4 className='font-bold text-primary text-sm lg:text-xl'>{value.title}</h4>
                      <p className='text-gray-600 text-sm lg:text-base'>{value.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {!showValues && (
              <motion.button
                layoutId="cta-title"
                onClick={() => setShowValues(true)}
                className='flex items-center gap-2 text-primary font-bold lg:text-lg mt-auto pt-4 cursor-pointer'
                whileHover={{ gap: '12px' }}
              >
                Conocé nuestros valores <ArrowRight />
              </motion.button>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default AboutUs;