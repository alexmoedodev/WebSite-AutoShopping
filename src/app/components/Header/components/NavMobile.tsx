"use client";

// React
import { useState } from "react";

//Import Framer-Motion
import { motion, AnimatePresence } from "framer-motion";

// Import Components UX
import { LinkNavegation } from "@/src/components/ux/Link";
import { Button } from "@/src/components/ux/Button";

//Import Icons
import { FiLogIn } from "react-icons/fi";

//data navHeader
import { LinksNavHeader } from "@/src/data/dataNavHeader";

export function NavMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className="relative md:hidden">
        <Button
          variant={"btnMenu"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
          className="mr-4"
          aria-label="Abrir Menu de navegação"
          title="Abrir Menu de navegação"
        />

        {/* Animate Motion - Menu */}
        <AnimatePresence>
          {isOpenMenu && (
            <motion.div
              initial={{ opacity: 0, right: -20 }}
              animate={{ opacity: 1, right: 0 }}
              exit={{ opacity: 0, right: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`absolute -top-5 right-0 w-[200px] h-dvh min-h-full bg-white  py-2 px-4`}
            >


              {/* Button Close */}
              <div className="w-full flex items-center justify-end">
                <Button
                  variant={"close"}
                  onClick={() => setIsOpenMenu(!isOpenMenu)}
                  aria-label="Fechar Menu de navegação"
                  title="Fechar Menu de navegação"
                />
              </div>

              <nav className="mt-4">
                <ul className="flex flex-col gap-3">
                  {LinksNavHeader.map((link, index) => (
                    <li key={index}>
                      <LinkNavegation variant="gray" href={link.href} title={link.label} onClick={()=> setIsOpenMenu(!isOpenMenu)}>
                        <span className="text-blue-500">{link.icon}</span>
                        {link.label}
                      </LinkNavegation>
                    </li>
                  ))}
                </ul>
              </nav>
              <hr className="my-5 border-gray-200" />

              {/* Register or Login */}
              <div className="flex flex-col gap-2">
                <Button variant="blue" className="w-full" title="Fazer login">
                  <FiLogIn />
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
