"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useTranslate } from "@/hooks/useTranslate"

const ExperienceSection = () => {
  const { language } = useTranslate()

  const experiences = [
    {
      title: "LumiPeople",
      description: {
        es: (
          <>
            <p className="text-gray-300 font-normal text-sm mb-4">
              Desarrollo y diseño de una web empresarial informativa y funcional para una empresa, integrando un sistema
              de búsqueda de empleo y un blog optimizado con técnicas avanzadas de SEO, mejorando la conversión y
              visibilidad en motores de búsqueda.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-start text-sm">
              <li>
                Implementación de Google Analytics y Google Tag Manager para el análisis y seguimiento del rendimiento y
                comportamiento de los usuarios.
              </li>
              <li>
                Creación y gestión de un blog corporativo con contenido optimizado para SEO, utilizando estrategias de
                link building y keywords relevantes.
              </li>
              <li>
                Optimización de velocidad de carga mediante estrategias avanzadas de rendimiento como lazy loading y
                minificación de archivos.
              </li>
              <li>
                Colaboración en estrategias de marketing digital incluyendo campañas de Google Ads y redes sociales para
                mejorar el alcance y adquisición de usuarios.
              </li>
              <li>Desarrollo de un sistema de carga y postulación de empleos con búsquedas para cada puesto.</li>
            </ul>
          </>
        ),
        en: (
          <>
            <p className="text-gray-300 font-normal text-sm mb-4">
              Development and design of an informative and functional corporate website, integrating a job search system
              and a blog optimized with advanced SEO techniques, improving conversion and visibility in search engines.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-start text-sm">
              <li>
                Implementation of Google Analytics and Google Tag Manager for analyzing and tracking user performance
                and behavior.
              </li>
              <li>
                Creation and management of a corporate blog with SEO-optimized content, using link building strategies
                and relevant keywords.
              </li>
              <li>
                Load speed optimization through advanced performance strategies such as lazy loading and file
                minification.
              </li>
              <li>
                Collaboration in digital marketing strategies including Google Ads campaigns and social media to improve
                reach and user acquisition.
              </li>
              <li>Development of a job posting and application system with search capabilities for each position.</li>
            </ul>
          </>
        ),
      },
      logo: "/lumi.png",
      date: {
        es: "Junio 2024 - Actualidad",
        en: "June 2024 - Present",
      },
      url: "https://www.lumipeoplearg.com",
    },
    {
      title: "IDeas App Inmobiliaria",
      description: {
        es: (
          <>
            <p className="text-gray-300 font-normal text-sm mb-4">
              Entorno de aprendizaje profesional donde, en colaboración con un equipo, desarrollamos una aplicación
              inmobiliaria full-stack, aplicando metodologías ágiles con sprints iterativos y participando en reuniones
              de planificación estratégica.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-start text-sm">
              <li>
                Diseño de estilos visuales atractivos y funcionales, utilizando Tailwind CSS para garantizar una UI
                limpia y profesional.
              </li>
              <li>
                Implementación de diseño responsive para compatibilidad en múltiples dispositivos, asegurando una
                experiencia de usuario óptima.
              </li>
              <li>
                Integración de mapas interactivos con Leaflet y OpenStreetMap para visualizar propiedades en tiempo
                real.
              </li>
              <li>
                Desarrollo de funcionalidades avanzadas como paginación dinámica, filtrado avanzado y consumo de APIs de
                terceros para enriquecer los datos de las propiedades.
              </li>
              <li>
                Trabajo en equipo con metodologías ágiles como Scrum, participando activamente en reuniones de
                planificación, code reviews y documentación técnica.
              </li>
            </ul>
          </>
        ),
        en: (
          <>
            <p className="text-gray-300 font-normal text-sm mb-4">
              Professional learning environment where, in collaboration with a team, we developed a full-stack real
              estate application, applying agile methodologies with iterative sprints and participating in strategic
              planning meetings.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 text-start text-sm">
              <li>
                Design of attractive and functional visual styles, using Tailwind CSS to ensure a clean and professional
                UI.
              </li>
              <li>
                Implementation of responsive design for compatibility across multiple devices, ensuring an optimal user
                experience.
              </li>
              <li>
                Integration of interactive maps with Leaflet and OpenStreetMap to visualize properties in real-time.
              </li>
              <li>
                Development of advanced functionalities such as dynamic pagination, advanced filtering, and consumption
                of third-party APIs to enrich property data.
              </li>
              <li>
                Teamwork with agile methodologies like Scrum, actively participating in planning meetings, code reviews,
                and technical documentation.
              </li>
            </ul>
          </>
        ),
      },
      logo: "/ideas.png",
      date: {
        es: "Noviembre 2022 - Marzo 2023",
        en: "November 2022 - March 2023",
      },
      url: "https://github.com/tahouse-casa",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="bg-gray-800 min-h-screen w-full py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{language === "es" ? "Experiencia" : "Experience"}</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            {language === "es"
              ? "Explora las experiencias más relevantes en mi trayectoria en desarrollo web y programación full-stack."
              : "Explore the most relevant experiences in my journey in web development and full-stack programming."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-lg transition-all duration-300 hover:shadow-xl h-full relative overflow-hidden group">
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
                      transition={{ duration: 2, delay: index * 0.5 }}
                    />
                  </svg>
                </div>

                <div className="p-6 relative z-10">
                  <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0.9 }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="mb-6 flex justify-center"
                  >
                    <Image
                      src={experience.logo || "/placeholder.svg"}
                      alt={experience.title}
                      width={200}
                      height={120}
                      className="object-contain h-28 w-auto transition-all duration-300"
                    />
                  </motion.div>

                  <CardContent className="flex flex-col h-full text-gray-200 p-0">
                    <h3 className="text-2xl text-white font-bold mb-3 text-center">{experience.title}</h3>
                    <p className="text-green-400 text-lg font-semibold mb-6 text-center">
                      {language === "es" ? experience.date.es : experience.date.en}
                    </p>
                    <div className="text-gray-300 text-base mb-6 flex-grow">
                      {language === "es" ? experience.description.es : experience.description.en}
                    </div>
                    <div className="flex justify-center mt-auto">
                      <Link
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium group/link"
                      >
                        <span className="mr-2">{experience.url.replace("https://", "")}</span>
                        <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
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

export default ExperienceSection
