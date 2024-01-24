import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
const projects = [
  {
    title: "Techlines E-commerce",
    image: "/techlines.webp",
    url: "https://tl-31ir.onrender.com/",
  },
  {
    title: "Gym Page",
    image: "/gym.png",
    url: "https://famous-centaur-3fe604.netlify.app/",
  },
  {
    title: "AbelardoBlog",
    image: "/abelardo-website.png",
    url: "https://abelardo.blog/",
  },
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
