import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
  return(
    <div 
    className='flex flex-col items-center justify-center h-screen lg:w-[55rem] xl:w-[65rem] lg:justify-between lg:flex-row'>
      <div
      className='flex flex-col items-center lg:items-start w-[400px] lg:w-[510px]'>
        <h1 className='font-poppins font-bold text-primary-black text-4xl mb-1 leading-tight text-center lg:text-5xl lg:text-left lg:w-[26rem] xl:text-5xl xl:w-[25rem]'>
          Capture your Moment with our Photobooth
        </h1>
        <h6 className='font-poppins text-primary-black mb-3 text-center lg:text-left lg:text-lg xl:text-xl'>
          Make your events unforgettable with fun, interactive photo experiences
        </h6>
        <button className='flex w-fit items-center cursor-pointer mb-3 font-poppins bg-primary-black text-primary-white py-2 px-4 lg:py-3 lg:px-6 xl:text-xl xl:py-3 xl:px-8 hover:rounded-xl active:bg-primary-black/80 transition-all'>
          <span>Learn more</span>
          <MdArrowForwardIos
          className='text-primary-white relative left-1.5'/>
        </button>
      </div>


      <div className='flex gap-2 h-80 w-96 lg:h-[25rem] lg:w-[30rem] xl:h-[28rem] xl:w-[32rem]'>
          <div className='flex justify-center w-[50%] overflow-hidden rounded-l-2xl'>
            <Image src="/photo-box.jpg" width={300} height={100} alt="" className='object-cover' />
          </div>
        <div className='w-[50%] gap-2 flex flex-col'>
          <div className='flex items-center w-full h-[50%] overflow-hidden rounded-tr-2xl'>
            <Image src="/photo-box.jpg" width={300} height={100} alt="" className='object-cover' />
          </div>
          <div className='flex items-center w-full h-[50%] overflow-hidden rounded-br-2xl'>
            <Image src="/photo-box.jpg" width={300} height={100} alt="" className='object-cover' />
          </div>
        </div>
      </div>
      
    </div>
  )
}