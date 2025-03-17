import { MdArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import RevealText from "../animation/revealText";
import Reveal from "../animation/reveal";

export default function Hero() {
  return(
    <div
    className="w-full my-30 min-h-screen items-center justify-center flex flex-col lg:flex-row lg:justify-evenly xl:w-[100rem]">
      <section
      className="flex flex-col text-center lg:text-start lg:items-start items-center max-w-[35rem] -mt-20 z-10">
          <h1
          className="flex flex-col items-center lg:items-start text-7xl lg:text-8xl xl:text-9xl font-anton text-primary-white my-4">
              <RevealText>
                <span>YOUR</span>
              </RevealText>
              <RevealText>
                <span>TRUSTED</span>
              </RevealText>
            <RevealText>
              <span className="text-primary-orange">PHOTOBOOTH</span>
            </RevealText>
            <RevealText>
              <span>SERVICES</span>
            </RevealText>
          </h1>
        <RevealText>
          <p
          className=" text-secondary-white font-inter text-lg max-w-[28rem] mb-4">
            we provide high quality and modern photobooth services to make your event remarkable
          </p>
        </RevealText>
        <RevealText>
          <button
          className="bg-primary-orange rounded-bl-lg rounded-tr-lg text-primary-white font-semibold flex gap-4 items-center px-4 py-2 cursor-pointer active:bg-primary-black/80 xl:text-lg">
            <span >learn more</span>
            <MdArrowForwardIos/>
          </button>
        </RevealText>
      </section>

      <section
      className="mt-7 lg:-mt-8 xl:scale-110 xl:ml-20 w-[23rem] lg:w-[27rem]">
        <Reveal>
          <Image
          src="/photobox.png"
          width={500}
          height={200}
          alt="photobox.png" />
        </Reveal>
      </section>
    </div>
  )
}