import ChooseUs from "./components/chooseUs";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main
    className='px-6 bg-primary-white font-poppins mt-16'>
      
      <section
      className='flex flex-col items-center'>
        <Hero/>
      </section>

      <section 
      className='flex flex-col items-center'>
        <ChooseUs/>
      </section>

      <section>
      
      </section> 
        
    </main>
  );
}
