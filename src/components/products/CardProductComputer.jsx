import React from 'react';
import { motion } from 'framer-motion';

import logifleet_logo from '../../assets/products/logifleet_logo.svg';
import haxtrace_logo from '../../assets/products/haxtrace_logo.svg';
import logifleet_computer from '../../assets/products/logifleet_computer.png';
import haxtrace_computer from '../../assets/products/haxtrace_computer.png';

const hoverCardVariants = {
    rest: {
        height: '28rem',
        y: 0,
    },
    hover: {
        height: '38rem',
        y: '-10rem',
    }
};

const cardEntryVariants = (isLogifleet) => ({
    hidden: {
        opacity: 0,
        x: isLogifleet ? -100 : 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            damping: 15,
            when: 'beforeChildren',
        }
    }
});

const imageEntryVariants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 250, transition: { type: 'spring', bounce: 0.4, duration: .8} }
};

const textContentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const CardProductComputer = ({ logifleet = false }) => {
    const finalImageVariants = {
        ...(logifleet ? imageEntryVariants : { ...imageEntryVariants, hidden: { opacity: 0, y: 300 } }),
        hover: logifleet ? { y: 50 } : { y: 50 }
    };
    
    // Unificamos las variantes de haxtrace para que la imagen se comporte igual en el hover
    const haxtraceImageHoverVariants = { ...finalImageVariants, rest: { y: 250 } };


    return (
        <section className={`flex flex-col ${logifleet ? 'items-start' : 'items-end'} py-4 h-screen`}>
            {logifleet
                ?
                <motion.article
                    className="relative flex w-3/4 mt-32 overflow-hidden"
                    variants={{ ...hoverCardVariants, ...cardEntryVariants(true) }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="relative shadow-md rounded-br-2xl rounded-tr-2xl bg-white w-full h-[28rem] mt-auto flex items-end">
                        <motion.img
                            variants={finalImageVariants}
                            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                            src={logifleet_computer}
                            alt="LogiFleet Mobile"
                            className='px-10 z-20'
                        />
                        <motion.article
                            className='relative text-gray-500 text-base px-10 w-full z-30 flex flex-col justify-center h-full'
                            variants={textContentVariants}
                        >
                            <motion.aside variants={textItemVariants}>
                                <img src={logifleet_logo} alt="LogiFleet Logo" className='w-52 mb-2' />
                            </motion.aside>
                            <motion.p variants={textItemVariants} className='mt-2 font-Gotham'>
                                Nuestra plataforma de gestión de almacenes te da <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>control total</span> de tu operación. Optimiza tu espacio, reduce errores y gestiona tu inventario con una <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>visibilidad sin precedentes</span> para maximizar tu <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>eficiencia logística.</span>
                            </motion.p>
                            <motion.ul variants={textItemVariants}>
                                <li className='mt-2'><h4 className='font-bold'>Control Total del Inventario:</h4><p>Ten visibilidad completa de tu stock en tiempo real, desde la recepción hasta el despacho.</p></li>
                                <li className='mt-2'><h4 className='font-bold'>Optimización Inteligente:</h4><p>Maximiza el espacio de tu almacén y reduce errores operativos con algoritmos avanzados.</p></li>
                                <li className='mt-2'><h4 className='font-bold'>Gestión Flexible:</h4><p>Compatible con múltiples métodos de inventario (FIFO, LIFO, FEFO) para una rotación perfecta de productos.</p></li>
                            </motion.ul>
                            <motion.a href='#@' target='_blank' rel="noopener noreferrer" variants={textItemVariants} className='text-primary text-smh font-semibold flex items-center justify-center mt-4 border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer'>
                                Conocer más sobre LogiFleet
                            </motion.a>
                        </motion.article>
                    </div>
                </motion.article>
                :
                <motion.article
                    className="relative flex w-3/4 overflow-hidden"
                    variants={{ ...hoverCardVariants, ...cardEntryVariants(false) }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="relative shadow-md rounded-bl-2xl rounded-tl-2xl bg-white w-full h-[28rem] mt-auto flex items-end">
                        <motion.article
                            className='relative text-gray-500 text-base px-10 w-full z-30 flex flex-col justify-center h-full'
                            variants={textContentVariants}
                        >
                            <motion.aside variants={textItemVariants}>
                                <img src={haxtrace_logo} alt="HaxTrace Logo" className='w-52 mb-2' />
                            </motion.aside>
                            <motion.p variants={textItemVariants} className='mt-2 font-Gotham'>
                                Extiende tu control más allá del almacén. Hax Trace te permite el <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>seguimiento en tiempo real</span> de tu flota y la confirmación de entregas con una <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>trazabilidad de punta a punta.</span>
                            </motion.p>
                            <motion.ul variants={textItemVariants}>
                                <li className='mt-2'><h4 className='font-bold'>Seguimiento de Flota en Vivo:</h4><p>Monitorea la ubicación y el estado de tus vehículos con precisión y en tiempo real.</p></li>
                                <li className='mt-2'><h4 className='font-bold'>Trazabilidad de Punta a Punta:</h4><p>Obtén un registro completo del viaje de tus envíos, desde el origen hasta la entrega final.</p></li>
                                <li className='mt-2'><h4 className='font-bold'>Confirmación Digital:</h4><p>Agiliza las entregas y elimina el papeleo con confirmaciones mediante escaneo de QR y remitos electrónicos.</p></li>
                            </motion.ul>
                            <motion.a href='#@' target='_blank' rel="noopener noreferrer" variants={textItemVariants} className='text-primary text-smh font-semibold flex items-center justify-center mt-4 border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer'>
                                Descubre más de HaxTrace
                            </motion.a>
                        </motion.article>
                        <motion.img
                            variants={haxtraceImageHoverVariants}
                            transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                            src={haxtrace_computer}
                            alt="HaxTrace Mobile"
                            className='px-10 z-20'
                        />
                    </div>
                </motion.article>
            }
        </section>
    );
}

export default CardProductComputer;