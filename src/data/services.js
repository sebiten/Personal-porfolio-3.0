import {
  faCode,
  faMobileAlt,
  faPencilAlt,
  faCodeBranch,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
export const services = [
  {
    icon: faCode,
    color: "text-green-500",
    title: "Full Stack Development",
    titleEs: "Desarrollo Full Stack",
    description:
      "Development of modern and responsive user interfaces using the latest web technologies such as Next js 14, Supabase, Next Auth, Tailwindcss, JavaScript and Typescript.",
    descriptionEs:
      "Desarrollo de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías web como Next js 14, Supabase, Next Auth, Tailwindcss, JavaScript y Typescript.",
  },
  {
    icon: faMobileAlt,
    color: "text-blue-500",
    title: "Responsive Design",
    titleEs: "Diseño Responsivo",
    description:
      "Creation of websites that automatically adapt to different screen sizes to ensure a smooth and consistent user experience on all devices.",
    descriptionEs:
      "Creación de sitios web que se adaptan automáticamente a diferentes tamaños de pantalla para garantizar una experiencia de usuario fluida y consistente en todos los dispositivos.",
  },
  {
    icon: faPalette,
    color: "text-yellow-500",
    title: "UI/UX Design",
    titleEs: "Diseño UI/UX",
    description:
      "Design of intuitive and visually appealing user interfaces that are easy to navigate and use.",
    descriptionEs:
      "Diseño de interfaces de usuario intuitivas y visualmente atractivas que son fáciles de navegar y utilizar.",
  },
  {
    icon: faCodeBranch,
    color: "text-purple-500",
    title: "Version Control",
    titleEs: "Control de Versiones",
    description:
      "Utilization of version control systems such as Git to manage code changes and collaborate effectively with other developers.",
    descriptionEs:
      "Utilización de sistemas de control de versiones como Git para gestionar los cambios de código y colaborar de manera efectiva con otros desarrolladores.",
  },
  {
    icon: faPencilAlt,
    color: "texto-rojo-500",
    title: "Integration of Content and Advanced Functionalities",
    titleEs: "Integración de Contenido y Funcionalidades Avanzadas",
    description:
      "Integration of Content and Advanced Functionalities: Incorporation of high-level content and features into a website or application to enhance its utility and performance.",
    descriptionEs:
      "Integración de Contenido y Funcionalidades Avanzadas: Incorporación de contenido y características de alto nivel en un sitio web o aplicación para mejorar su utilidad y rendimiento.",
  },
  {
    icon: faCode,
    color: "text-green-500",
    title: "Web Performance Optimization",
    titleEs: "Optimización del rendimiento web",
    description:
      "Improvement of website performance through techniques such as code optimization, image compression, and caching.",
    descriptionEs:
      "Mejora del rendimiento de los sitios web a través de técnicas como la optimización del código, la compresión de imágenes y el almacenamiento en caché.",
  },
];


export const projectss = [
  {
    id: "alma-lucia",
    title: "Alma Lucia",
    shortDescription: "E-commerce con panel de administración completo",
    description:
      "Plataforma e-commerce con gestión integral de productos y pedidos. Incluye panel administrativo para añadir, editar y eliminar productos, filtros avanzados por precio y categoría, y sistema de pedidos offline con integración a WhatsApp. El panel de pedidos muestra detalles completos: productos, variantes, precios unitarios y totales.",
    image: "/techlines.webp",
    url: "https://tl-31ir.onrender.com/",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Panel de administración",
      "Filtros avanzados",
      "Gestión de productos",
      "Integración con WhatsApp",
      "Seguimiento de pedidos",
    ],
    category: "E-commerce",
    date: "2023",
    featured: true,
  },
  {
    id: "vitaespark",
    title: "VitaeSpark",
    shortDescription: "Generador de CVs con IA y sistema de pagos",
    description:
      "Plataforma de generación de currículums potenciada por IA. Cuenta con sistema completo de autenticación, panel de administrador y área personal donde se almacenan los CVs generados. Integración con Mercado Pago CheckOut Pro para procesamiento de pagos. Desarrollado con Next.js 15 y Supabase.",
    image: "/hero.png",
    url: "https://famous-centaur-3fe604.netlify.app/",
    technologies: ["Next.js 15", "Supabase", "Mercado Pago", "AI", "JavaScript"],
    features: [
      "Generación de CVs con IA",
      "Autenticación de usuarios",
      "Panel de administrador",
      "Almacenamiento de documentos",
      "Pasarela de pagos",
    ],
    category: "SaaS",
    date: "2024",
    featured: true,
  },
  {
    id: "reservas-app",
    title: "Reservas-app",
    shortDescription: "Sistema de gestión de reservas con notificaciones automáticas",
    description:
      "Aplicación Full-Stack para gestión de reservas en barberías, consultorios y servicios profesionales. Características destacadas: generación dinámica de PDFs con detalles de la reserva y sistema automatizado de notificaciones por correo electrónico tanto para clientes como para profesionales.",
    image: "/reserva.png",
    url: "https://reservas-full-stack.vercel.app/",
    technologies: ["React", "Node.js", "PDF Generation", "Email API", "MongoDB"],
    features: [
      "Gestión de reservas",
      "Generación de PDFs",
      "Notificaciones por email",
      "Panel para profesionales",
      "Calendario interactivo",
    ],
    category: "Aplicación de servicios",
    date: "2023",
    featured: false,
  },
]
