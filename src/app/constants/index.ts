import { RiTeamFill } from "react-icons/ri";
import { FaCamera } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

interface ChooseUs {
  id: number,
  icon: React.ElementType,
  title: string,
  description: string
}

interface productPreview {
  id: number,
  img: string,
  folder: string,
  title: string,
  description: string,
  price: number
  tags: string[]
}

export const chooseUs: ChooseUs[] = [
  {
    id: 1,
    icon: IoTime,
    title: "Time",
    description: "We guarantee punctual, seamless service to keep your event running smoothly backed by a full refund if we're ever late."
  },
  {
    id: 2,
    icon: FaCamera,
    title: "Quality",
    description: "We provide high quality gear to ensure every photo is captured with exceptional clarity, and detail so your images always look their best."
  },
  {
    id: 3,
    icon: RiTeamFill,
    title: "Team",
    description: "Our skilled team ensures a seamless experience with high quality results, professionalism, and on time performance."
  },
  {
    id: 4,
    icon: FaGear,
    title: "Customize",
    description: "We offer full customization, from branding to specific event needs, ensuring a personalized experience available at an additional cost."
  },
];

export const ProductPrev: productPreview[] = [
  {
    id: 1,
    img: "photobox1.jpg",
    folder: "photobox",
    title: "Photobox",
    description: "Self service photobox is the best choice for easy and quick photo with zero distraction",
    price: 3400000,
    tags: ['DSLR Camera', '21" Touch Screen Monitor', 'Hyper Speed Photo Printer', 'Photo Sharing', '2 Person In Charge',]
  },
  {
    id: 2,
    img: "photobox2.jpg",
    folder: "photobox",
    title: "Matrix Photobooth",
    description: "12 Camera capturing at the same time create matrix type effect video suitable for indoor events",
    price: 1300000,
    tags: ['12 DSLR Camera', '32" Screen Monitor', 'Video Sharing Station', '2 Lighting & Softbox', 'Photo Props', '3 Person In Charge',]
  },
  {
    id: 3,
    img: "photobox3.jpg",
    folder: "photobox",
    title: "Photobooth",
    description: "The most common choice because we have so many variant that can match your theme and suitable for any types of events",
    price: 1300000,
    tags: ['DSLR Camera', 'Live View Screen', 'Hyper Speed Photo Printer', 'Photo Sharing', 'Photo Props', 'Photo Frames', '2 Person In Charge',]
  },
]