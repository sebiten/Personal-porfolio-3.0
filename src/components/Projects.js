import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit nulla et luctus semper.",
    image: "/kiosko.png",
    url: "#",
  },
  {
    title: "Project 2",
    description:
      "Nullam aliquam sapien quis tellus dapibus, eu maximus tortor suscipit. Sed a elit eget elit posuere pellentesque.",
    image: "/jp.png",
    url: "#",
  },
  {
    title: "Project 3",
    description:
      "Donec vehicula libero quis justo interdum, non bibendum est dapibus. Duis mollis eros vel nisl consequat, eu dignissim sapien venenatis.",
    image: "/lyriks.png",
    url: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section className="max-w-7xl  mx-auto bg-gray-800 py-20  ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-white font-bold mb-8">Some projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
