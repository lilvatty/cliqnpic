import Reveal from '../animation/reveal'
import RevealText from '../animation/revealText'
import { chooseUs } from '../constants/index'

export default function ChooseUs(){
  
  return(
    <div
    className='flex flex-col w-full items-center my-30'>
      <div 
      className='flex flex-col items-center'>
        <RevealText>
          <h2 className='text-primary-black font-inter font-bold text-4xl lg:text-5xl mb-3'>Our goals</h2>
        </RevealText>
        <RevealText>
          <h3 className='text-lg lg:text-xl font-poppins text-secondary-black text-center w-[27rem] leading-relaxed'>Our mission is to make your event better through our services</h3>
        </RevealText>
      </div>
      <div
      className="mt-10 grid grid-cols-1 lg:mt-20 lg:grid-cols-2 gap-10 text-primary-black place-content-center place-items-center">
        {chooseUs.map(({id, icon: Icon, title, description}) => (
          <Reveal key={id}>
            <div
            className="max-w-[27rem] bg-primary-black flex flex-col p-8 shadow-md rounded-md">
              <RevealText>
                <div className='flex items-center gap-4 mb-6'>
                  <div className="w-fit rounded-sm p-2 bg-primary-white text-primary-orange">
                    <Icon className="text-4xl" />
                  </div>
                  <h3 className='font-inter font-semibold text-primary-white text-2xl'>{title}</h3>
                </div>
              </RevealText>
              <RevealText>
                <p className='font-light text-lg text-secondary-white leading-relaxed'>{description}</p>
              </RevealText>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}