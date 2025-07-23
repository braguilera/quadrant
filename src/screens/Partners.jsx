import Vector from '../assets/Vector.png'
import emsalog from '../assets/_logos_emsalog.jpg'
import teltonika from '../assets/_logos_teltonika.png'
import { motion } from 'motion/react'

const Partners = () => {
    return (
        <section className='flex items-center justify-center w-full h-64 relative overflow-hidden'>
            <motion.article 
                className='w-full h-64  relative flex items-center justify-center'
                initial={{y:90}}
                whileInView={{y:0}}
                viewport={{ once: true, amount: 0.5 }}
                transition={{duration:.4}}
            >
                <h1 className='z-10 font-bold text-8xl text-white'>Our Partners</h1>
                <img
                    src={Vector}
                    alt="Dashboard multiplataforma con análisis avanzado"
                    className="-rotate-90 absolute -top-14 translate-x-10 w-2/3"
                />
            </motion.article>

            <article className='w-full h-full flex items-center justify-around px-10'>
                <motion.img
                    className='h-1/2 grayscale-100 hover:grayscale-0 transition-all duration-300 cursor-pointer'
                    src={emsalog}
                    initial={{scale:.2, opacity:0}}
                    whileInView={{scale:1, opacity:1}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:.4, duration:.3}}
                />
                <motion.img
                    className='h-1/4 grayscale-100 hover:grayscale-0 transition-all duration-300 cursor-pointer'
                    src={teltonika}
                    initial={{scale:.2, opacity:0}}
                    whileInView={{scale:1, opacity:1}}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{delay:.4, duration:.3}}
                />
            </article>
        </section>
    )
}

export default Partners
