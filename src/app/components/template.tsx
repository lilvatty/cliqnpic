'use client'

import {motion} from 'framer-motion'

export default function Template({children}: {children: React.ReactNode}) {
  return <motion.div
  initial={{opacity: 0, x: -200}}
  whileInView={{opacity: 1, x:0}}
  viewport={{once: true}}
  transition={{duration: 0.5}}>
    {children}
  </motion.div>
}