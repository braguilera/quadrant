import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHotspot from "../components/InteractiveHotspot";
import { ArrowRight, X } from "lucide-react";
import HTmobile from "../assets/HTmobile.png";
import LFmobile from "../assets/LFmobile.png";
import arrow_first_product from "../assets/products/arrow_first_product.svg";
import CardProduct from "../components/products/CardProduct";

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
      { title: "Control de Inventario en Tiempo Real", 
        description: "Visibilidad completa de tu stock para una administración precisa y eficiente.", 
        position: { 
          top: "35%", 
          left: "60%" 
        }, 
        direction: "right" 
      },
      { title: "Optimización Automática de Espacio", 
        description: "Nuestros algoritmos maximizan la capacidad de tu almacén y reducen el desperdicio.", 
        position: { 
          top: "65%", 
          left: "40%" }, 
          direction: "top-left" 
        },
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
      { title: "Trazabilidad Completa del Producto", 
        description: "Sigue el ciclo de vida de tu producto, desde el origen hasta la entrega final.", 
        position: { 
          top: "20%", 
          left: "55%" 
        }, 
        direction: "left" 
      },
      { title: "Seguimiento de Flota en Vivo", 
        description: "Monitorea tu flota y el estado de los pedidos con notificaciones instantáneas.", 
        position: { 
          top: "80%", 
          left: "45%" 
        }, 
        direction: "top-right" 
      },
    ],
  },
}


export default function Products() {
  return (
    <section className=" bg-gray-50 relative">
      <div className="absolute -top-7 -left-20 w-[200%] z-0">
        <img className="w-full" src={arrow_first_product} alt="Fondo de flecha decorativa" />
      </div>

      <article className="relative max-w-7xl mx-auto px-6 text-center z-30">
        <motion.h2
          className="pt-5 pl-6 text-2xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Productos
        </motion.h2>
        
      </article>

      <article className="relative z-30">
        <CardProduct logifleet={true}/>
        <CardProduct/>
      </article>
    </section>
  );
}