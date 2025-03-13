"use client"
import { useEffect, useState } from "react"
import { ProductPrev } from "../constants/index"
import Image from "next/image"
import {motion} from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Test from "./test"


export default function ProductPreview(){

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  
  return(
    <div
    className="my-30 flex text-primary-white flex-col items-center justify-center">
      <motion.div 
      initial={{opacity:0, y: 50}}
      whileInView={{opacity:1, y: 0}}
      viewport={{margin: "-50px"}}
      transition={{duration: 0.5, ease: "easeOut"}}
      exit={{ opacity: 0, y: -50 }}
      className='flex flex-col items-center'>
        <h2 className='text-primary-white font-inter font-bold text-4xl lg:text-5xl mb-3'>Our product</h2>
        <h3 className='text-lg lg:text-xl font-poppins text-secondary-white text-center w-[27rem] leading-relaxed'>Explore our premium photobooth products perfect for any event or celebration</h3>
      </motion.div>
      <div
      className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-16 mx-10 mt-20 ">
        {ProductPrev.map(({id, img, folder, title, description, price}) => (
          <motion.div
          initial={{opacity:0, x: 100}}
          whileInView={{opacity:1, x: 0}}
          viewport={{margin: "-50px"}}
          transition={{duration: 0.5, ease: "easeOut"}}
          exit={{ opacity: 0, y: -50 }}
          key={id}
          className="relative bg-primary-white flex flex-col w-[20rem] h-[32rem] rounded-xl">
            <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}>
              <CarouselContent>
                {img.map((image, index) => (
                  <CarouselItem
                  key={index}>
                    <Image 
                    className="w-full h-[21rem] object-cover rounded-xl"
                    src={`/${folder}/${image}`}
                    width={500}
                    height={500}
                    alt={image[index]}/>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div 
            className="realtive flex flex-col h-full py-5 px-4 gap-2">
              <h3 className="text-2xl text-primary-black font-bold font-inter">{title}</h3>
              <p className="text-secondary-black ">{description}</p>
              <div className="flex flex-col w-fit">
                <span className="text-primary-orange text-sm">start from :</span>
                <span className="text-primary-black font-semibold rounded-lg ">IDR {price.toLocaleString("id-ID")}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}