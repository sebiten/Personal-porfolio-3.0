import { motion } from "framer-motion";

const CVDownloadButton = ({ language, toggleLanguage }) => {
  const getDownloadInfo = () => {
    if (language === "es") {
      return {
        url: "https://drive.google.com/file/d/1NN9MhOQzHsZhMQXQQw4gulXnFRPRh7yO/view?usp=sharing",
        text: "Descargar CV",
      };
    } else {
      return {
        url: "https://drive.google.com/file/d/1NN9MhOQzHsZhMQXQQw4gulXnFRPRh7yO/view?usp=sharing",
        text: "Descargar CV",
      };
    }
  };

  const { url, text } = getDownloadInfo();
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-400 text-gray-800 rounded-full py-3 px-6 font-semibold text-lg shadow-md hover:bg-gray-300 "
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      // onClick={handleLanguageChange}
    >
      {text}
    </motion.a>
  );
};

export default CVDownloadButton;
