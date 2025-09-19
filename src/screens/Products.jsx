import { motion } from "framer-motion";
import CardProductComputer from "../components/products/CardProductComputer";

export default function Products() {
  return (
    <section id="productos" className=" bg-white relative">

      <article className=" w-full px-4 flex items-end justify-end z-30">
        <motion.h2
          className="py-3 px-10 font-Hackman lg:px-20 text-2xl lg:text-5xl font-bold text-white bg-primary w-fit rounded-br-3xl rounded-bl-3xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Productos
        </motion.h2>
        
      </article>

      <article className="flex flex-col gap-20 mt-20 relative z-30">
        <CardProductComputer logifleet={true}/>
        <CardProductComputer />
      </article>
      
    </section>
  );
}