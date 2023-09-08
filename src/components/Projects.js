import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
const projects = [
  {
    title: "Techlines E-commerce",
    description:
      "Un sitio de comercio electrónico MERN es una plataforma en línea para comprar y vender productos. En este caso, aprovecharemos el stack MERN para construir un sitio de comercio electrónico completo, incluyendo un sistema de autenticación de usuarios, pasarela de pagos y un backend para gestionar las operaciones de la tienda.",
    image: "/techlines.webp",
    url: "https://techlines-production.up.railway.app/",
  },
  {
    title: "Gym Page",
    description: "Una página web para un gimnasio es una plataforma en línea que presenta información sobre el gimnasio, sus servicios, horarios, clases y promociones. Para desarrollarla, utilizaremos Next.js para la eficiencia en el desarrollo, Tailwind CSS para el diseño y Framer Motion para añadir animaciones atractivas.",
    image: "/gym.png",
    url: "https://famous-centaur-3fe604.netlify.app/",
  },
  {
    title: "AbelardoBlog",
    description: "Un sitio web de blog es una plataforma en línea para publicar y compartir contenido escrito, como artículos, noticias o historias. En este caso, utilizaremos Next.js, un marco de trabajo de React, junto con TypeScript para una gestión de tipos segura y Tailwind CSS para diseñar un sitio web de blog moderno y atractivo.",
    image: "/abelardo-website.png",
    url: "https://abelardo.blog/",
  },
  {
    title: "CleanSide App",
    description: "Utiliza Next.js para crear una landing page eficiente, Tailwind CSS para un diseño atractivo y Framer Motion para animaciones llamativas. Presenta de manera clara los servicios de tu app de limpieza, utiliza llamadas a la acción y muestra testimonios para convertir a visitantes en clientes potenciales.",
    image: "/arnoa.webp",
    url: "https://voluble-faun-a86bf8.netlify.app/",
  },
  {
    title: "Restaurantes, bares y cafeterías",
    description:
      "Una página web para restaurantes y bares es una plataforma en línea que muestra la oferta culinaria y de bebidas del establecimiento. En esta demostración, se utilizarán técnicas de diseño web para presentar de manera atractiva los platos y bebidas, creando un ambiente visualmente apetitoso y tentador.",
    image: "/food.webp",
    url: "https://dancing-sherbet-b9a756.netlify.app",
  },
  {
    title: "Profesionales independientes",
    description:
      "Un sitio web para profesionales independientes es una plataforma en línea diseñada para que abogados, escribanos, diseñadores y otros profesionales promocionen sus servicios y se conecten con posibles clientes. El enfoque debe estar en mostrar su experiencia, habilidades y la gama de servicios que ofrecen de manera efectiva..",
    image: "/portfolio.webp",
    url: "https://sebdevspace.me/",
  }
];

const ProjectsSection = () => {
  const { language } = useTranslate();
  return (
    <section className="max-w-7xl mx-auto bg-gray-800 pb-20 shadow-xl">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl text-white font-bold mb-8">
          {language === "es" ? "Proyectos" : "Projects"}
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          {language === "es"
            ? "Aquí hay algunos de mis proyectos recientes que muestran mis habilidades y experiencia en desarrollo web. Cada proyecto representa un desafío único que pude superar con creatividad y atención al detalle. ¡Echa un vistazo y descubre lo que puedo hacer por ti!"
            : "Here are some of my recent projects that showcase my skills and experience in web development. Each project represents a unique challenge that I was able to overcome with creativity and attention to detail. Take a look and see what I can do for you!"}

          {/*
           */}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              target={"_blank"}
              href={project.url}
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-600 hover:grayscale-0 grayscale transform hover:scale-105  "
            >
              <Image
                width={500}
                height={300}
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-green-400 text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
