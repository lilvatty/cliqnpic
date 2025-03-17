"use client"
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface Props {
  children: React.ReactElement,
}

export default function RevealText({children}: Props){

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControl.start("visible")
      slideControl.start("visible")
    }
  }, [isInView])
  
  return(
    <div
    className="relative w-fit overflow-hidden"
    ref={ref}
    >
      <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{
        duration: 0.5,
        delay: 0.25
      }}
      >
        {children}
      </motion.div>
      <motion.div
      className='absolute bg-primary-orange top-1 bottom-1 left-0 right-0 z-20'
      variants={{
        hidden: {left: 0},
        visible: {left: "100%"}
      }}
      initial="hidden"
      animate={slideControl}
      transition={{
        duration: 0.5,
        ease: "easeIn"
      }}
      />
    </div>
  )
}