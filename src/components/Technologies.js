"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "./ui/card"
import { useTranslate } from "@/hooks/useTranslate"

export const technologies = [
  {
    id: 1,
    src: "/01-tec.webp",
    alt: "HTML",
  },
  {
    id: 3,
    src: "/03-tec.webp",
    alt: "JavaScript",
  },
  {
    id: 4,
    src: "/05-tec.webp",
    alt: "React",
  },
  {
    id: 5,
    src: "/next.svg",
    alt: "Nextjs",
  },
  {
    id: 6,
    src: "/tailwind.webp",
    alt: "Tailwind",
  },
  {
    id: 7,
    src: "/ts.png",
    alt: "Typescript",
  },
  {
    id: 13,
    src: "/vscode.webp",
    alt: "VS Code",
  },
  {
    id: 2,
    src: "/pngegg.png",
    alt: "Node.js",
  },
  {
    id: 11,
    src: "/expressjs.png",
    alt: "Express.js",
  },
  {
    id: 14,
    src: "/04-tec.webp",
    alt: "Supabase DB",
  },
]

function Technologies() {
  const { language } = useTranslate()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="bg-gray-800 w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {language === "es" ? "Tecnologías y herramientas" : "Technologies & Tools"}
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            {language === "es"
              ? "Utilizo tecnologías modernas y eficientes para crear sitios web y aplicaciones de alta calidad."
              : "I use modern and efficient technologies to create high-quality websites and applications."}
          </p>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="relative">
          <Card className="shadow-xl border-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-8 md:p-10 relative overflow-hidden">
            {/* SVG Background Decoration */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
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
                  transition={{ duration: 2 }}
                />
              </svg>
            </div>

            {/* Technology Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {technologies.map((tech) => (
                <motion.div key={tech.id} variants={itemVariants}>
                  <Badge className="flex items-center justify-start w-full h-full gap-3 p-4 bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-lg transition-all duration-300 hover:scale-105 group">
                    <div className="relative w-8 h-8 flex-shrink-0">
                      <Image fill src={tech.src || "/placeholder.svg"} alt={tech.alt} className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-green-300 transition-colors">
                      {tech.alt}
                    </span>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </Card>
        </motion.div>
      </div>

      {/* Background SVG Decorations */}
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
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
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 92"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-100 w-full h-full -rotate-180"
        >
          <motion.path
            d="M 100,0 L 200,100 L 100,200 L 0,100 L 100,0"
            strokeWidth="0.1"
            fill="none"
            strokeDasharray="630"
            strokeDashoffset="630"
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    </section>
  )
}

export default Technologies
