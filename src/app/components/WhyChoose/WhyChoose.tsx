"use client";
// Imports Framer-motion
import { motion } from "framer-motion";

//Imports dataWhyChoose
import { reasons } from "@/src/data/dataWhyChoose";

export const WhyChoose = () => {
  return (
    <section className="w-full flex items-center justify-center flex-col my-16 px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4/5 mx-auto flex flex-col items-center justify-center gap-6 mb-10"
      >
        <h1 className="text-3xl sm:text-3xl font-bold text-blue-500">
          Porque escolher <span className="text-amber-400">Auto Shopping?</span>
        </h1>
        <p className="mx-8 text-md text-center text-gray-500 max-w-3/4">
          Aqui, você encontra muito mais do que carros — encontra confiança.
          Trabalhamos com transparência, qualidade e suporte em cada etapa da
          sua compra. Nosso compromisso é garantir que você faça o melhor
          negócio, com segurança, agilidade e a certeza de estar dirigindo o
          carro ideal para o seu estilo de vida.
        </p>
      </motion.div>

      {/* dataWhyChoose */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            title={reason.title}
            className="bg-white rounded-md flex flex-col items-center justify-center  gap-4 p-6 mx-2 my-4 shadow-md transition duration-600 hover:-translate-y-2"
          >
            <div className="border border-blue-500 text-3xl text-blue-400 rounded-full p-6 mb-4">
              <span className="">{reason.icon}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-2">
              <h2 className="text-lg text-gray-500">{reason.title}</h2>
              <span className="text-sm text-gray-400">
                {reason.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
