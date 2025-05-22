"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { ArrowDown } from "lucide-react"
import { useTranslate } from "@/hooks/useTranslate"

function Hero() {
  const { language } = useTranslate()

  // Animaciones más sutiles
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="bg-gray-800 min-h-screen w-full flex justify-center items-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl mx-auto px-6"
      >
        {/* Logo más simple */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={{ rotate: 0 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="inline-block"
          >
            <Image
              src="/logo.svg"
              alt={language === "es" ? "Logo de Sebastian Burgos" : "Sebastian Burgos Logo"}
              width={200}
              height={80}
              className="opacity-90"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">Sebastian Burgos</h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-xl text-gray-400 mb-4 font-light">
            {language === "es" ? "Desarrollador Full-Stack" : "Full-Stack Developer"}
          </p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed text-sm">
            {language === "es"
              ? "Especializado en crear soluciones web modernas y eficientes"
              : "Specialized in creating modern and efficient web solutions"}
          </p>
        </motion.div>

        {/* Enlaces sociales minimalistas */}
        <motion.div variants={itemVariants} className="flex gap-8 justify-center mb-16">
          {[
            {
              href: "https://api.whatsapp.com/send?phone=+543886575936&text=Hola%20Sebastian%20Burgos%20me%20gustaria%20saber%20mas%20de%20ti",
              icon: FaWhatsapp,
              color: "hover:text-green-400",
              label: "WhatsApp",
            },
            {
              href: "https://www.linkedin.com/in/sebdevspace/",
              icon: FaLinkedin,
              color: "hover:text-blue-400",
              label: "LinkedIn",
            },
            {
              href: "https://github.com/sebiten",
              icon: FaGithub,
              color: "hover:text-white",
              label: "GitHub",
            },
          ].map((social) => (
            <motion.div key={social.label} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 ${social.color} transition-colors duration-300`}
                aria-label={`${language === "es" ? "Contactar por" : "Contact via"} ${social.label}`}
              >
                <social.icon className="text-2xl" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de scroll minimalista */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* SVG Decorations del original */}
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-200/20 w-full h-full"
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
      <div className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          viewBox="0 0 200 92"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current text-green-100/20 w-full h-full -rotate-180"
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

export default Hero
