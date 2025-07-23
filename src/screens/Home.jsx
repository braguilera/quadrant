"use client"
import InteractiveHotspot from "../components/InteractiveHotspot"
import hero2 from "../assets/hero2.png"
import { NumberTicker } from "../ui/NumberTicker"
import RotatingText from "../ui/RotatingText"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const random = (min, max) => Math.random() * (max - min) + min;

const Home = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 250 }, () => ({
      id: Math.random(),
      x: random(5, 95),
      y: random(5, 95),
      size: random(1, 3),
      opacity: random(0.5, 1),
      duration: random(15, 30),
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="w-full flex flex-col h-screen font-sans relative">
      <section
        className="relative m-4 h-full rounded-2xl overflow-hidden" 
        style={{ background: "radial-gradient(circle at 50% 125%, #746bd3, #4035e8)" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 pointer-events-none">
            {particles.map(p => (
              <motion.div
                key={p.id}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  x: [0, random(-20, 20), 0],
                  y: [0, random(-20, 20), 0],
                  opacity: [0, p.opacity, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between h-full py-20 px-6">
          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.2 } }
              }}
            >
              <div className="space-y-2 text-center w-full flex flex-col items-center">
                <motion.h1
                  className="text-5xl lg:text-6xl font-display font-black text-white leading-tight"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Tecnologías para una
                </motion.h1>
                <motion.h1
                  className="text-5xl lg:text-6xl w-full font-display font-black text-white leading-tight flex items-center gap-4 flex-wrap justify-center"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Gestión Logística
                  <RotatingText
                    texts={["Moderna.", "Eficiente.", "Flexible.", "a Medida."]}
                    mainClassName="px-3 sm:px-4 md:px-5 bg-secondary text-primary overflow-hidden py-1 sm:py-2 justify-center rounded-xl font-display font-black"
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
                  className="text-xl lg:text-2xl text-gray-200 max-w-4xl font-medium leading-relaxed"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6 }}
                >
                  Optimiza tu cadena de suministro con nuestra plataforma integral. Soluciones diseñadas para las demandas únicas de tu empresa.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6 }}
              >
                <button className="px-10 py-5 bg-secondary cursor-pointer text-primary font-display font-bold text-lg rounded-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Comenzar Ahora
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="relative w-full h-[400px] lg:h-[400px]">
                <motion.img
                  src={hero2 || "/placeholder.svg"}
                  alt="Dashboard multiplataforma con análisis avanzado"
                  className="w-full h-full object-contain" 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
                <InteractiveHotspot 
                  title="Analytics en Tiempo Real" 
                  description="Visualiza métricas clave y KPIs con dashboards interactivos." 
                  position={{ top: "25%", left: "25%" }} 
                  direction="top-left" 
                  delay={1.0} 
                />
                <InteractiveHotspot 
                  title="App Móvil Nativa" 
                  description="Accede a toda la funcionalidad desde tu dispositivo móvil." 
                  position={{ top: "60%", left: "15%" }} 
                  direction="left" 
                  delay={1.2} 
                />
                <InteractiveHotspot 
                  title="Mapas Interactivos" 
                  description="Integración completa con mapas para visualización geográfica de rutas." 
                  position={{ top: "45%", left: "80%" }} 
                  direction="bottom-right" 
                  delay={1.4} 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home