"use client";
//React
import Image from "next/image";

//Imports Components UX
import { Button } from "@/src/components/ux/Button";

//Imports Icons
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineExpandMore } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoCalendarNumberOutline } from "react-icons/io5";

 //Imports Framer-motion
import { motion } from "framer-motion"; 


//Imports dataCars
import { cars } from "@/src/data/dataCars";



const CardCarsGrid = () => {
  const stylesSpanLabelIcon = "flex items-center gap-2";
  const detailsAdditionalLabel =
    "flex items-center gap-1 text-gray-500 text-sm";
  const detailsAdditionalSpanIcon = "text-blue-500";

  const cardBadgeStyle =
    " w-fit py-1 px-2 text-[12px] rounded-full absolute top-5";



  return (
    <>
      {/* dataCars - Grid*/}
      <div className="grid grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {cars.map((car) => (
          <motion.div
          initial={{opacity:0 , y:50}}
          whileInView={{opacity:1 , y: 0}}
          transition={{duration:0.6}}
          viewport={{once:true , amount:0.3}}
            key={car.id}
            className="relative bg-white flex flex-col  gap-2 rounded-md shadow-2xl shadow-gray-100 p-3  transition duration-300 hover:-translate-y-1.5 mb-8 revealCardsCars"
          >
            <Image
              src={car.imagem}
              alt={car.marca}
              width={600}
              height={600}
              className="w-full h-62 object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 text-gray-500">
              {/* Model and Stars */}
              <div className="flex items-center justify-between border-b-2 border-b-gray-200 gap-2 mt-2">
                <h2 className="text-gray-600 text-lg mb-2 ">{car.modelo}</h2>

                <label className="flex items-center gap-2" title="Avaliation">
                  <span className="text-amber-300">
                    <FaStar />
                  </span>
                  {car.avaliacao}
                </label>
              </div>

              {/* Year */}
              <label className={stylesSpanLabelIcon} title="Year fabrication">
                <span>
                  <IoCalendarNumberOutline />
                </span>
                {car.ano}
              </label>

              {/* Transmission */}
              <label className={stylesSpanLabelIcon} title="Transmission">
                <span>
                  <GiGearStickPattern />
                </span>
                {car.cambio}
              </label>

              {/* Fuel */}
              <label className={stylesSpanLabelIcon} title="Type fuel">
                <span>
                  <BsFuelPump />
                </span>
                {car.combustivel}
              </label>

              {/* Details aditionais */}
              <div className="flex items-center gap-4 my-2">
                <label
                  className={detailsAdditionalLabel}
                  title="Capacity users"
                >
                  <span className={detailsAdditionalSpanIcon}>
                    <FiUsers />
                  </span>
                  {car.lugares}
                </label>
                <label className={detailsAdditionalLabel} title="Km">
                  <span className={detailsAdditionalSpanIcon}>
                    <SlSpeedometer />
                  </span>
                  {car.km}
                </label>
                <label className={detailsAdditionalLabel} title="Color">
                  <span className={detailsAdditionalSpanIcon}>
                    <IoColorPaletteOutline />
                  </span>
                  {car.cor}
                </label>
              </div>
            </div>

            {/* Cars Emphasis */}
            {car.destaque && (
              <div
                className={`${cardBadgeStyle} bg-green-600 text-white left-5`}
              >
                <label>Emphasis</label>
              </div>
            )}

            {/* Category cars */}
            {car.categoria && (
              <div
                className={`${cardBadgeStyle} bg-gray-200 text-gray-700 right-5`}
              >
                <label>{car.categoria}</label>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-500 border-t-2 border-gray-200 text-sm flex flex-1">
              <p className="my-4">{car.descricao}</p>
            </div>

            {/* Button Details */}
            <div className="w-full flex items-end ">
              <Button variant="gray" title="Viwer car details ">
                Viewer Details <IoIosArrowForward />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button viwer more */}
      <div className="my-8 flex items-center justify-center">
        <Button variant="blue" className="py-2" title="Viwer more cars">
          {" "}
          Viewer More Cars <MdOutlineExpandMore />
        </Button>
      </div>
    </>
  );
};

export default CardCarsGrid;
