import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { frontEndTech, backEndTech, databases } from "../data/TechImg";
import { useTranslate } from "@/hooks/useTranslate";

function Technologies() {
  const { language } = useTranslate();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="bg-gray-800 py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="max-w-7xl mx-auto p-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            {language === "es"
              ? "Tecnologias y herramientas"
              : " Technologies & Tools"}
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-300 mb-10">
            {language === "es"
              ? "Utilizo tecnologías modernas y eficientes para crear sitios web y aplicaciones de alta calidad y profesionales. Estoy constantemente aprendiendo y manteniéndome actualizado con las últimas herramientas y técnicas para ofrecer las mejores soluciones a mis clientes. A continuación se presentan algunas de las tecnologías y herramientas que utilizo"
              : "I use modern and efficient technologies to create high-quality and professional websites and applications. I am constantly learning and staying up-to-date with the latest tools and techniques to provide the best solutions for my clients. Here are some of the technologies and tools I use:"}
          </p>

          <div className="col-span-12 md:col-span-12 xl:col-span-4">
            {/* Front-end Tech */}

            <h3 className="text-2xl font-semibold text-green-300 mt-9 mb-2">
              Front-end Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frontEndTech.map((image) => (
                <div
                  key={image.id}
                  className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
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

            {/* Back-end Tech */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <h3 className="text-2xl font-semibold text-green-300 mt-9 mb-2 ">
                Back-end Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backEndTech.map((image) => (
                  <div
                    key={image.id}
                    className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
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

            {/* Databases */}
            <div className="col-span-12 md:col-span-6 xl:col-span-4">
              <h3 className="text-2xl font-semibold text-green-300 mt-9 mb-2">
                Databases
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {databases.map((image) => (
                  <div
                    key={image.id}
                    className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md"
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
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
