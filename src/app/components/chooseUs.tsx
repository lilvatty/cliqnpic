'use client'
import { chooseUs } from '../constants/index'
import {motion} from 'framer-motion'

export default function ChooseUs(){
  
  return(
    <div
    className='flex flex-col w-full items-center my-30'>
      <motion.div 
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      viewport={{margin: "-100px"}}
      transition={{duration: 0.5, ease: "easeOut"}}
      exit={{ opacity: 0, y: -50 }}
      className='flex flex-col items-center'>
        <h2 className='text-primary-black font-inter font-bold text-4xl lg:text-5xl mb-3'>Our goals</h2>
        <h3 className='text-lg lg:text-xl font-poppins text-secondary-black text-center w-[27rem] leading-relaxed'>Our mission is to make your event better through our services</h3>
      </motion.div>
      <div
      className="mt-10 grid grid-cols-1 lg:mt-20 lg:grid-cols-2 gap-10 text-primary-black place-content-center place-items-center">
        {chooseUs.map(({id, icon: Icon, title, description}) => (
          <motion.div
          initial={{opacity:0, x: -100}}
          whileInView={{opacity:1, x: 0}}
          viewport={{margin: "-50px"}}
          transition={{duration: 0.5, ease: "easeOut"}}
          key={id}
          className="max-w-[27rem] bg-primary-black flex flex-col p-8 shadow-md rounded-md">
            <div className='flex items-center gap-4 mb-6'>
              <div className="w-fit rounded-sm p-2 bg-primary-white text-primary-orange">
                <Icon className="text-4xl" />
              </div>
              <h3 className='font-inter font-semibold text-primary-white text-2xl'>{title}</h3>
            </div>
            <p className='font-light text-lg text-secondary-white leading-relaxed'>{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}