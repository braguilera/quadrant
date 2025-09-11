import React from 'react';
import { motion } from 'framer-motion';

import logifleet_logo from '../../assets/products/logifleet_logo.webp';
import haxtrace_logo from '../../assets/products/haxtrace_logo.svg';
import logifleet_main from '../../assets/products/logifleet_main.webp';
import haxtrace_main from '../../assets/products/haxtrace_main.webp';
import haxtrace_second from '../../assets/products/haxtrace_second.png';
import logifleet_secondary from '../../assets/products/logifleet_secondary.png';
import arrow_logifleet from '../../assets/products/arrow_logifleet.webp';
import arrow_haxtrace from '../../assets/products/arrow_haxtrace.png';
import HighlightsProducts from './HighlightsProducts';

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
        
    };
    
    // Unificamos las variantes de haxtrace para que la imagen se comporte igual en el hover
    const haxtraceImageHoverVariants = { ...finalImageVariants, rest: { y: 250 } };


    const highlights = [{
            text: 'Ejecución ágil de pedidos y despachos con trazabilidad total.',
        }, 
        {        
            text: 'Optimización de procesos con menos intervención manual.',
        }, 
        {
            text: 'Monitoreo en tiempo real del almacén para decisiones rápidas.',   
        }, 
        {
            text: 'Inventario actualizado y alertas automáticas para evitar quiebres.',   
        }
    ]

    return (
        <section className={`flex flex-col py-4`}>
            {logifleet
                ?
                <motion.article
                    className="relative flex"
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <div className="relative w-full flex flex-col items-center">

                        <motion.article
                            className='relative text-gray-500 text-base px-10 w-full z-30 flex flex-col justify-center h-full'
                            variants={textContentVariants}
                        >
                            <motion.img
                                variants={finalImageVariants}
                                transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                                src={logifleet_main}
                                alt="LogiFleet Mobile"
                                className='px-10 z-20 w-1/2'
                            />
                            <motion.aside variants={textItemVariants}>
                                <img src={logifleet_logo} alt="LogiFleet Logo" className='w-52 mb-2 bg-secondary py-2 px-8 rounded-tr-xl' />
                                <motion.h2>
                                    Gestión integral de almacenes (WMS)
                                </motion.h2>
                                <article>
                                    <p>Control de stock</p>
                                    <p>Ordenes</p>
                                    <p>Picking/packing</p>
                                    <p>Reporting en tiempo real</p>
                                </article>
                            </motion.aside>
                            <motion.aside>
                                <h3>¿Tenés problemas como estos?</h3>
                                <ul className='list-disc list-inside mt-2' variants={textItemVariants}>
                                    <li className='mt-2'>Dificultad en el seguimiento de productos por lote.</li>
                                    <li className='mt-2'>Errores en picking y despachos.</li>
                                    <li className='mt-2'>Stock inexacto o desactualizado.</li>
                                </ul>
                            </motion.aside>

                        </motion.article>

                        <footer>
                            <motion.img
                                variants={finalImageVariants}
                                transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                                src={arrow_logifleet}
                                alt="LogiFleet Mobile"
                                className='px-10 z-20'
                            />
                            {highlights.map((highlight, index) => (
                                <HighlightsProducts key={index} index={index} highlight={highlight.text} />
                            ))}
                            <motion.a href='#@' target='_blank' rel="noopener noreferrer" variants={textItemVariants} className='text-primary text-smh font-semibold flex items-center justify-center mt-4 border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer'>
                                Llevá tu almacén al siguiente nivel
                            </motion.a>
                        </footer>
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
                            src={haxtrace_main}
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