import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
const projects = [
  {
    title: "Techlines E-commerce",
    description:
      "E-commerce desarrollada con MERN stack, con panel de administración para la gestión de productos. Debido a las limitaciones del hosting gratuito, la aplicación entra en modo de espera al inicio, lo que puede ocasionar un retraso de aproximadamente un minuto. Una vez activada, la carga es rápida y la experiencia de usuario se mantiene fluida.",
    image: "/techlines.webp",
    url: "https://tl-31ir.onrender.com/",
  },
  {
    title: "Gym",
    description:
      "Página web estática diseñada específicamente para gimnasios, enfocada en captar la atención de los clientes mediante atractivas animaciones y un diseño visual impactante.",
    image: "/gym.png",
    url: "https://famous-centaur-3fe604.netlify.app/",
  },
  {
    title: "Reservas-app",
    description:
      "Aplicación Full-Stack para la gestión de reservas en barberías, consultorios y otros servicios. Incluye generación dinámica de PDF y envío automatizado de correos electrónicos tanto al cliente como al profesional (barbero, médico, entre otros).",
    image: "/reserva.png",
    url: "https://reservas-full-stack.vercel.app/",
  },
];

const ProjectsSection = () => {
  const { language } = useTranslate();
  return (
    <section className="max-w-7xl mx-auto bg-gray-800 pb-20 ">
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
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-600 transform   "
            >
              <Image
                width={500}
                height={300}
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-green-300 text-2xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-base">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <Button variant={"deafult"} className="bg-green-200 text-gray-700 hover:bg-gray-300

        flex items-center justify-center mt-8 mx-auto py-6 px-6 rounded-lg gap-2">
          <FaGithub size={25} />
          <Link
            className="flex   gap-2   items-center justify-center"
            href="https://github.com/sebiten"
          >
            Para ver mas proyectos visita mi Github
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
