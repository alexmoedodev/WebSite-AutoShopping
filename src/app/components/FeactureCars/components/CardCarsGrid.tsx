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
  const detailsAdditionalSpan =
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
              title={`${car.marca} ${car.modelo}`}
              width={600}
              height={600}
              className="w-full h-62 object-cover rounded-md"
            />
            <div className="flex flex-col gap-2 text-gray-500">
              {/* Model and Stars */}
              <div className="flex items-center justify-between border-b-2 border-b-gray-200 gap-2 mt-2">
                <h2 className="text-gray-600 text-lg mb-2 ">{car.modelo}</h2>

                <span className="flex items-center gap-2" title="Avaliação">
                  <span className="text-amber-300">
                    <FaStar />
                  </span>
                  {car.avaliacao}
                </span>
              </div>

              {/* Year */}
              <span className={stylesSpanLabelIcon} title="Ano de fabricação">
                <span>
                  <IoCalendarNumberOutline />
                </span>
                {car.ano}
              </span>

              {/* Transmission */}
              <span className={stylesSpanLabelIcon} title="Tipo de câmbio">
                <span>
                  <GiGearStickPattern />
                </span>
                {car.cambio}
              </span>

              {/* Fuel */}
              <span className={stylesSpanLabelIcon} title="Tipo de combustível">
                <span>
                  <BsFuelPump />
                </span>
                {car.combustivel}
              </span>

              {/* Details aditionais */}
              <div className="flex items-center gap-4 my-2">
                <span
                  className={detailsAdditionalSpan}
                  title="Capacidade de lugares"
                >
                  <span className={detailsAdditionalSpanIcon}>
                    <FiUsers />
                  </span>
                  {car.lugares}
                </span>
                <span className={detailsAdditionalSpan} title="Kilometragem">
                  <span className={detailsAdditionalSpanIcon}>
                    <SlSpeedometer />
                  </span>
                  {car.km}
                </span>
                <span className={detailsAdditionalSpan} title="Cor do carro">
                  <span className={detailsAdditionalSpanIcon}>
                    <IoColorPaletteOutline />
                  </span>
                  {car.cor}
                </span>
              </div>
            </div>

            {/* Cars Emphasis */}
            {car.destaque && (
              <div
                className={`${cardBadgeStyle} bg-green-600 text-white left-5`}
              >
                <span>Destaque</span>
              </div>
            )}

            {/* Category cars */}
            {car.categoria && (
              <div
                className={`${cardBadgeStyle} bg-gray-200 text-gray-700 right-5`}
              >
                <span>{car.categoria}</span>
              </div>
            )}

            {/* Description */}
            <div className="text-gray-500 border-t-2 border-gray-200 text-sm flex flex-1">
              <p className="my-4">{car.descricao}</p>
            </div>

            {/* Button Details */}
            <div className="w-full flex items-end ">
              <Button variant="gray" title="Ver detalhes do carro">
                Ver Detalhes <IoIosArrowForward />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Button viwer more */}
      <div className="my-8 flex items-center justify-center">
        <Button variant="blue" className="py-2" title="Ver mais carros">
          {" "}
          Ver mais Carros <MdOutlineExpandMore />
        </Button>
      </div>
    </>
  );
};

export default CardCarsGrid;
