"use client";
//Imports Icons
import { FaCar } from "react-icons/fa";

// Imports Components
import CardCarsGrid from "./components/CardCarsGrid";

//Imports Framer-motion
import { motion } from "framer-motion";

export const FeatuteCars = () => {
  return (
    <section className="bg-transparent w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto my-16">
        {/* Title and descrition section */}
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true , amount: 0.4 }}
        
        
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="flex items-center gap-2 text-3xl sm:text-4xl font-bold text-gray-800">
            <span className="text-blue-500">
              <FaCar />
            </span>
             Auto Shopping
          </h1>
          <p className="my-8 text-gray-500 mx-8 t">
            
          </p>
        </motion.div>
        {/* dataCars - Grid*/}
        <CardCarsGrid />
      </div>
    </section>
  );
};
