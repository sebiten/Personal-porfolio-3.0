import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'LumiPeopleARG',
      description: (
        <>
          Desde junio, he trabajado en el desarrollo, mantenimiento y optimización de la página web de LumiPeopleARG.
          Entre las tareas más destacadas se incluyen:
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Diseño y desarrollo de componentes web con React y Tailwind CSS.</li>
            <li>Implementación de campañas de Google Ads para aumentar la visibilidad online.</li>
            <li>Optimización SEO para mejorar el posicionamiento orgánico en motores de búsqueda.</li>
            <li>Creación y mantenimiento de un blog con contenido atractivo y relevante.</li>
            <li>Mejoras en la velocidad de carga de la página mediante estrategias de optimización.</li>
            <li>Colaboración en estrategias de marketing digital junto al equipo de la empresa.</li>
          </ul>
        </>
      ),
      logo: '/lumi.png',
      date: 'Junio 2024 - Actualidad',
      url: 'https://www.lumipeoplearg.com',
    },
    {
      title: 'Pasantía Inmobiliaria Full-Stack',
      description: (
        <>
          Pasantía de 6 meses desarrollando ideas para una aplicación inmobiliaria full-stack.
          Entre las responsabilidades asumidas durante este período se encuentran:
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Diseño de prototipos funcionales para la plataforma web.</li>
            <li>Desarrollo de la lógica del backend con Node.js y bases de datos en MongoDB.</li>
            <li>Implementación de la interfaz de usuario con React y Tailwind CSS.</li>
            <li>Trabajo en equipo utilizando metodología ágil basada en sprints.</li>
            <li>Colaboración en reuniones de planificación y seguimiento de tareas.</li>
            <li>Pruebas y depuración para garantizar un producto funcional y escalable.</li>
          </ul>
        </>
      ),
      logo: '/ideas.png',
      date: 'Enero 2024 - Junio 2024 - https://www.lumipeoplearg.com/ ',
      url: 'https://github.com/tahouse-casa', // Cambia esto por el enlace adecuado, si aplica
    },
  ];

  return (
    <section className="max-w-7xl mx-auto bg-gray-800 pb-20 my-6">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="container mx-auto px-4"
      >
        {/* Título de la sección */}
        <h2 className="text-4xl text-white font-bold mb-8">Experiencia</h2>
        <p className="text-gray-400 text-lg mb-12">
          Aquí puedes explorar las experiencias más destacadas que han contribuido a mi crecimiento profesional en desarrollo web y programación full-stack.
        </p>
        {/* Lista de experiencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <a
              href={experience.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl"
            >
              {/* Imagen del logo */}
              <Image
                src={experience.logo}
                alt={experience.title}
                width={300}
                height={300}
                className="w-80 h-80 object-fill mx-auto"
              />
              {/* Detalles de la experiencia */}
              <div className="p-6">
                <h3 className="text-green-400 text-2xl font-bold mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{experience.date}</p>
                <div className="text-gray-700 text-base mb-4">{experience.description}</div>
                {/* Enlace visible al dominio */}
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {experience.url.replace('https://', '')}
                </a>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
