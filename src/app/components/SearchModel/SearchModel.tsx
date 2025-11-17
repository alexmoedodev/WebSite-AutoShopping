"use client";

// Imports Components
import { SearchFilter } from "./components/SearchFilter";
import { Stats } from "./components/Stats";

//Imports Framer-motion
import { motion } from "framer-motion";

export function SearchModel() {
  return (
    <>
      <section className="w-full bg-blue-500 text-white py-28 text-center items-center jus">
        {/* Title and description Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 , ease: "easeInOut"}}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-bold flex gap-2">
              Encontre o Carro
              <span className="text-amber-300">Perfeito pra você!</span>
            </h1>
            <p className="mt-4 mb-8 mx-2 max-w-2/3">
              Descubra ofertas incríveis em veículos de qualidade. Encontre o
              carro dos seus sonhos com facilidade e confiança.
            </p>
          </div>

          {/* Container Search filter */}
          <SearchFilter />

          {/* stats */}
          <Stats />
        </motion.div>
      </section>
    </>
  );
}
