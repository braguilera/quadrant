import RotatingText from "../ui/RotatingText"
import { motion } from "framer-motion"
import Q_arrow from "../assets/hero/Q_arrow.svg"
import hero_desktop from "../assets/hero_desktop.png"
import Nav from "../components/Nav"
import Button from "../ui/Button"
import { useState } from "react"
import ContactFormModal from "../components/ContactFormModal"

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  return (
  <>
    <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    <div id="inicio" className="w-full flex flex-col h-screen font-sans relative overflow-x-clip">
      <img
        src={hero_desktop}
        alt="Fondo de oficina tecnológica"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <Nav/>

      <section
        className="relative h-full padding-y-smh py-20 bg-black/50 flex" 
      >
        <div className="z-10 flex flex-col h-full padding-x-smh py-20 px-8 md:px-40">
          <div className="flex flex-col gap-8">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <div className="space-y-2 w-full flex flex-col">
                <motion.h1
                  className="text-3xl h1-smh lg:text-6xl font-display text-white leading-tight"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Tecnologías para una
                </motion.h1>
                <motion.h1
                  className="text-3xl h1-smh  lg:text-6xl w-full font-display font-bold text-white leading-tight flex gap-4 flex-wrap"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Gestión Logística
                  <RotatingText
                    texts={["Moderna.", "Eficiente.", "Flexible.", "a Medida."]}
                    mainClassName="px-3 sm:px-4 md:px-5 bg-secondary text-primary overflow-hidden md:py-1 justify-center rounded-xl font-display font-bold"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                  />
                </motion.h1>
                <motion.p
                  className="lg:text-2xl text-gray-200 text-smh max-w-4xl leading-relaxed"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Optimiza tu cadena de suministro con nuestra plataforma integral. Soluciones diseñadas para las demandas únicas de tu empresa.
                </motion.p>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                    <Button variant="outline" className="text-lg px-4 py-2 text-smh padding-buttom" onClick={() => setIsFormOpen(true)}>
                      Comenzar Ahora
                    </Button>
                </motion.div>
              </div>


              <motion.div
                className="absolute -left-8 md:left-0 -bottom-16 md:-bottom-40 w-[200%] lg:w-[150%] xl:w-[120%]" 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
              >
                <motion.img
                    className="w-full"
                    src={Q_arrow}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  </>
  )
}

export default Home