//Import Icons
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { IoCarSportOutline } from "react-icons/io5";


type LinksNavHeaderProps = {
  href: string
  label: string
  icon: React.ReactNode
};

 export const LinksNavHeader :LinksNavHeaderProps[] = [
  {
    href: "/",
    label: "Home",
    icon: <IoHomeOutline/>,
  },
  {
    href: "#",
    label: "About",
    icon: <BiMessageDetail/>,
  },
  {
    href: "#",
    label: "Contact",
    icon: <FiPhoneCall/>,
  },
  {
    href: "#",
    label: "Cars",
    icon: <IoCarSportOutline/>,
  },
];
