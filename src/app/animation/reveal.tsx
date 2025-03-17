"use client"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface Props  {
  children: React.ReactElement
}

export default function Reveal({children}: Props) {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true})
  const controls = useAnimation()

  useEffect(() => {
    if(isInView){
      controls.start('visible')
    }
  }, [isInView])
  
  return(
    <div ref={ref}>
      <motion.div
      variants={{
        hidden: {opacity: 0, x: -75},
        visible: {opacity: 1, x: 0}
      }}
      initial="hidden"
      animate={controls}
      transition={{duration: 0.5}}
      >
        {children}
      </motion.div>
    </div>
  )
}