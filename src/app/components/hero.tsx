import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
  return(
    <div
    className="mt-14 w-full border flex flex-col items-center justify-center">
      <section 
      className="flex flex-col items-center z-10">
        <h1 className="text-5xl font-bold text-primary-black text-center mx-5 my-4">
          Your trusted photobooth services
        </h1>
        <p className="text-center font-light text-primary-black text-lg mx-5 mb-4">
          we provide high quality and modern photobooth services to make your event remarkable
        </p>
        <button className="bg-primary-black rounded-bl-lg rounded-tr-lg text-primary-white flex gap-4 items-center px-4 py-2 cursor-pointer active:bg-primary-black/80">
          <span >learn more</span>
          <MdArrowForwardIos/>
        </button>
      </section>

      <section 
      className="mt-7">
        <Image
        src="/photobox.png"
        width={350}
        height={200}
        alt="photobox.png" />
      </section>
    </div>
  )
}