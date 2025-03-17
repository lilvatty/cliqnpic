"use client"
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useRef, useState } from "react"
import { ProductPrev } from "../constants/index"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import RevealText from "../animation/revealText";
import Reveal from "../animation/reveal";


export default function ProductPreview(){

  const [isDetail, setIsDetail] = useState<boolean>(false)
  
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  
  return(
    <div
    className="my-30 flex text-primary-white flex-col items-center justify-center">
      <div 
      className='flex flex-col items-center'>
        <RevealText>
          <h2 className='text-primary-white font-inter font-bold text-4xl lg:text-5xl mb-3'>Our product</h2>
        </RevealText>
        <RevealText>
          <h3 className='text-lg lg:text-xl font-poppins text-secondary-white text-center w-[27rem] leading-relaxed'>Explore our premium photobooth products perfect for any event or celebration</h3>
        </RevealText>
      </div>
      
      <Reveal>
        <div
      className="m-20">
        <Carousel
          plugins={[plugin.current]}
          className="max-w-[50rem]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent
          className="w-[24rem] md:w-fit">
            {ProductPrev.map(({id, title, img, folder, description, price, tags}) => (
              <CarouselItem key={id}>
                <div>
                  <Card className="p-0 border-0">
                    <CardContent className={`
                    ${isDetail ? "mb-0" : "mb-10"}
                    p-0 grid grid-rows-1 
                    md:grid-cols-2 md:m-0 md:p-0`}>
                      <Image
                      className="
                      object-cover w-full h-[30rem] rounded-t-xl
                      md:min-h-full md:rounded-l-xl md:rounded-t-none
                      lg:h-[30rem]"
                      src={`/${folder}/${img}`}
                      width={500}
                      height={500}
                      alt={img}
                      />
                      <div className="relative p-10 flex flex-col gap-3">
                        <RevealText>
                          <h2
                          className="
                          font-bold font-inter text-2xl
                          md:text-3xl">
                            {title}
                          </h2>
                        </RevealText>
                        <RevealText>
                        <p className="
                        text-secondary-black 
                        md:text-lg">
                          {description}
                        </p>
                        </RevealText>

                        <div className={`
                          ${isDetail 
                          ? "flex flex-col gap-6 md:gap-0 md:grow"
                          : "hidden"
                          }
                          md:flex md:flex-col md:gap-0 md:grow`
                        }>
                          <div className="grow">
                            <RevealText>
                              <span className="
                                text-primary-orange text-sm font-inter">
                                Package include :
                              </span>
                            </RevealText>
                            <div
                            className="flex flex-wrap gap-2">
                              {tags.map((item, index) => (
                                <RevealText
                                key={index}>
                                  <div
                                  className="border border-primary-orange">
                                    <span className="px-1.5 py-1 rounded-xs text-xs font-semibold text-primary-black">
                                      {item}
                                    </span>
                                  </div>
                                </RevealText>
                              ))}
                            </div>
                          </div>
                          <div className="">
                            <RevealText>
                              <span className="
                              text-primary-orange text-sm font-inter">
                                Start from :
                              </span>
                            </RevealText>
                            <RevealText>
                              <p className="
                              font-bold">
                                IDR {price.toLocaleString('id-ID')}
                              </p>
                            </RevealText>
                          </div>
                        </div>

                        <button
                        className={`
                        ${isDetail ? 'bottom-11 right-10' : 'bottom-0'}
                        absolute flex items-center gap-1 text-sm font-inter font-light text-secondary-white cursor-pointer
                        md:hidden`}
                        onClick={() => setIsDetail(!isDetail)}
                        >
                          <span className="text-primary-orange">{!isDetail && <FaArrowDown size={10}/>}</span>
                          {isDetail ? "Hide Details" : "See Details"}
                          <span className="text-primary-orange">{isDetail && <FaArrowUp size={10}/>}</span>
                        </button>
                        
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary-orange"/>
          <CarouselNext className="text-primary-orange" />
        </Carousel>
        </div>
      </Reveal>
      
    </div>
  )
}