import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import logifleet_logo from '../../assets/products/logifleet_logo.webp';
import haxtrace_logo from '../../assets/products/haxtrace_logo.webp';
import logifleet_main from '../../assets/products/logifleet_main.webp';
import haxtrace_main from '../../assets/products/haxtrace_main.webp';
import haxtrace_second from '../../assets/products/haxtrace_second.webp';
import logifleet_secondary from '../../assets/products/logifleet_secondary.webp';
import arrow_logifleet from '../../assets/products/arrow_logifleet.webp';
import arrow_haxtrace from '../../assets/products/arrow_haxtrace.webp';
import HighlightsProducts from './HighlightsProducts';
import quadrant_logo from '../../assets/products/quadrant_logo.svg'
import Button from '../../ui/Button'


const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const CardProductComputer = ({ logifleet = false }) => {

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
        <section className={`flex flex-col`}>
            {logifleet
                ?
            <article
                className="relative flex flex-col"
            >
                <motion.div
                    className='relative text-gray-500 text-base px-2 lg:px-10 z-30 flex flex-col lg:flex-row w-full'
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
                        className='z-20 lg:h-[600px] hidden lg:block w-1/2 lg:w-fit'
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                        }}
                    />
                    <motion.aside 
                        className='flex flex-col gap-4 lg:mt-30 relative justify-center'
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.img 
                            src={logifleet_logo} 
                            alt="LogiFleet Logo" 
                            className='w-72 lg:w-92 mb-2 bg-secondary py-4 px-8 pl-20 rounded-tr-xl absolute top-0 -left-15' 
                            variants={textItemVariants}
                        />
                        <aside
                            className='flex  mt-20 lg:mt-0 items-center justify-center'
                        >
                            <motion.img
                                src={logifleet_main}
                                alt="LogiFleet Mobile"
                                className='z-20 lg:h-[600px] block lg:hidden w-1/2 min-[500px]:w-1/3 lg:w-fit'
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
                                }}
                            />
                            <motion.h2 className='text-3xl font-Hackman min-[500px]:text-4xl min-[800px]:text-5xl min-[500px]:w-80 w-52 lg:text-6xl lg:w-2xl font-bold ml-8' variants={textItemVariants}>
                                Gestión integral de almacenes (WMS)
                            </motion.h2>
                        </aside>
                        <motion.div
                            className='text-sm mx-auto lg:text-lg font-Gotham lg:ml-8 flex flex-wrap gap-2 lg:gap-4 font-semibold'
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {tags.map((tag, index) => (
                                <motion.p key={index} className='bg-secondary font-Gotham px-3 rounded-lg border border-gray-400 w-fit' variants={textItemVariants}>
                                    {tag.text}
                                </motion.p>
                            ))}
                        </motion.div>
                        <motion.aside
                            className='relative mx-4 my-4 lg:mx-0 lg:absolute lg:-bottom-24 w-auto min-[500px]:w-96 min-[500px]:mx-auto lg:ml-10 lg:right-1/4 xl:right-0 border border-red-800 px-4 lg:px-8 py-4 rounded-xl text-red-800 bg-white shadow-lg'
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
                            <h3 className='lg:text-xl font-Hackman font-bold text-center'>¿Tenés problemas como estos?</h3>
                            <ul className='mt-2 space-y-2'>
                                <li className='flex items-start gap-2 text-xs lg:text-base'><AlertCircle className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Dificultad en el seguimiento de productos por lote.</span></li>
                                <li className='flex items-start gap-2 text-xs lg:text-base'><AlertCircle className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Errores en picking y despachos.</span></li>
                                <li className='flex items-start gap-2 text-xs lg:text-base'><AlertCircle className="h-4 w-4 lg:h-5 lg:w-5 mt-0.5 flex-shrink-0 text-red-700" /><span>Stock inexacto o desactualizado.</span></li>
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
                        className='w-3/4 lg:w-1/2 z-0'
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
                    className='w-full relative h-24 min-[450px]:h-40 min-[650px]:h-20 min-[500px]:h-52 bg-secondary mt-60 lg:my-20 flex items-center'
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
                        className='absolute w-3/4 min-[650px]:w-2/4 lg:w-2/4 bottom-4 min-[650px]:bottom-2 lg:bottom-10 right-12 lg:right-0 z-20'
                    />
                    <Button
                        variant='logifleet'
                        className='absolute -top-52 min-[450px]:-top-56 min-[500px]:-top-64  min-[650px]:-top-56 lg:-top-8 left-10 lg:left-20'
                    >
                        <a
                            href='#@'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Llevá tu almacén al siguiente nivel
                        </a>
                        
                    </Button>
                </motion.aside>
            </article>
                :
            <article
                className="relative flex flex-col"
            >
                <motion.img 
                    src={haxtrace_logo} 
                    alt="LogiFleet Logo" 
                    className='w-60 block lg:hidden lg:w-92 h-fit mb-2 pl-10 lg:pl-20 p-4 bg-tertiary rounded-tr-xl' 
                    variants={textItemVariants}
                />
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
                        className='w-60 lg:w-92 h-fit hidden lg:block absolute mb-2 pl-10 lg:pl-20 p-4 bg-tertiary rounded-tr-xl' 
                        variants={textItemVariants}
                    />
                    <motion.img
                        src={haxtrace_main}
                        alt="LogiFleet Mobile"
                        className='z-20 w-1/2 xl:pl-20 lg:h-[400px] xl:h-[600px] mt-20 lg:w-fit'
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
                        <motion.h2 className='font-Hackman text-2xl xl:text-7xl min-[500px]:text-3xl min-[650px]:text-4xl md:text-5xl min-[650px]:w-80 md:w-full  lg:text-6xl w-44 lg:w-xl font-bold ' variants={textItemVariants}>
                            Trazabilidad 
                            <span
                                className='text-tertiary pl-1 lg:pl-3'
                            >
                                de mercadería en tiempo real
                            </span>
                        </motion.h2>
                        <motion.aside
                            className='hidden lg:block absolute bottom-0 w-md left-0 lg:left-30 border border-red-800 px-8 py-4 rounded-xl text-red-800 bg-white shadow-lg'
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
                            <h3 className='font-Hackman text-xl xl:text-2xl font-bold text-center'>¿Tenés problemas como estos?</h3>
                            <ul className='mt-2 space-y-2'>
                                <li className='flex items-start text-sm xl:text-base gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" />Gestión ineficiente de transporte, con altos costos y demoras.</li>
                                <li className='flex items-start text-sm xl:text-base gap-2'><AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-700" />Falta de trazabilidad de incidentes</li>
                            </ul>
                        </motion.aside>
                    </motion.aside>
                </motion.div>
                <motion.aside
                    className='block lg:hidden my-4 relative w-fit mx-auto border border-red-800 px-6 py-4 rounded-xl text-red-800 bg-white shadow-lg'
                    variants={{
                        hidden: { opacity: 0, scale: 0.7 },
                        visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.5, ease: 'easeOut' } }
                    }}
                >
                    <div className='flex justify-center absolute -top-4 left-1/2 -translate-x-1/2'>
                        <div className=' text-white rounded-full'>
                            <AlertCircle className='h-5 w-5 bg-red-800 rounded-full' strokeWidth={2.5} />
                        </div>
                    </div>
                    <h3 className='text-base font-bold text-center'>¿Tenés problemas como estos?</h3>
                    <ul className='mt-2 space-y-2'>
                        <li className='flex items-start gap-2 text-xs'><AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-700" />Gestión ineficiente de transporte, con altos costos y demoras.</li>
                        <li className='flex items-start gap-2 text-xs'><AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-700" />Falta de trazabilidad de incidentes</li>
                    </ul>
                </motion.aside>

                <motion.footer 
                    className='flex flex-col h-[550px] mb-32 lg:mb-0 lg:h-[700px] relative items-start gap-8 pt-28 min-[540px]:pt-40 min-[750px]:pt-52'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                >
                    <motion.img
                        src={arrow_haxtrace}
                        alt="Flecha decorativa"
                        className='w-3/4 lg:w-1/2 z-0 absolute right-0 lg:top-10 top-0'
                        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }}}}
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
                        className='absolute -top-8 min-[500px]:-top-20 min-[750px]:-top-0 min-[750px]:left-32 left-1/4 lg:left-1/6'
                    >
                        <a
                            href='#@'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Ver más
                        </a>
                    </Button>
                    <img
                        src={haxtrace_second}
                        alt='Computadora con el programa de Logifleet'
                        className='absolute w-3/4 min-[620px]:w-3/5 min-[680px]:right-0 min-[680px]:translate-x-0 min-[850px]:-bottom-60 -bottom-56 block lg:hidden right-1/2 translate-x-1/2 z-20'
                    />
                </motion.footer>

                <motion.aside
                    className='w-full relative h-34 bg-tertiary mt-20 flex gap-6 px-4 lg:pl-10 items-center'
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
                        className='h-1/2 lg:h-11/12'
                    />
                    <p
                        className='text-white w-xl text-xs min-[850px]:text-sm lg:text-base'
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
                        className='absolute w-1/2 hidden lg:block lg:bottom-32 right-0 z-20 xl:bottom-20'
                    />

                </motion.aside>
            </article>
            }
        </section>
    );
}

export default CardProductComputer;