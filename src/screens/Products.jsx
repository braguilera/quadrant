import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHotspot from "../components/InteractiveHotspot";
import { ArrowRight, X } from "lucide-react";
import HTmobile from "../assets/HTmobile.png";
import LFmobile from "../assets/LFmobile.png";

const productsData = {
  wms: {
    id: "wms",
    name: "WMS Logifleet",
    tag: "Control y Optimización para tu Almacén",
    image: LFmobile,
    brandColors: {
        primary: "text-[#3CC6A7]",
        accent: "text-teal-500",
        bg: "bg-blue-50",
        highlight: "bg-teal-100",
        button: "bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700",
        dot: "bg-blue-500",
    },
    slogan: "Potenciamos tu eficiencia logística, llevando el control de tu almacén al siguiente nivel.",
    description: "Nuestra plataforma de gestión de almacenes te da un control absoluto. Optimiza tu espacio, reduce errores y gestiona tu inventario con una visibilidad sin precedentes, desde la recepción hasta el despacho.",
    features: ["Gestión de incidentes y riesgos para activos.", "Soporte para múltiples métodos de inventario (FEFO, LIFO, FIFO).", "Tecnología RFID integrada para seguimiento eficiente.", "Clasificación flexible de productos por familia, criticidad o vencimiento."],
    buttonText: "Conocer todo sobre Logifleet",
    hotspots: [
      { title: "Control de Inventario en Tiempo Real", description: "Visibilidad completa de tu stock para una administración precisa y eficiente.", position: { top: "35%", left: "60%" }, direction: "right" },
      { title: "Optimización Automática de Espacio", description: "Nuestros algoritmos maximizan la capacidad de tu almacén y reducen el desperdicio.", position: { top: "65%", left: "40%" }, direction: "top-right" },
    ],
  },
  hax: {
    id: "hax",
    name: "Hax Trace",
    tag: "Trazabilidad Total para tus Envíos",
    image: HTmobile,
    brandColors: {
        primary: "text-red-600",
        accent: "text-pink-500",
        bg: "bg-red-50",
        highlight: "bg-pink-100",
        button: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700",
        dot: "bg-red-500",
    },
    slogan: "La app perfecta para el seguimiento y confirmación de sus pedidos.",
    description: "Extiende tu control más allá de las puertas del almacén. Hax Trace te permite seguir tu flota, gestionar entregas, confirmar recepciones con tecnología QR y resolver incidencias al instante.",
    features: ["Generación de pedidos con detalles específicos por parte de los receptores.", "Remitos electrónicos detallados para todas las partes.", "Capacidad de video forense para una seguridad mejorada.", "Gestión centralizada de todos los pedidos y su historial."],
    buttonText: "Descubrir el poder de HaxTrace",
    hotspots: [
      { title: "Trazabilidad Completa del Producto", description: "Sigue el ciclo de vida de tu producto, desde el origen hasta la entrega final.", position: { top: "40%", left: "45%" }, direction: "left" },
      { title: "Seguimiento de Flota en Vivo", description: "Monitorea tu flota y el estado de los pedidos con notificaciones instantáneas.", position: { top: "70%", left: "65%" }, direction: "top-left" },
    ],
  },
}


export default function Products() {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const selectedProduct = selectedId ? productsData[selectedId] : null;

  return (
    <section className="py-20 bg-gray-50 min-h-[100vh]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
            className="text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Nuestros Productos
        </motion.h2>
        <motion.h3 
            className="text-lg font-semibold text-gray-600 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            Administra tus operaciones logísticas desde cualquier lugar. Ya sea que estés en movimiento, supervisando el almacén o gestionando envíos, nuestras aplicaciones se integran sin problemas en tu jornada laboral, facilitando la toma de decisiones y optimizando tu eficiencia
        </motion.h3>

        <AnimatePresence mode="wait">
          {!selectedId ? (
            <motion.div
              key="initial-grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {Object.values(productsData).map((product) => (
                <motion.div
                  key={product.id}
                  layoutId={`product-card-${product.id}`}
                  onClick={() => setSelectedId(product.id)}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  initial={{ opacity: 0, x: product.id === 'wms' ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  animate={{
                    scale: hoveredProduct && hoveredProduct !== product.id ? 0.97 : 1,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="relative cursor-pointer border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow duration-400 p-6 flex flex-col items-center"
                >
                  <motion.div layoutId={`product-image-${product.id}`} className="relative h-96">
                    <img src={product.image} alt={`${product.name} Mobile App`} className="w-full h-full object-contain"/>
                    <AnimatePresence>
                      {hoveredProduct === product.id && (
                        <>
                          {product.hotspots.map((hotspot, index) => (
                            <InteractiveHotspot key={index} {...hotspot} delay={index * 0.2} />
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <div className="text-left space-y-4 flex-grow">
                    <h3 className={`text-3xl font-display font-bold ${product.brandColors.primary} group-hover:${product.brandColors.accent} transition-colors duration-200`}>{product.name}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed line-clamp-2">{product.slogan}</p>
                    <div className="pt-4">
                      <div className={`flex items-center font-medium ${product.brandColors.primary} group-hover:${product.brandColors.accent} transition-colors duration-200`}>
                      <span>Explorar solución</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail-view"
              layoutId={`product-card-${selectedProduct.id}`}
              className="relative bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-auto"
            >
              <motion.div
                  className={`flex gap-12 ${selectedProduct.id === 'wms' ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
                >
                <motion.div layoutId={`product-image-${selectedProduct.id}`} className="w-full md:w-1/3 flex-shrink-0">
                  <img src={selectedProduct.image} alt={`${selectedProduct.name} Mobile App`} className="w-full h-auto object-contain"/>
                </motion.div>
                
                <div className="w-full md:w-2/3 text-left space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-5xl font-display font-bold ${selectedProduct.brandColors.primary} leading-tight`}>{selectedProduct.name}</h3>
                      <p className={`text-2xl ${selectedProduct.brandColors.accent} font-display font-medium mt-3 leading-relaxed`}>{selectedProduct.slogan}</p>
                    </div>
                    <motion.button
                      onClick={() => setSelectedId(null)}
                      className="p-2 rounded-full hover:bg-gray-200 transition-colors z-10 absolute top-8 right-8 cursor-pointer"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.6 } }}
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>

                  {selectedProduct.id === 'wms' ? 
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

                    :
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

                  }
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Características principales</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className={`w-2 h-2 ${selectedProduct.id === 'wms' ? 'bg-teal-500' : 'bg-red-500'} rounded-full mr-3`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                    <button
                      className={`group relative cursor-pointer mt-6 inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 font-display font-bold text-lg text-white transition-all duration-300 transform hover:-translate-y-0.5 ${selectedProduct.brandColors.button}`}
                    >
                      <span className="relative">
                        {selectedProduct.buttonText}
                      </span>
                    </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}