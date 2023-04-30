import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faPencilAlt,
  faCodeBranch,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
const services = [
  {
    icon: faCode,
    color: "text-green-500",
    title: "Front-End Development",
    titleEs: "Desarrollo Front-End",
    description:
      "Development of modern and responsive user interfaces using the latest web technologies such as HTML5, CSS3, and JavaScript.",
    descriptionEs:
      "Desarrollo de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías web como HTML5, CSS3 y JavaScript.",
  },
  {
    icon: faMobileAlt,
    color: "text-blue-500",
    title: "Responsive Design",
    titleEs: "Diseño Responsivo",
    description:
      "Creation of websites that automatically adapt to different screen sizes to ensure a smooth and consistent user experience on all devices.",
    descriptionEs:
      "Creación de sitios web que se adaptan automáticamente a diferentes tamaños de pantalla para garantizar una experiencia de usuario fluida y consistente en todos los dispositivos.",
  },
  {
    icon: faPalette,
    color: "text-yellow-500",
    title: "UI/UX Design",
    titleEs: "Diseño UI/UX",
    description:
      "Design of intuitive and visually appealing user interfaces that are easy to navigate and use.",
    descriptionEs:
      "Diseño de interfaces de usuario intuitivas y visualmente atractivas que son fáciles de navegar y utilizar.",
  },
  {
    icon: faCodeBranch,
    color: "text-purple-500",
    title: "Version Control",
    titleEs: "Control de Versiones",
    description:
      "Utilization of version control systems such as Git to manage code changes and collaborate effectively with other developers.",
    descriptionEs:
      "Utilización de sistemas de control de versiones como Git para gestionar los cambios de código y colaborar de manera efectiva con otros desarrolladores.",
  },
  {
    icon: faPencilAlt,
    color: "text-red-500",
    title: "Wireframing",
    titleEs: "Creación de Wireframes",
    description:
      "Wireframing: Creation of visual outlines and low-fidelity mockups to plan and refine the structure and layout of a website or application",
    descriptionEs:
      "Creación de esquemas visuales y maquetas de baja fidelidad para planificar y refinar la estructura y el diseño de un sitio web o aplicación.",
  },
  {
    icon: faCode,
    color: "text-green-500",
    title: "Web Performance Optimization",
    titleEs: "Optimización del rendimiento web",
    description:
      "Improvement of website performance through techniques such as code optimization, image compression, and caching.",
    descriptionEs:
      "Mejora del rendimiento de los sitios web a través de técnicas como la optimización del código, la compresión de imágenes y el almacenamiento en caché.",
  },
];

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
          <div key={service.title} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0">
              <span className={`inline-flex items-center justify-center h-14 w-14 p-2 rounded-md bg-green-200  ${service.color} text-white`}>
                <FontAwesomeIcon color="black" className="h-8 w-8 mx-auto" icon={service.icon} />
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">
                {language === "es" ? service.titleEs : service.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {language === "es" ? service.descriptionEs : service.description}
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
