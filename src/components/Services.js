import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
import { services } from "@/data/services";

const Services = () => {
  const { language } = useTranslate();

  return (
    <section className="bg-gray-800 py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="px-4 sm:px-6 lg:px-8"
      >
        <div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {language === "es" ? "Servicios" : "Services"}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {language === "es"
              ? "A continuación se encuentran algunos de los servicios que ofrezco. ¡No dudes en contactarme si tienes alguna pregunta o un proyecto en el que pueda ayudarte!"
              : "Below are some of the services I offer. Please dont hesitate to get in touch with me if you have any questions or a project that I can  assist with!"}
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex items-center justify-center h-14 w-14 p-2 rounded-md bg-green-200  ${service.color} text-white`}
                  >
                    <FontAwesomeIcon
                      color="black"
                      className="h-8 w-8 mx-auto"
                      icon={service.icon}
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {language === "es" ? service.titleEs : service.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {language === "es"
                      ? service.descriptionEs
                      : service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
