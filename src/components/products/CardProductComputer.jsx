import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import logifleet_logo from '../../assets/products/logifleet_logo.webp';
import haxtrace_logo from '../../assets/products/haxtrace_logo.webp';
import logifleet_main from '../../assets/products/logifleet_main.webp';
import haxtrace_main from '../../assets/products/haxtrace_main.webp';
import haxtrace_second from '../../assets/products/haxtrace_second.png';
import logifleet_secondary from '../../assets/products/logifleet_secondary.png';
import arrow_logifleet from '../../assets/products/arrow_logifleet.webp';
import arrow_haxtrace from '../../assets/products/arrow_haxtrace.png';
import HighlightsProducts from './HighlightsProducts';
import quadrant_logo from '../../assets/products/quadrant_logo.svg'
import Button from '../../ui/Button'

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
    
    const haxtraceImageHoverVariants = { ...finalImageVariants, rest: { y: 250 } };


    const highlightsHaxtrace = [{
            text: 'Información centralizada para decisiones rápidas.',
        }, 
        {        
            text: 'Remitos digitales con validación inteligente (QR desde el móvil).',
        }, 
        {
            text: 'Registros multimedia de incidencias (fotos, videos, audios en campo).',   
        }, 
        {
            text: 'Seguimiento en tiempo real con notificaciones y alertas.',   
        }
    ]
    
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

    const tags = [{
            text: 'Control de stock',
        }, 
        {        
            text: 'Ordenes',
        }, 
        {
            text: 'Picking/packing',   
        }, 
        {
            text: 'Reporting en tiempo real',   
        }
    ]
    return (
        <section className={`flex flex-col py-4`}>
            {logifleet
                ?
            <article
                className="relative flex flex-col"
            >
                <motion.div
                    className='relative text-gray-500 text-base px-10 z-30 flex w-full'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
                    }}
                >
                    <motion.img
                        src={logifleet_main}
                        alt="LogiFleet Mobile"
                        className='z-20 h-[600px] w-fit'
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    />
                    <motion.aside 
                        className='flex flex-col gap-4 mt-30 relative justify-center'
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.img 
                            src={logifleet_logo} 
                            alt="LogiFleet Logo" 
                            className='w-92 mb-2 bg-secondary py-4 px-8 pl-20 rounded-tr-xl absolute top-0 -left-15' 
                            variants={textItemVariants}
                        />
                        <motion.h2 className='text-6xl w-2xl font-bold ml-8' variants={textItemVariants}>
                            Gestión integral de almacenes (WMS)
                        </motion.h2>
                        <motion.div
                            className='text-lg font-Gotham ml-8 flex gap-4 font-semibold'
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {tags.map((tag, index) => (
                                <motion.p key={index} className='bg-secondary px-3 rounded-lg border border-gray-400 w-fit' variants={textItemVariants}>
                                    {tag.text}
                                </motion.p>
                            ))}
                        </motion.div>
                        <motion.aside
                            className='absolute -bottom-20 w-auto -right-40 border border-red-800 px-8 py-4 rounded-xl text-red-800 bg-white shadow-lg'
                            variants={{
                                hidden: { opacity: 0, scale: 0.7 },
                                visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' } }
                            }}
                        >
                            <div className='flex justify-center absolute -top-4 left-1/2 -translate-x-1/2'>
                                <div className=' text-white rounded-full'>
                                    <AlertCircle className='h-7 w-7 bg-red-800 rounded-full' strokeWidth={2.5} />
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center'>¿Tenés problemas como estos?</h3>
                            <ul className='mt-2 space-y-2'>
                                <li className='flex items-start gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Dificultad en el seguimiento de productos por lote.</span></li>
                                <li className='flex items-start gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Errores en picking y despachos.</span></li>
                                <li className='flex items-start gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Stock inexacto o desactualizado.</span></li>
                            </ul>
                        </motion.aside>
                    </motion.aside>
                </motion.div>

                <motion.footer 
                    className='flex flex-col items-start gap-8 pt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.img
                        src={arrow_logifleet}
                        alt="Flecha decorativa"
                        className='w-1/2 z-0'
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}}}
                    />
                    <motion.div 
                        className='relative w-full h-full'
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div key={index} variants={textItemVariants}>
                                <HighlightsProducts index={index} highlight={highlight.text} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.footer>

                <motion.aside
                    className='w-full relative h-24 bg-secondary my-20 flex items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                >
                    <img
                        src={logifleet_secondary}
                        alt='Computadora con el programa de Logifleet'
                        className='absolute bottom-10 right-10 z-20'
                    />
                    <Button
                        variant='logifleet'
                        className='absolute -top-8 left-1/6'
                    >
                        Llevá tu almacén al siguiente nivel
                    </Button>
                </motion.aside>
            </article>
                :
            <article
                className="relative flex flex-col"
            >
                <motion.div
                    className='relative text-gray-500 text-base z-30 flex w-full'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
                    }}
                >
                    <motion.img 
                        src={haxtrace_logo} 
                        alt="LogiFleet Logo" 
                        className='w-92 h-fit mb-2 pl-20 p-4 bg-tertiary rounded-tr-xl' 
                        variants={textItemVariants}
                    />
                    <motion.img
                        src={haxtrace_main}
                        alt="LogiFleet Mobile"
                        className='z-20 h-[600px] w-fit'
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    />
                    <motion.aside 
                        className='flex flex-col gap-4 relative justify-center pb-20'
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.h2 className='text-6xl w-xl font-bold text-tertiary' variants={textItemVariants}>
                            Trazabilidad de mercadería en tiempo real
                        </motion.h2>
                        <motion.aside
                            className='absolute bottom-0 w-md left-30 border border-red-800 px-8 py-4 rounded-xl text-red-800 bg-white shadow-lg'
                            variants={{
                                hidden: { opacity: 0, scale: 0.7 },
                                visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' } }
                            }}
                        >
                            <div className='flex justify-center absolute -top-4 left-1/2 -translate-x-1/2'>
                                <div className=' text-white rounded-full'>
                                    <AlertCircle className='h-7 w-7 bg-red-800 rounded-full' strokeWidth={2.5} />
                                </div>
                            </div>
                            <h3 className='text-2xl font-bold text-center'>¿Tenés problemas como estos?</h3>
                            <ul className='mt-2 space-y-2'>
                                <li className='flex items-start gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" />Gestión ineficiente de transporte, con altos costos y demoras.</li>
                                <li className='flex items-start gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" />Falta de trazabilidad de incidentes</li>
                            </ul>
                        </motion.aside>
                    </motion.aside>
                </motion.div>

                <motion.footer 
                    className='flex flex-col h-[700px] relative items-start gap-8 pt-10'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.img
                        src={arrow_haxtrace}
                        alt="Flecha decorativa"
                        className='w-1/2 z-0 absolute right-0 top-0'
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}}}
                    />
                    <motion.div 
                        className='relative w-full h-full'
                        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    >
                        {highlightsHaxtrace.map((highlight, index) => (
                            <HighlightsProducts 
                            key={index} 
                            index={index} 
                            highlight={highlight.text}
                            product="haxtrace" 
                            />
                        ))}
                    </motion.div>

                    <Button
                        variant='haxtrace'
                        className='absolute -top-8 left-1/6'
                    >
                        Ver más
                    </Button>
                </motion.footer>

                <motion.aside
                    className='w-full relative h-34 bg-tertiary my-20 flex gap-6 pl-10 items-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                    }}
                >
                    <img
                        src={quadrant_logo}
                        alt='Logo de Quadrant'
                        className='h-11/12'
                    />
                    <p
                        className='text-white w-xl'
                    >
                        Tanto  
                        <span
                            className='font-bold px-1'
                        >
                            LogiFleet 
                        </span>
                        como 
                        <span
                            className='font-bold px-1'
                        >
                        HaxTrace 
                        </span>
                        están diseñados para ser abiertos a integraciones con otros sistemas 
                        <span
                            className='font-bold px-1'
                        >
                        (WCS, ERPs, CRMs, TMS, etc.)
                        </span>
                        , facilitando la interoperabilidad con la infraestructura existente de cada cliente.
                    </p>
                    <img
                        src={haxtrace_second}
                        alt='Computadora con el programa de Logifleet'
                        className='absolute bottom-10 right-10 z-20'
                    />

                </motion.aside>
            </article>
            }
        </section>
    );
}

export default CardProductComputer;