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

export default function Test(){

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
      
      <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        <CarouselContent>
            {ProductPrev.map(({id, img, folder, title, description, price}) => (
          <CarouselItem
          key={id}>
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
                <h2>{title}</h2>
                <p>{description}</p>
                <span>{price}</span>
          </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>

      
    </div>
  )
}