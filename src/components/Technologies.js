import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { images } from "../data/TechImg";

function Technologies() {
  console.log(images);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="bg-gray-800 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 "
      >
        <div className="max-w-7xl mx-auto shadow-xl p-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Technologies & Tools
          </h2>
          <p className="mt-3  text-lg leading-6 text-gray-300">
            I use modern and efficient technologies to create high-quality and
            professional websites and applications. I am constantly learning and
            staying up-to-date with the latest tools and techniques to provide
            the best solutions for my clients. Here are some of the technologies
            and tools I use:
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-10 shadow-xl">
            {images.map((image) => (
              <div
                key={image.id}
                className="col-span-1 flex justify-center flex-col items-center py-8 px-8 bg-white shadow-md rounded-lg"
              >
                <Image
                  width={100}
                  height={100}
                  className="max-h-24"
                  src={image.src}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
