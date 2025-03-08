import ChooseUs from "./components/chooseUs";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main
    className='w-full flex flex-col px-6 bg-primary-white font-poppins mt-16'>
      
      <section
      className='flex items-center justify-center'>
        <Hero/>
      </section>

      <section 
      className=''>
        <ChooseUs/>
      </section>

      <section>
      
      </section> 
        
    </main>
  );
}
