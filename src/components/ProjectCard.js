"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Lock } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectCard({ project, index = 0, language = "es" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative"
    >
      <Card className="overflow-hidden transition-all hover:shadow-xl bg-gray-800 border-gray-700 h-full flex flex-col group">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0.95 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
            }}
            className="h-full w-full"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
              >
                <Badge className="bg-green-500 hover:bg-green-600 shadow-lg">
                  <Lock className="h-3 w-3 mr-1 fill-white" />
                  <span className="mt-1">{language === "es" ? "Repositorio Privado" : "Private Repository"}</span>
                </Badge>
              </motion.div>
            </div>
          )}
        </div>
        <CardHeader className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <Badge variant="outline" className="mt-1 border-gray-600 text-green-400">
                  {language === "es" ? project.category.es : project.category.en}
                </Badge>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            >
              <Badge variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-gray-600">
                {project.date}
              </Badge>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
          >
            <CardDescription className="text-gray-400">
              {language === "es" ? project.shortDescription.es : project.shortDescription.en}
            </CardDescription>
          </motion.div>
        </CardHeader>
        <CardContent className="relative z-10 flex-grow">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="mb-4"
          >
            <p className="text-sm text-gray-400 line-clamp-3">
              {language === "es" ? project.description.es : project.description.en}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex flex-wrap gap-1 mb-4"
          >
            {project.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 + index * 0.1 + techIndex * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-xs bg-gray-700 text-green-200 hover:bg-gray-600 grayscale hover:grayscale-0 transition-all hover:scale-105"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-between relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Button
              variant="outline"
              asChild
              className="bg-transparent border-gray-600 text-white hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Link target="_blank" href={`${project.github}`}>
                {language === "es" ? "Ver Github" : "View Github"}
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white transition-colors">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center grayscale-0 hover:scale-105 transition-transform"
              >
                {language === "es" ? "Visitar" : "Visit"} <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </CardFooter>

        {/* SVG Decoration similar to Hero */}
        <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <svg
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current text-green-200 w-full h-full"
          >
            <motion.path
              d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
              strokeWidth="0.1"
              fill="none"
              strokeDasharray="630"
              strokeDashoffset="630"
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: index * 0.2 }}
            />
          </svg>
        </div>
      </Card>
    </motion.div>
  )
}
