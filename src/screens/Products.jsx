import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveHotspot from "../components/InteractiveHotspot";
import { ArrowRight, X } from "lucide-react";
import HTmobile from "../assets/HTmobile.png";
import LFmobile from "../assets/LFmobile.png";
import arrow_first_product from "../assets/products/arrow_first_product.svg";
import arrow_second_product from "../assets/products/arrow_second_product.svg";
import CardProduct from "../components/products/CardProduct";
import CardProductComputer from "../components/products/CardProductComputer";

export default function Products() {
  return (
    <section id="productos" className=" bg-accent relative overflow-x-hidden">
      <div className="absolute -top-7 -left-20 w-[200%] z-0 xl:w-full">
        <img className="w-full" src={arrow_first_product} alt="Fondo de flecha decorativa" />
      </div>

      <article className="relative max-w-7xl mx-auto px-6 text-center z-30">
        <motion.h2
          className="pt-5 pl-6 text-2xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Productos
        </motion.h2>
        
      </article>

      <article className="relative z-30 xl:hidden">
        <CardProduct logifleet={true}/>
        <CardProduct/>
      </article>

      <article className="relative z-30 hidden xl:block">
        <CardProductComputer logifleet={true}/>
        <CardProductComputer/>
      </article>
      <div className="absolute bottom-1/4 left-1/2 w-[200%] z-0 xl:w-full">
        <img className="w-full" src={arrow_second_product} alt="Fondo de flecha decorativa" />
      </div>
    </section>
  );
}