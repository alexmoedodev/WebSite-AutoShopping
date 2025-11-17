//Imports React
import Link from "next/link";

//Imports Icons
import { FaCar } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

import { FaPhone } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full p-12">
      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto  gap-12 text-white">
        {/*  Social Media */}

        <div className="flex flex-col gap-4 ">
          <h1 className="flex items-center gap-2 text-2xl">
            <span className="text-blue-500">
              <FaCar />
            </span>
            Auto Shopping
          </h1>
          <p>
            Aqui você encontra os melhoras carros e os mais premios em todos os
            sentidos, qualidade , baixa kilometragem, custo beneficio e garantia
            estendida em todo o veiculo.
          </p>

          <div className="flex items-center gap-4 text-2xl">
            <Link
              href={"#"}
              aria-label="Link Redes Sociais Facebook"
              title="Facebook"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href={"#"}
              aria-label="Link Redes Sociais Instagran"
              title="Instagran"
            >
              <FaSquareInstagram />
            </Link>
            <Link href={"#"} aria-label="Link Redes Sociais X" title="X">
              <FaXTwitter />
            </Link>
            <Link
              href={"#"}
              aria-label="Link Redes Sociais Youtube"
              title="Youtube"
            >
              <IoLogoYoutube />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6 ">
          <h4 className="text-lg font-semibold">Links</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"#"} className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Nossos Carros</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Sobre-nós</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Contato</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Termos & Condições</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">Services</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={"#"}  className="hover:underline">Carros economicos</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Carros de Luxo</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">SUVs & Trucks</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Carros Eletricos</Link>
            </li>
            <li>
              <Link href={"#"}  className="hover:underline">Carros em Destaques</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">Nossos Contatos</h4>
          <div className="flex flex-col gap-2">
            <Link href={"#"} className="flex items-center gap-2 hover:underline">
              <span className="text-blue-500">
                <FaPhone />
              </span>
              +55 (11) 2053-1410
            </Link>
            <Link href={"#"} className="flex items-center gap-2 hover:underline">
              <span className="text-blue-500">
                <RiWhatsappFill />
              </span>
                +55 (11) 94045-1410
            </Link>
            <Link href={"#"} className="flex items-center gap-2 hover:underline">
              <span className="text-blue-500">
                <MdEmail />
              </span>
               info@autoshopping.com
            </Link>
            <Link href={"#"} className="flex items-center gap-2 hover:underline">
              <span className="text-blue-500">
                <FaLocationDot />
              </span>
                Av. Paulista, 123 São Paulo - SP
            </Link>
          </div>
        </div>
      </div>

      <hr className="my-8 text-gray-800" />
      <div className="flex flex-col gap-2 items-center md:flex-row md:justify-between text-gray-500">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Auto Shopping. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link href={"#"}  className="hover:underline">Politica de Privacidade</Link>
          <Link href={"#"}  className="hover:underline">Termos & Condições</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
