"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isHidden, setIsHidden] = useState<boolean>(true);
  
  const handleClickOutsideIcon = (event: any) => {
    // Check if the clicked element is NOT the icon
    if (!event.target.closest(".icon-button")) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideIcon);
    return () => {
      document.removeEventListener("click", handleClickOutsideIcon);
    };
  }, []);
  
  return (
    <nav
    className="fixed flex items-center justify-between w-full top-0 left-0 py-3 bg-primary-white/30 backdrop-blur-md shadow-md z-50">
        <Image
        className=" relative -left-6 lg:static"
        src="/logo.png"
        width={200}
        height={10}
        alt="cliqnpic-logo.png" />
        <GiHamburgerMenu
        onClick={() => setIsHidden(!isHidden)}
        size={25} 
        className={`${!isHidden && "rotate-90 text-primary-black/50"} icon-button mr-6 text-primary-black cursor-pointer lg:hidden transition-all`}/>
        <ul
        className={`${isHidden ? "scale-0 -top-10 -right-12" : "flex top-16 right-0 scale-100"} absolute cursor-pointer text-center flex-col gap-5 items-center justify-center py-4 px-10 bg-primary-black/90 text-primary-white lg:gap-10 lg:static lg:flex lg:flex-row lg:bg-transparent lg:text-primary-black lg:py-0 lg:scale-100 font-poppins font-semibold transition-all`}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
            <li className="lg:hidden">REACH US</li>
        </ul>
        <button
        className="mr-16 cursor-pointer hidden lg:block">
            Reach Us!
        </button>
    </nav>
  )
}

export default Navbar