import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ProductProps {
  onClick?: (id: number) => void;
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string[];
    tags: string[];
  }[];
}

export default function Product({data, onClick}: ProductProps) {
  return(
    <div 
    className="flex flex-wrap items-center justify-center gap-10">
      {data.map(({id, name, description, price, image, tags}) => (
        <div
        onClick={() => onClick?.(id)}
        className="shadow-md w-[25rem]"
        key={id}>
          
          <Carousel className="m-0 p-0">
            <CarouselContent className="m-0">
              {image.map((img, index) => (
                <CarouselItem
                className="m-0 p-0"
                key={index}>
                  <Image
                  className="object-cover w-full h-[30rem]"
                  src={img}
                  width={500}
                  height={500}
                  alt={`${name}-image.jpg`}/>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute left-48 bottom-8">
              <CarouselPrevious className=""/>
              <CarouselNext className=""/>
            </div>
          </Carousel>

          <div className="flex flex-col p-5">
            <h2 className="text-2xl font-inter font-semibold mb-2">{name}</h2>
            <p className="mb-2 text-secondary-black">{description}</p>
            <span className="text-primary-orange text-sm font-inter mb-1">Package include:</span>

            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((item, index) => (
                <div
                key={index}
                className="flex border border-primary-orange">
                  <span className="px-1.5 py-1 rounded-xs text-xs font-semibold text-primary-black">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="">
              <span className="
              text-primary-orange text-sm font-inter">
                Start from :
              </span>
              <p className="
              font-bold">
                IDR {price.toLocaleString('id-ID')}
              </p>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}