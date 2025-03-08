import { chooseUs } from '../constants/index'

export default function ChooseUs(){

  const isEven = (id: number) => id % 2 === 0;  
  const bgBlack = "bg-primary-black text-primary-white";
  const bgWhite = "bg-white text-primary-black";
  
  return(
    <div
    className='flex flex-col w-full items-center border'>
      <div className='flex flex-col items-center'>
        <h2 className='text-primary-orange text-lg mb-1'>Our Goals</h2>
        <h3 className='text-2xl md:text-3xl font-semibold text-center w-[27rem]'>Our Mission is to make Your <span className='bg-primary-orange inline-block px-2 rounded-md shadow-md font-bold'>Events</span> better through our Services</h3>
      </div>
      <div
      className="w-full mt-14 flex flex-wrap gap-4 justify-center text-primary-black">
        {chooseUs.map(({id, icon: Icon, title, description}) => (
          <div
          key={id}
          className={`w-[22rem] flex flex-col px-8 py-6 shadow-lg rounded-xl ${isEven(id) ? bgBlack : bgWhite}`}>
            <div className={`w-fit rounded-full p-1.5 bg-primary-orange text-primary-white`}>
              <Icon className="text-4xl" />
            </div>
            <h3 className='mt-3 font-semibold text-2xl'>{title}</h3>
            <p className='font-light leading-relaxed'>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}