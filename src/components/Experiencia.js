import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "LumiPeople",
      description: (
        <>
          <p className="text-gray-200 font-normal text-sm">
            Desarrollé una web empresarial informativa y funcional para una
            empresa, integrando un sistema de búsqueda de empleo y un blog
            optimizado con técnicas avanzadas de SEO, mejorando la conversión y
            visibilidad en motores de búsqueda.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-200 text-start text-sm ">
            <li>
              Implementación de Google Analytics y Google Tag Manager para el
              análisis y seguimiento del rendimiento y comportamiento de los
              usuarios.
            </li>
            <li>
              Creación y gestión de un blog corporativo con contenido optimizado
              para SEO, utilizando estrategias de link building y keywords
              relevantes.
            </li>
            <li>
              Optimización de velocidad de carga mediante estrategias avanzadas
              de rendimiento como lazy loading y minificación de archivos.
            </li>
            <li>
              Colaboración en estrategias de marketing digital incluyendo
              campañas de Google Ads y redes sociales para mejorar el alcance y
              adquisición de usuarios.
            </li>
            <li>
              Desarrollo de un sistema de carga y postulación de empleos con
              busquedas para cada puesto.
            </li>
          </ul>
        </>
      ),
      logo: "/lumi.png",
      date: "Junio 2024 - Actualidad",
      url: "https://www.lumipeoplearg.com",
    },
    {
      title: "IDeas App Inmobiliaria",
      description: (
        <>
          <p className="text-gray-200 font-normal text-sm">
            Entorno de aprendizaje profesional donde, en colaboración con un
            equipo, desarrollamos una aplicación inmobiliaria full-stack,
            aplicando metodologías ágiles con sprints iterativos y participando
            en reuniones de planificación estratégica.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-200 text-start text-sm  ">
            <li>
              Diseño de estilos visuales atractivos y funcionales, utilizando
              Tailwind CSS para garantizar una UI limpia y profesional.
            </li>
            <li>
              Implementación de diseño responsive para compatibilidad en
              múltiples dispositivos, asegurando una experiencia de usuario
              óptima.
            </li>
            <li>
              Integración de mapas interactivos con Leaflet y OpenStreetMap para
              visualizar propiedades en tiempo real.
            </li>
            <li>
              Desarrollo de funcionalidades avanzadas como paginación dinámica,
              filtrado avanzado y consumo de APIs de terceros para enriquecer
              los datos de las propiedades.
            </li>
            <li>
              Trabajo en equipo con metodologías ágiles como Scrum, participando
              activamente en reuniones de planificación, code reviews y
              documentación técnica.
            </li>
          </ul>
        </>
      ),
      logo: "/ideas.png",
      date: "Noviembre 2022 - Marzo 2023",
      url: "https://github.com/tahouse-casa",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto pb-20 my-6 px-6  rounded-lg  mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-white text-start">
          Experiencia
        </h2>
        <p className="text-gray-300 text-lg text-start mb-12">
          Explora las experiencias más relevantes en mi trayectoria en
          desarrollo web y programación full-stack.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="bg-gray-700 border border-gray-600 p-6 rounded-lg transition-transform transform  hover:shadow-lg"
            >
              <Image
                src={experience.logo}
                alt={experience.title}
                width={200}
                height={120}
                className="mb-4 object-cover h-28 w-auto mx-auto"
              />
              <CardContent className="flex flex-col items-center text-center h-full text-gray-200">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {experience.title}
                </h3>
                <p className="text-green-400 text-lg font-semibold mb-2">
                  {experience.date}
                </p>
                <div className="text-gray-200 text-base mb-4">
                  {experience.description}
                </div>
                <Link
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  {experience.url.replace("https://", "")}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
