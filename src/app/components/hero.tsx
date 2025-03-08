import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
  return(
    <div
    className="w-full min-h-screen items-center justify-center flex flex-col lg:flex-row xl:justify-evenly xl:w-[100rem] border">
      <h1 className={`font-light text-xl md:${'text-white font-bold bg-black text-9xl'}`}>
        TEST
      </h1>
      <section 
      className="flex flex-col text-center lg:text-start lg:items-start items-center w-[30rem] md:w-[35rem] z-10">
        <h1 className="text-5xl font-bold text-primary-black my-4">
          Your trusted <span className="text-primary-orange">photobooth</span> services
        </h1>
        <p className="font-light text-primary-black text-lg mb-4">
          we provide high quality and modern photobooth services to make your event remarkable
        </p>
        <button className="bg-primary-black rounded-bl-lg rounded-tr-lg text-primary-white flex gap-4 items-center px-4 py-2 cursor-pointer active:bg-primary-black/80">
          <span >learn more</span>
          <MdArrowForwardIos/>
        </button>
      </section>

      <section 
      className="mt-7 xl:scale-110 xl:ml-20 w-[23rem] md:w-[27rem]">
        <Image
        src="/photobox.png"
        width={500}
        height={200}
        alt="photobox.png" />
      </section>
    </div>
  )
}