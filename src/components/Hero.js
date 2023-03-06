import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gray-800 min-h-screen w-full flex justify-center items-center relative">
      <div className="text-center z-10">
        <Image
          width={100}
          height={100}
          src="logo.svg"
          alt="hero"
          className="w-64 mx-auto "
        />
        <h1 className="text-5xl font-bold text-white mb-4">Sebastian Burgos</h1>
        <p className="text-2xl text-gray-400 mb-8">Desarrollador Front End</p>
        <a
          href="#"
          className="bg-white text-gray-800 px-8 py-4 rounded-full transition-all duration-300 hover:bg-gray-800 hover:text-white font-bold text-xl"
        >
          Ver mi trabajo
        </a>
      </div>
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-gray-700 w-full h-full"
        >
          <motion.path
            d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
            strokeWidth="0.2"
            fill="none"
            strokeDasharray="630"
            strokeDashoffset="630"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2 }}
          />
        </svg>
      
      </div>
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-gray-700 w-full h-full -rotate-180"
        >
          <motion.path
            d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
            strokeWidth="0.2"
            fill="none"
            strokeDasharray="630"
            strokeDashoffset="630"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2 }}
          />
        </svg>
      
      </div>
    </section>
  );
}

export default Hero;
