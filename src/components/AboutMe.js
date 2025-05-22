"use client"
import { motion } from "framer-motion"
import { useTranslate } from "@/hooks/useTranslate"
import CVDownloadButton from "./CVDowloadButton"
import { Code, BookOpen, User, ChevronRight, Zap, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const AboutMe = () => {
  const { language } = useTranslate()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="bg-gray-800 min-h-screen w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12 text-center md:text-left"
        >
          <Badge className="mb-4 bg-green-500 text-white px-3 py-1 text-sm">
            {language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer"}
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">{language === "es" ? "Sobre mí" : "About me"}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 order-2 md:order-1"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                {language === "es"
                  ? "Mi nombre es Sebastian Burgos y soy un programador de 25 años apasionado por la tecnología. Actualmente, estoy cursando la carrera de Tecnicatura Universitaria en Programación en la Universidad Nacional de Salta."
                  : "My name is Sebastian Burgos, and I am a 25-year-old programmer passionate about technology. I am currently studying for a Technical University Degree in Programming at the National University of Salta."}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-400 leading-relaxed">
                {language === "es"
                  ? "Me encantan todo tipo de desafíos y siempre busco aprender nuevas habilidades y técnicas para mejorar mi trabajo. Una de mis fortalezas como programador es mi capacidad para aprender rápidamente."
                  : "I love all kinds of challenges and always seek to learn new skills and techniques to improve my work. One of my strengths as a programmer is my ability to learn quickly."}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-gray-400 leading-relaxed">
                {language === "es"
                  ? "Me motiva la perspectiva de crecimiento personal y siempre busco formas de mejorar tanto profesional como personalmente. Creo que esta mentalidad de mejora constante es esencial para lograr el éxito en cualquier campo, y estoy emocionado de ver a dónde me llevarán mis habilidades e intereses en el futuro."
                  : "I am motivated by the prospect of personal growth and always look for ways to improve myself, both professionally and personally. I believe that this mindset of constant improvement is essential for achieving success in any field, and I am excited to see where my skills and interests will take me in the future."}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-10">
              <CVDownloadButton />
         
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-5 order-1 md:order-2"
          >
            {/* Skills & Info Cards */}
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-green-500/30 transition-colors group">
                  <div className="flex items-start mb-3">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <Code className="text-green-400 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">
                        {language === "es" ? "Desarrollo Full Stack" : "Full Stack Development"}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {language === "es"
                          ? "Especializado en crear aplicaciones web completas, desde el frontend hasta el backend."
                          : "Specialized in creating complete web applications, from frontend to backend."}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Node.js", "TypeScript", "Supabase"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gray-800 text-green-200 hover:bg-gray-600 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-green-500/30 transition-colors group">
                  <div className="flex items-start mb-3">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <Brain className="text-green-400 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">
                        {language === "es" ? "Aprendizaje Continuo" : "Continuous Learning"}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {language === "es"
                          ? "Siempre actualizándome con las últimas tecnologías y mejores prácticas."
                          : "Always updating myself with the latest technologies and best practices."}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className="flex flex-wrap gap-2">
                      {["Tecnicatura en Programación", "Autodidacta", "Cursos Online"].map((edu) => (
                        <Badge
                          key={edu}
                          variant="secondary"
                          className="bg-gray-800 text-green-200 hover:bg-gray-600 text-xs"
                        >
                          {edu}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="bg-gray-700 p-5 rounded-lg border border-gray-600 hover:border-green-500/30 transition-colors group">
                  <div className="flex items-start mb-3">
                    <div className="bg-gray-800 p-3 rounded-lg mr-4">
                      <Zap className="text-green-400 h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-lg mb-1">
                        {language === "es" ? "Habilidades Personales" : "Personal Skills"}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {language === "es"
                          ? "Cualidades que me definen como profesional y persona."
                          : "Qualities that define me as a professional and person."}
                      </p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className="flex flex-wrap gap-2">
                      {[
                        language === "es" ? "Aprendizaje Rápido" : "Fast Learner",
                        language === "es" ? "Resolución de Problemas" : "Problem Solving",
                        language === "es" ? "Trabajo en Equipo" : "Teamwork",
                        language === "es" ? "Adaptabilidad" : "Adaptability",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-gray-800 text-green-200 hover:bg-gray-600 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Info Cards Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex items-center">
              <Code className="text-green-400 mr-3 h-6 w-6" />
              <div>
                <h3 className="text-white font-medium">{language === "es" ? "Desarrollo" : "Development"}</h3>
                <p className="text-gray-400 text-sm">Full Stack</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex items-center">
              <BookOpen className="text-green-400 mr-3 h-6 w-6" />
              <div>
                <h3 className="text-white font-medium">{language === "es" ? "Educación" : "Education"}</h3>
                <p className="text-gray-400 text-sm">
                  {language === "es" ? "Tecnicatura en Programación" : "Programming Technician"}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600 flex items-center">
              <User className="text-green-400 mr-3 h-6 w-6" />
              <div>
                <h3 className="text-white font-medium">{language === "es" ? "Edad" : "Age"}</h3>
                <p className="text-gray-400 text-sm">26 {language === "es" ? "años" : "years"}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background SVG Decorations */}
      {/* <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
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
      </div> */}
    </section>
  )
}

export default AboutMe
