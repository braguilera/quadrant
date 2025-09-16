import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Ya no necesitamos 'useEmblaCarousel' ni 'Autoplay'

import sucess_video from '../assets/success/success_video.mp4';
import video_portrait from '../assets/success/video_portrait.webp';
import Succes_img1 from '../assets/success/succes_img1.webp';
import Succes_img2 from '../assets/success/succes_img2.webp';
import Succes_img3 from '../assets/success/succes_img3.webp';
import Succes_img4 from '../assets/success/succes_img4.webp';
import Succes_img5 from '../assets/success/succes_img5.webp';
import Succes_img6 from '../assets/success/succes_img6.webp';
import Succes_img7 from '../assets/success/succes_img7.webp';
import Succes_img8 from '../assets/success/succes_img8.webp';
import Button from '../ui/Button';
import { Check } from 'lucide-react';
import ContactFormModal from '../components/ContactFormModal';


const Success = () => {
  const images = [Succes_img3, Succes_img8, Succes_img1, Succes_img5];
  const [isFormOpen, setIsFormOpen] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const leftPanelVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };
  
  const videoVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="casos-de-exito" className='lg:h-screen flex flex-col bg-white px-8 py-20'>
      <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <motion.article
        className='m-auto text-center px-2 lg:px-6 bg-primary w-full h-full rounded-b-3xl flex flex-col lg:flex-row '
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.article
          className='lg:w-1/3 relative flex flex-col gap-4 px-4 justify-center items-start'
          variants={leftPanelVariants}
        >
          <aside className='bg-secondary absolute -left-8 lg:-left-10 top-4 lg:top-1/5 text-primary px-10 lg:px-20 py-1 rounded-r-full shadow-md'>
            <p className='text-xl lg:text-4xl font-bold'>Casos de éxito</p>
            <Check className='text-secondary bg-primary p-1 lg:p-2 rounded-full absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 lg:h-10 lg:w-10' />
          </aside>
          <h2 className='text-3xl lg:text-4xl font-bold text-white pt-16 lg:pt-10'>
            EMSA Logística.
          </h2>
          <p className='text-white text-start text-sm lg:text-base'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna dui, dictum eu molestie eget, malesuada eleifend lorem. Proin molestie luctus lorem, vel mattis justo vehicula et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum purus et auctor vehicula. Vivamus nisi mauris, ultricies sit amet accumsan at, sollicitudin eu nibh. Phasellus volutpat sapien sodales, efficitur ipsum vitae, suscipit felis. Mauris ex libero, porta id ante.
          </p>
          <footer
            className='hidden lg:block'
          >
          <Button variant='case-study' onClick={() => (setIsFormOpen(true))}>
            Sé nuestro próximo caso de éxito
          </Button>
          </footer>
        </motion.article>
        
        <aside className=' lg:w-2/3 h-full flex flex-col my-8 lg:my-0 lg:p-8 gap-6'>
          <motion.div 
            className="w-full lg:h-3/4 rounded-lg lg:rounded-2xl overflow-hidden shadow-2xl"
            variants={videoVariants}
          >
            <video 
              className="w-full h-full object-cover" 
              controls 
              poster={video_portrait}
            >
              <source src={sucess_video} type="video/mp4" />
              Tu navegador no soporta el tag de video.
            </video>
          </motion.div>
          
          <motion.div 
            className="w-full"
            variants={imageContainerVariants}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {images.slice(0, 4).map((imgSrc, index) => (
                <motion.div 
                  key={index} 
                  className="relative w-full aspect-square lg:aspect-video"
                  variants={imageVariants}
                >
                  <div className='w-full h-full rounded-lg lg:rounded-xl overflow-hidden shadow-lg'>
                    <img
                      className='w-full h-full object-cover'
                      src={imgSrc}
                      alt={`Caso de éxito imagen ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <footer
            className='block lg:hidden'
          >
          <Button variant='case-study' onClick={() => (setIsFormOpen(true))}>
            Sé nuestro próximo caso de éxito
          </Button>
          </footer>
        </aside>
      </motion.article>
    </section>
  )
}

export default Success;