import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { frontEndTech, backEndTech, databases } from "../data/TechImg";
import { useTranslate } from "@/hooks/useTranslate";
import { Badge } from "@/components/ui/badge";
import { Card } from "./ui/card";

function Technologies() {
  const { language } = useTranslate();

  return (
    <section className="max-w-7xl mx-auto py-16 px-8 grid items-center justify-center ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-white mb-6 text-start">
          {language === "es"
            ? "Tecnologías y herramientas"
            : "Technologies & Tools"}
        </h2>
        <p className="text-lg text-gray-400 text-start mb-8">
          {language === "es"
            ? "Utilizo tecnologías modernas y eficientes para crear sitios web y aplicaciones de alta calidad."
            : "I use modern and efficient technologies to create high-quality websites and applications."}
        </p>
        <Card className="shadow-lg border border-green-200/50  rounded-2xl p-10">
          {/* Technology Sections */}
          {[
            { title: "Front-end", data: frontEndTech },
            { title: "Back-end", data: backEndTech },
            { title: "Databases", data: databases },
          ].map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4 border-b  pb-2">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {section.data.map((image) => (
                  <Badge
                    key={image.alt}
                    className="flex items-center bg-inherit gap-3 p-3 border border-gray-500 rounded-lg "
                  >
                    <Image
                      width={30}
                      height={30}
                      src={image.src}
                      alt={image.alt}
                      className="object-contain"
                    />
                    <span className="text-sm font-bold text-gray-600 ml-2">
                      {image.alt}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </Card>
      </motion.div>
    </section>
  );
}

export default Technologies;
