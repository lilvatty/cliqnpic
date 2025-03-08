import { IoMdTime } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";

interface ChooseUs {
  id: number,
  icon: React.ElementType,
  title: string,
  description: string
}

export const chooseUs: ChooseUs[] = [
  {
    id: 1,
    icon: IoMdTime,
    title: "On Time",
    description: "We guarantee punctual, seamless service to keep your event running smoothly backed by a full refund if we're ever late."
  },
  {
    id: 2,
    icon: IoCameraOutline,
    title: "High Quality",
    description: "We provide high quality gear to ensure every photo is captured with exceptional clarity, and detail so your images always look their best."
  },
  {
    id: 3,
    icon: RiTeamLine,
    title: "Professional Team",
    description: "Our skilled team ensures a seamless experience with high quality results, professionalism, and on time performance."
  },
  {
    id: 4,
    icon: IoMdTime,
    title: "Customisation",
    description: "We offer full customization, from branding to specific event needs, ensuring a personalized experience available at an additional cost."
  },
]