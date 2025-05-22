"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { frontEndTech, backEndTech, databases } from "../data/TechImg"
import { useTranslate } from "@/hooks/useTranslate"
import { Badge } from "@/components/ui/badge"
import { Card } from "./ui/card"

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="bg-gray-800 min-h-screen w-full py-16 relative overflow-hidden">
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

            {/* Technology Sections */}
            {[
              { title: "Front-end", data: frontEndTech, icon: "🎨" },
              { title: "Back-end", data: backEndTech, icon: "⚙️" },
              { title: "Databases", data: databases, icon: "🗄️" },
            ].map((section, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                className="mb-10 last:mb-0"
              >
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-600 pb-3 flex items-center">
                  <span className="mr-2">{section.icon}</span>
                  {section.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {section.data.map((tech, techIndex) => (
                    <motion.div key={tech.alt} variants={itemVariants}>
                      <Badge className="flex items-center justify-start w-full h-full gap-3 p-4 bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-lg transition-all duration-300  hover:scale-105 group">
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
              </motion.div>
            ))}
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
