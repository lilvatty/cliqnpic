import ChooseUs from "./components/chooseUs";
import Hero from "./components/hero";
import ProductPreview from "./components/productPreview";

export const metadata = {
  title: "Cliqnpic | Home"
} 

export default function Home() {
  return (
    <main
    className='w-full flex flex-col bg-primary-black font-poppins mt-16'>
      
      <section
      className='flex items-center justify-center'>
        <Hero/>
      </section>

      <section 
      className='bg-primary-white'>
        <ChooseUs/>
      </section>

      <section>
        <ProductPreview/>
      </section> 
        
    </main>
  );
}
