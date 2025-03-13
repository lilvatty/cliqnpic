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
  img: string[],
  folder: string,
  title: string,
  description: string,
  price: number
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
    img: ["photobox1.jpg", "photobox2.jpg", "photobox3.jpg"],
    folder: "photobox",
    title: "Photobox",
    description: "Self service photobox is the best choice for quick photo with privacy",
    price: 1300000
  },
  {
    id: 2,
    img: ["photobox.png", "photo-box.jpg", "photobox.png"],
    folder: "photobox",
    title: "180 photobooth",
    description: "this is 180 photobooth to asdlfkj h2t asdf asdf asdfalksjeiuf asdfasdl;fkjas asdlfkj  hasdfj adlskfj liadhf ",
    price: 1300000
  },
  {
    id: 3,
    img: ["photobox1.jpg", "photobox2.jpg", "photobox3.jpg"],
    folder: "photobox",
    title: "photobox",
    description: "this is photobox to asdlfkj h2t asdf asdf asdfalksjeiuf asdf",
    price: 1300000
  },
]