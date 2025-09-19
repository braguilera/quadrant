import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';

import RotatingText from "../ui/RotatingText";
import Q_arrow from "../assets/hero/Q_arrow.svg";
import Q_arrow_mobile from "../assets/hero/Q_2_arrow.svg";
import hero_desktop from "../assets/hero_desktop.png";
import Nav from "../components/Nav";
import Button from "../ui/Button";
import ContactFormModal from "../components/ContactFormModal";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
    <>
      <Helmet>
        {/* --- Título para la PESTAÑA DEL NAVEGADOR --- */}
        <title>Quadrant</title>
        
        {/* --- Tags para SEO y Redes Sociales --- */}
        <meta 
          name="description" 
          content="Soluciones SaaS para la gestión de almacenes (WMS) y la trazabilidad logística en Argentina, diseñadas para transformar tu operación en una ventaja competitiva." 
        />
        <link rel="canonical" href="https://www.tu-dominio-final.com/" />

        {/* --- Open Graph: Mantenemos el título largo aquí para cuando se comparta el enlace --- */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Software logístico en Argentina: gestión de almacenes y tracking" />
        <meta property="og:description" content="Soluciones SaaS para la gestión de almacenes (WMS) y la trazabilidad logística en Argentina..." />
        
        {/* --- CORRECCIÓN AQUÍ: Apuntamos a la imagen .webp en la carpeta public --- */}
        <meta property="og:image" content="https://www.tu-dominio-final.com/og-image.webp" /> 

        <meta property="og:url" content="https://www.tu-dominio-final.com/" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Software logístico en Argentina: gestión de almacenes y tracking" />
        <meta name="twitter:description" content="Soluciones SaaS para la gestión de almacenes (WMS) y la trazabilidad logística..." />

        {/* --- CORRECCIÓN AQUÍ: Apuntamos a la imagen .webp en la carpeta public --- */}
        <meta name="twitter:image" content="https://www.tu-dominio-final.com/og-image.webp" />
      </Helmet>

      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <div id="inicio" className="w-full flex flex-col h-screen font-sans relative overflow-x-clip">
        <img
          src={hero_desktop}
          alt="Fondo de oficina tecnológica"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <Nav/>

        <section
          className="relative h-full padding-y-smh py-20 min-[768px]:pl-50 pl-4 lg:pl-60 bg-black/80 flex" 
        >
          <div className="z-10 flex flex-col h-full w-4xl padding-x-smh py-14">
              <motion.div
                className="space-y-8"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.2 } }
                }}
              >
                <div className="space-y-2 w-full sm:w-full md:w-3/4 md:mx-0 flex flex-col min-[500px]:w-sm min-[500px]:mx-auto relative z-20">
                  <motion.h1
                    className="text-3xl h1-smh min-[768px]:text-4xl lg:text-5xl w-full font-display font-bold text-secondary leading-tight flex gap-4 flex-wrap"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    Software logístico en Argentina: 
                  </motion.h1>
                  <motion.h1
                    className="text-3xl h1-smh min-[768px]:text-4xl lg:text-5xl font-display text-secondary leading-tight"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    Gestión de almacenes y tracking de mercadería en tiempo real
                  </motion.h1>
                  <motion.p
                    className="lg:text-2xl min-[768px]:text-lg text-gray-200 text-smh max-w-3xl leading-relaxed"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    Soluciones SaaS para la gestión de almacenes (WMS) y la trazabilidad
                    logística en Argentina, diseñadas para transformar tu operación en una ventaja
                    competitiva.
                  </motion.p>
                </div>

                <motion.div
                  className="absolute left-0 bottom-10 z-10 h-fit min-[390px]:w-full min-[768px]:h-4/5 lg:h-4/s5" 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.img
                    className="h-full hidden min-[768px]:block pointer-events-none"
                    src={Q_arrow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    fetchPriority="high" 
                  />
                  <motion.img
                    className="w-full pointer-events-none arrow-width-xs min-[768px]:hidden"
                    src={Q_arrow_mobile}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    fetchPriority="high" 
                  />
                </motion.div>
              </motion.div>
            </div>
        </section>
      </div>
    </>
  )
}

export default Home

