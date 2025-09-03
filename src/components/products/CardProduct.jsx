import React from 'react'
import logifleet_logo from '../../assets/products/logifleet_logo.svg'
import haxtrace_logo from '../../assets/products/haxtrace_logo.svg'
import logifleet_mobile from '../../assets/products/logifleet_mobile.png'
import haxtrace_mobile from '../../assets/products/haxtrace_mobile.png'
import { motion } from 'framer-motion'

const CardProduct = ({logifleet=false}) => {
    return (
    <section className='flex flex-col items-center justify-center p-4 m-4 '>
        {logifleet 
        ? 
            <article className="relative">
                <motion.img
                    whileInView={{ y: 20 }}
                    initial={{ y: 60 }}
                    transition={{ duration: 0.8, delay: 0.1, bounce: 0.6, ease: 'easeInOut', type: 'spring' }}
                    viewport={{ once: true }}
                    src={logifleet_mobile}
                    alt="LogiFleet Mobile"
                    className='relative w-3/4 mx-auto z-20'
                />
                <article className='relative bg-white text-gray-500  text-sm p-6 rounded-2xl shadow-md w-full z-30'>
                <aside>
                    <img
                        src={logifleet_logo}
                        alt="LogiFleet Logo"
                        className='w-32 mb-2'
                    />
                </aside>
                <p className='mt-2 font-Gotham'>
                    Nuestra plataforma de gestión de almacenes te da 
                    <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>
                        control total
                    </span>
                    de tu operación. Optimiza tu espacio, reduce errores y gestiona tu inventario con una
                    <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>
                        visibilidad sin precedentes
                    </span>
                    para maximizar tu 
                    <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>
                        eficiencia logística.
                    </span>
                </p>

                <ul>
                    <li className='mt-2'>
                        <h4 className='font-bold'>Control Total del Inventario:</h4>
                        <p>
                            Ten visibilidad completa de tu stock en tiempo real, desde la recepción hasta el despacho.
                        </p>
                    </li>

                    <li className='mt-2'>
                        <h4 className='font-bold'>Optimización Inteligente:</h4>
                        <p>
                            Maximiza el espacio de tu almacén y reduce errores operativos con algoritmos avanzados.
                        </p>
                    </li>

                    <li className='mt-2'>
                        <h4 className='font-bold'>Gestión Flexible:</h4>
                        <p>
                            Compatible con múltiples métodos de inventario (FIFO, LIFO, FEFO) para una rotación perfecta de productos.
                        </p>
                    </li>
                </ul>

                <a
                    href='#@'
                    target='_blank'
                    className='text-primary text-smh font-semibold flex items-center justify-center mt-4 border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer'
                >
                    Conocer más sobre LogiFleet
                </a>
            </article>
            </article>
        :
            <article className="relative ">
                <motion.img
                    whileInView={{ y: 20 }}
                    initial={{ y: 60 }}
                    transition={{ duration: 0.8, delay: 0.1, bounce: 0.6, ease: 'easeInOut', type: 'spring' }}
                    viewport={{ once: true }}
                    src={haxtrace_mobile}
                    alt="HaxTrace Mobile"
                    className='relative w-3/4 mx-auto z-20'
                />
                <article className='relative bg-white text-gray-500  text-sm p-6 rounded-2xl shadow-md w-full z-30'>
                    <aside>
                        <img
                            src={haxtrace_logo}
                            alt="HaxTrace Logo"
                            className='w-32 mb-2'
                        />
                    </aside>
                    <p className='mt-2 font-Gotham'>
                        Extiende tu control más allá del almacén. Hax Trace te permite el 
                        <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>
                            seguimiento en tiempo real
                        </span>
                        de tu flota y la confirmación de entregas con una
                        <span className='font-bold text-primary bg-secondary px-1 mx-1 rounded-sm'>
                            trazabilidad de punta a punta.
                        </span>
                    </p>

                    <ul>
                        <li className='mt-2'>
                            <h4 className='font-bold'>Seguimiento de Flota en Vivo:</h4>
                            <p>
                                Monitorea la ubicación y el estado de tus vehículos con precisión y en tiempo real.
                            </p>
                        </li>

                        <li className='mt-2'>
                            <h4 className='font-bold'>Trazabilidad de Punta a Punta:</h4>
                            <p>
                                Obtén un registro completo del viaje de tus envíos, desde el origen hasta la entrega final.
                            </p>
                        </li>

                        <li className='mt-2'>
                            <h4 className='font-bold'>Confirmación Digital:</h4>
                            <p>
                                Agiliza las entregas y elimina el papeleo con confirmaciones mediante escaneo de QR y remitos electrónicos.
                            </p>
                        </li>
                    </ul>

                    <a
                        href='#@'
                        target='_blank'
                        className='text-primary text-smh font-semibold flex items-center justify-center mt-4 border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors cursor-pointer'
                    >
                        Descubre más de HaxTrace
                    </a>
                </article>
            </article>
        }
    </section>
    
)
}

export default CardProduct
