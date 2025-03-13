'use client'
import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function Hero() {
  return(
    <div
    className="w-full my-30 min-h-screen items-center justify-center flex flex-col lg:flex-row xl:justify-evenly xl:w-[100rem]">
      <section
      className="flex flex-col text-center lg:text-start lg:items-start items-center max-w-[35rem] -mt-20 z-10">
        <motion.h1
        initial={{opacity:0, x: -100}}
        whileInView={{opacity:1, x: 0}}
        viewport={{margin: "-50px"}}
        transition={{duration: 0.5, ease: "easeOut"}}
         className="text-7xl xl:text-9xl font-anton text-primary-white my-4">
          YOUR TRUSTED <span className="text-primary-orange">PHOTOBOOTH</span> SERVICES
        </motion.h1>
        <motion.p
        initial={{opacity:0, x: -150}}
        whileInView={{opacity:1, x: 0}}
        viewport={{margin: "-50px"}}
        transition={{duration: 0.5, ease: "easeOut"}}
         className=" text-secondary-white font-inter text-lg max-w-[28rem] mb-4">
          we provide high quality and modern photobooth services to make your event remarkable
        </motion.p>
        <motion.button
        initial={{opacity:0, x: -200}}
        whileInView={{opacity:1, x: 0}}
        viewport={{margin: "-50px"}}
        transition={{duration: 0.5, ease: "easeOut"}}
         className="bg-primary-orange rounded-bl-lg rounded-tr-lg text-primary-white font-semibold flex gap-4 items-center px-4 py-2 cursor-pointer active:bg-primary-black/80 xl:text-lg">
          <span >learn more</span>
          <MdArrowForwardIos/>
        </motion.button>
      </section>

      <motion.section
      initial={{opacity:0, scale: 0.8}}
      whileInView={{opacity:1, scale: 1}}
      viewport={{margin: "-50px"}}
      transition={{duration: 0.5, ease: "easeOut"}}
      className="mt-7 lg:-mt-8 xl:scale-110 xl:ml-20 w-[23rem] lg:w-[27rem]">
        <Image
        src="/photobox.png"
        width={500}
        height={200}
        alt="photobox.png" />
      </motion.section>
    </div>
  )
}