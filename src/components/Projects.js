import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import ProjectsGrid from "./ProjectsGrid";


const ProjectsSection = () => {
  const { language } = useTranslate();
  return (
    <section className="max-w-7xl mx-auto bg-gray-800 pb-20 ">
      <ProjectsGrid />
    </section>
  );
};

export default ProjectsSection;
