import { useTranslate } from "@/hooks/useTranslate";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion"

export const projectss = [
  {
    id: "alma-lucia",
    title: "Alma Lucia",
    shortDescription: {
      es: "E-commerce con panel de administración completo",
      en: "E-commerce with complete admin panel",
    },
    description: {
      es: "Plataforma e-commerce con gestión integral de productos y pedidos. Incluye panel administrativo para añadir, editar y eliminar productos, filtros avanzados por precio y categoría, y sistema de pedidos offline con integración a WhatsApp. El panel de pedidos muestra detalles completos: productos, variantes, precios unitarios y totales.",
      en: "E-commerce platform with comprehensive product and order management. Includes an administrative panel to add, edit and delete products, advanced filters by price and category, and offline ordering system with WhatsApp integration. The order panel shows complete details: products, variants, unit prices and totals.",
    },
    image: "/almaluciahero.png",
    url: "https://almalucia.vercel.app/",
    technologies: [
      "React",
      "Typescript",
      "Nexjs",
      "Supabase DB",
      "Supabase Auth",
    ],
    features: [
      "Panel de administración",
      "Filtros avanzados",
      "Gestión de productos",
      "Integración con WhatsApp",
      "Seguimiento de pedidos",
    ],
    category: {
      es: "E-commerce",
      en: "E-commerce",
    },
    date: "2023",
    featured: false,
    github: "https://github.com/sebiten/romi-tienda",
  },
  {
    id: "vitaespark",
    title: "VitaeSpark",
    shortDescription: {
      es: "Generador de CVs con IA y sistema de pagos",
      en: "CV generator with AI and payment system",
    },
    description: {
      es: "Plataforma de generación de currículums potenciada por IA. Cuenta con sistema completo de autenticación, panel de administrador y área personal donde se almacenan los CVs generados. Integración con Mercado Pago CheckOut Pro para procesamiento de pagos. Desarrollado con Next.js 15 y Supabase.",
      en: "AI-powered resume generation platform. It has a complete authentication system, admin panel and personal area where generated CVs are stored. Integration with Mercado Pago CheckOut Pro for payment processing. Developed with Next.js 15 and Supabase.",
    },
    image: "/hero.png",
    url: "https://vitaespark.com",
    technologies: [
      "Next.js 15",
      "Supabase DB",
      "Supabase Auth",
      "Mercado Pago",
      "AI",
      "TypeScript",
    ],
    features: [
      "Generación de CVs con IA",
      "Autenticación de usuarios",
      "Panel de administrador",
      "Almacenamiento de documentos",
      "Pasarela de pagos",
    ],
    category: {
      es: "SaaS",
      en: "SaaS",
    },
    date: "2024",
    featured: true,
    github: "https://github.com/sebiten",
  },
  {
    id: "reservas-app",
    title: "Reservas-app",
    shortDescription: {
      es: "Sistema de gestión de reservas con notificaciones automáticas",
      en: "Reservation management system with automatic notifications",
    },
    description: {
      es: "Aplicación Full-Stack para gestión de reservas en barberías, consultorios y servicios profesionales. Características destacadas: generación dinámica de PDFs con detalles de la reserva y sistema automatizado de notificaciones por correo electrónico tanto para clientes como para profesionales.",
      en: "Full-Stack application for managing reservations in barbershops, clinics and professional services. Key features: dynamic generation of PDFs with reservation details and automated email notification system for both clients and professionals.",
    },
    image: "/reserva.png",
    url: "https://reservas-full-stack.vercel.app/login",
    technologies: [
      "React",
      "Node.js",
      "PDF Generation",
      "Email API",
      "Supabase DB",
      "Supabase Auth",
    ],
    features: [
      "Gestión de reservas",
      "Generación de PDFs",
      "Notificaciones por email",
      "Panel para profesionales",
      "Calendario interactivo",
    ],
    category: {
      es: "Aplicación de servicios",
      en: "Service Application",
    },
    date: "2023",
    featured: false,
    github: "http://github.com/sebiten/reservas-full-stack",
  },
];

export default function ProjectsGrid() {
  const { language } = useTranslate();

  return (
    <section className="py-12 bg-gray-800">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-white">
            {language === "es" ? "Mis Proyectos" : "My Projects"}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectss.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
