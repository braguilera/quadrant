"use client"

import { motion } from "framer-motion"
import { Zap, QrCode, Truck, Wifi } from "lucide-react"
import HTmobile from "../assets/HTmobile.png"
import LFmobile from "../assets/LFmobile.png"


const Productv2 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
            className="text-5xl text-center font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Nuestros Productos
        </motion.h2>
        <motion.h3 
            className="text-lg text-center font-semibold text-gray-600 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Administra tus operaciones logísticas desde cualquier lugar. Ya sea que estés en movimiento, supervisando el almacén o gestionando envíos, nuestras aplicaciones se integran sin problemas en tu jornada laboral, facilitando la toma de decisiones y optimizando tu eficiencia
        </motion.h3>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-lime-400/30 to-teal-500/30 rounded-full blur-xl" />

              <div className="relative z-10 p-4 max-w-sm mx-auto">
                <img
                  src={LFmobile}
                  alt="WMS Logifleet Mobile Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-4xl font-bold text-teal-600 mb-6">WMS Logifleet</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra plataforma de gestión de almacenes te da{" "}
                <span className="font-semibold text-teal-600 bg-lime-100 px-2 py-1 rounded">control total</span> de tu
                operación. Optimiza tu espacio, reduce errores y gestiona tu inventario con una{" "}
                <span className="font-semibold text-teal-600 bg-lime-100 px-2 py-1 rounded">
                  visibilidad sin precedentes
                </span>{" "}
                para maximizar tu{" "}
                <span className="font-semibold text-teal-600 bg-lime-100 px-2 py-1 rounded">eficiencia logística</span>.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Gestión Inteligente de Almacén</h4>
                  <p className="text-gray-600">
                    Soporte para múltiples métodos de inventario (FEFO, LIFO, FIFO) para una{" "}
                    <span className="font-medium text-teal-600">rotación perfecta</span> de productos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Tecnología RFID Integrada</h4>
                  <p className="text-gray-600">
                    Seguimiento de activos <span className="font-medium text-teal-600">ultra eficiente</span> para una{" "}
                    <span className="font-medium text-teal-600">precisión máxima</span> en tu inventario.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              className="bg-gradient-to-r cursor-pointer from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Conocer más sobre Logifleet
            </motion.button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h3 className="text-4xl font-bold text-red-600 mb-6">Hax Trace</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Extiende tu control más allá del almacén. Hax Trace te permite el{" "}
                <span className="font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                  seguimiento en tiempo real
                </span>{" "}
                de tu flota y la confirmación de entregas con una{" "}
                <span className="font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                  trazabilidad de punta a punta
                </span>
                .
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Seguimiento de Flota en Vivo</h4>
                  <p className="text-gray-600">
                    Monitorea tus vehículos y el estado de los pedidos con{" "}
                    <span className="font-medium text-red-600">notificaciones instantáneas</span>.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Confirmación Digital por QR</h4>
                  <p className="text-gray-600">
                    Agiliza las entregas y elimina el papeleo con{" "}
                    <span className="font-medium text-red-600">remitos electrónicos</span> y confirmación por escaneo.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.button
              className="bg-gradient-to-r cursor-pointer from-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Descubrir el poder de HaxTrace
            </motion.button>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-orange-400/30 to-red-500/30 rounded-full blur-xl" />

              <div className="relative z-10 p-4 max-w-sm mx-auto">
                <img
                  src={HTmobile}
                  alt="Hax Trace Mobile Interface"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Productv2