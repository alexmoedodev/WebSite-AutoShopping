"use client";
//React
import Image from "next/image";

//Import Framer-motion
import { motion } from "framer-motion";

//Import dataHero
import { dataHero } from "@/src/data/dataHero";
export function Hero() {
  return (
    <>
      {dataHero.map((data, index) => (
        <section key={index}>
          <div className="w-full h-[700px]  flex items-center justify-center">
            <Image
              src={data.image}
              alt={data.name}
              width={1440}
              height={800}
              className="relative h-full w-full object-cover"
            />

            {/* Card welcome */}
            <motion.div
              initial={{ opacity: 0, right: -20 }}
              animate={{ opacity: 1, right: 150 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-2/12 left-1 sm:left-8  bg-white/60 w-[300px] md:left-24 md:top-1/6  md:w-[350px]  rounded-2xl p-4"
            >
              <h1 className="text-gray-900 text-4xl md:text-5xl font-bold my-4 flex flex-col">
                Welcome!<span className="text-blue-500">Shopping Car</span>
              </h1>
              <p className="text-gray-500 mb-2">
                We offer the best options in cars and categories,
              </p>
              <p className="text-gray-500 mb-2">
                with proven quality and the trust of thousands of satisfied
                customers.
              </p>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
