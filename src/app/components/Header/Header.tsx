"use client";
// Import Components
import { LinkNavegation } from "@/src/components/ux/Link";
import { NavDesktop } from "../Header/components/NavDesktop";
import { NavMobile } from "../Header/components/NavMobile";

// Icons
import { FaCar } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";

// Import Framer-motion
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/src/components/ux/Button";

export function Header() {
  return (
    <header className="bg-white fixed w-full top-0 right-0 h-20 flex items-center justify-center z-10">
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo Tipo */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="text-lg ml-4 md:text-2xl"
          >
            <LinkNavegation
              href="/"
              variant="gray"
              title="Navegation to home page"
            >
              <span className="text-blue-500">
                <FaCar />
              </span>
              Auto Shopping
            </LinkNavegation>
          </motion.div>
        </AnimatePresence>

        {/* Navegation Desktop */}
        <NavDesktop />

        {/* Navegation Moblie */}
        <NavMobile />

        <div className="hidden md:flex items-center justify-center gap-2 ">
          <Button variant="blue" className="w-full" title="Fazer login">
            <FiLogIn />
            Login
          </Button>
          <Button variant="white" className="w-full" title="Fazer login">
             <IoKeyOutline />
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}
