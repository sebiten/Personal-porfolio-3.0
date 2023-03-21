import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-gray-800 min-h-screen w-full flex justify-center items-center relative">
      <motion.div
        initial={{ opacity: 0 }} // initial state
        animate={{ opacity: 1 }} // final state
        transition={{ duration: 1 }} // transition duration
        className="text-center z-10 xl:mb-40 sm:mt-16"
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Image
              className="my-6"
            src="/logo.svg" alt="logo" width={250} height={100} />
          </motion.div>
        </motion.div>
        <h1 className="text-4xl font-bold text-white mb-4">Sebastian Burgos</h1>
        <p className="text-2xl text-gray-400 mb-8">Front end Developer</p>
        <motion.div className="flex gap-x-4 justify-center cursor-pointer">
          <Link
            className="grayscale hover:grayscale-0 hover:scale-110"
            href="https://api.whatsapp.com/send?phone=+543886575936&text=Hola%20Sebastian%20Burgos%20me%20gustaria%20saber%20mas%20de%20ti"
          >
            {" "}
            <FaWhatsapp className="text-4xl text-green-500 " />
          </Link>

          <Link
            className="grayscale hover:grayscale-0 hover:scale-110"
            href="https://www.linkedin.com/in/sebdevspace/"
          >
            {" "}
            <FaLinkedin className="text-4xl text-blue-500 " />
          </Link>

          <Link
            className="grayscale hover:grayscale-0 hover:scale-110"
            href="https://github.com/sebiten"
          >
            {" "}
            <FaGithub className="text-4xl text-gray-500 hover:text-white " />
          </Link>
        </motion.div>
      </motion.div>
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-200 w-full h-full"
        >
          <motion.path
            d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
            strokeWidth="0.1"
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
          viewBox="0 0 200 92"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-100 w-full h-full -rotate-180"
        >
          <motion.path
            d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
            strokeWidth="0.1"
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
