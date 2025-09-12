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
    <section id="productos" className=" bg-white relative">

      <article className=" w-full px-4 flex items-end justify-end z-30">
        <motion.h2
          className="py-3 px-20 text-5xl font-bold text-white bg-primary w-fit rounded-br-3xl rounded-bl-3xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Productos
        </motion.h2>
        
      </article>

      {/* <article className="relative z-30 xl:hidden">
        <CardProduct logifleet={true}/>
        <CardProduct/>
      </article> */}

      <article className="relative z-30 hidden xl:block">
        <CardProductComputer logifleet={true}/>
        <CardProductComputer />
      </article>
      
    </section>
  );
}