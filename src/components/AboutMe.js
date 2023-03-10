import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-center items-center h-screen px-2"
    >
      <div className="bg-gray-800 p-2  w-full max-w-7xl md:mx-4">
        <motion.div
          className="flex justify-center items-center mb-8"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/me.webp"
            alt="Profile Picture"
            className="rounded-full w-52 bg-cover object-cover h-52 border-4 border-green-300 shadow-md"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-100 mb-4">
          Hi, nice to meet you!
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          My name is Sebastian Burgos and I am a 24-year-old programmer who is
          passionate about technology. I love all kinds of challenges and always
          seek to learn new skills and techniques to improve my work. One of my
          strengths as a programmer is my ability to learn quickly. I am
          motivated by the prospect of personal growth and always look for ways
          to improve myself, both professionally and personally. I believe that
          this mindset of constant improvement is essential for achieving
          success in any field, and I am excited to see where my skills and
          interests will take me in the future.
        </p>
        <motion.a
          href="https://drive.google.com/file/d/1Lmhje7JcUTIgETcmu20xYkKCOsUIWOM9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-300 text-gray-800 rounded-full py-3 px-6 font-semibold text-lg shadow-md hover:bg-gray-300 "
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Dowload CV
        </motion.a>
      </div>
    </section>
  );
};

export default AboutMe;
