"use client";
//React
import { useState } from "react";
import Image from "next/image";

//Imports Components UX
import { Button } from "@/src/components/ux/Button";

//Imports Icons
import { FaPlay } from "react-icons/fa6";

//Imports Framer-motion
import { motion } from "framer-motion";

export const ImageVideo = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="bg-white w-full p-4 md:p-16 ">
      <motion.div
        initial={{ opacity: 0, y: "50px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative"
      >
        <Image
          src={"/imageVideo.webp"}
          alt="BMW Video"
          width={1440}
          height={800}
          className="object-cover w-full h-[550px] rounded-2xl"
        />

        {/* Button Play */}
        <button
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10 "
          onClick={() => setShowVideo(!showVideo)}
        >
          <span className="relative flex items-center justify-center h-20 w-20 rounded-full bg-white">
            <span className="absolute w-28 h-28 bg-white/50 rounded-full animate-ping ease-linear -z-10"></span>
            <span className="absolute w-32 h-32 bg-white/50 rounded-full animate-ping ease-linear -z-10"></span>
            <FaPlay className="text-red-500 w-8 h-8 hover:text-red-700" />
          </span>
        </button>

        {/* Video */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-20">
            <div className="relative w-11/12 h-1/2 md:w-3/4 lg:h-3/4">
              <Button
                variant="close"
                className="absolute top-2 right-2"
                aria-label="Close video"
                title="Close Video"
                onClick={() => setShowVideo(!showVideo)}
              />
              <iframe
                src="https://www.youtube.com/embed/YAFUyPp_238?si=2KWHhpBBRQ-Dkvaa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};
