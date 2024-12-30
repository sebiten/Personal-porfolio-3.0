import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
import CVDownloadButton from "./CVDowloadButton";
const AboutMe = () => {
  const { language, setIsClicked } = useTranslate();

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center items-center h-screen px-2 scroll-smooth"
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.3 }}
        whileInView={{ opacity: 1.5 }}
        className="bg-gray-800 p-2  w-full max-w-7xl md:mx-4"
      >
        <motion.div className="flex justify-center items-center mb-8">
          <motion.img
            src="/me.webp"
            alt="Profile Picture"
            className="rounded-full w-52 bg-cover object-cover h-52 border-4 border-green-300 shadow-md"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          {language === "es" ? "Sobre mi" : "About me"}
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          {/* . */}
          {language === "es"
            ? "Mi nombre es Sebastian Burgos y soy un programador de 25 años apasionado por la tecnología. Actualmente, estoy cursando la carrera de Tecnicatura Universitaria en Programación en la Universidad Nacional de Salta. Me encantan todo tipo de desafíos y siempre busco aprender nuevas habilidades y técnicas para mejorar mi trabajo. Una de mis fortalezas como programador es mi capacidad para aprender rápidamente. Me motiva la perspectiva de crecimiento personal y siempre busco formas de mejorar tanto profesional como personalmente. Creo que esta mentalidad de mejora constante es esencial para lograr el éxito en cualquier campo, y estoy emocionado de ver a dónde me llevarán mis habilidades e intereses en el futuro."
            : "My name is Sebastian Burgos, and I am a 25-year-old programmer passionate about technology. I am currently studying for a Technical University Degree in Programming at the National University of Salta. I love all kinds of challenges and always seek to learn new skills and techniques to improve my work. One of my strengths as a programmer is my ability to learn quickly. I am motivated by the prospect of personal growth and always look for ways to improve myself, both professionally and personally. I believe that this mindset of constant improvement is essential for achieving success in any field, and I am excited to see where my skills and interests will take me in the future."}
        </p>
        {/* <CVDownloadButton language={language} setIsClicked={setIsClicked} /> */}
      </motion.div>
    </section>
  );
};

export default AboutMe;
