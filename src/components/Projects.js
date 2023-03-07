import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Kiosko",
    description:
      "Full stack application for a kiosko with a Next js, Prisma backend and MongoDB.",
    image: "/kiosko.webp",
    url: "https://kiosko.up.railway.app/",
  },
  {
    title: "Cinema",
    description: "Movie application with Next Js, Tailwind CSS and TMDB API",
    image: "/jp.webp",
    url: "https://earnest-pithivier-e91468.netlify.app/",
  },
  {
    title: "Lyriks",
    description: "Music player with React, Redux, Tailwind CSS and Spotify API",
    image: "/lyriks.webp",
    url: "https://lyriks-musicplayer.netlify.app/",
  },
  {
    title: "Arnoa SRL",
    description: "Arnoa SRL website with Next Js, Tailwind CSS and Sanity CMS",
    image: "/arnoa.webp",
    url: "https://lyriks-musicplayer.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="max-w-7xl  mx-auto bg-gray-800 pb-20 shadow-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-8">Some projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 text-base">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
