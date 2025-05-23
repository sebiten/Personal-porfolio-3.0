import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslate } from "@/hooks/useTranslate";
import { Button } from "./ui/button";
function Contact() {
  const { language } = useTranslate();

  const [info, setInfo] = React.useState({
    phone: "**********",
    email: "**********",
    direction: "**********",
  });
  const [show, setShow] = React.useState(false);

  const handleInfo = (e) => {
    e.preventDefault();
    setShow(!show);
    setInfo({
      phone: "+543886575936",
      email: "sebdevspace@gmail.com",
      direction: "Cabo moya 728, Salta, Argentina",
    });
  };

  return (
    <>
      <section
        className=" py-12 px-4 sm:px-6 lg:py-16 lg:px-8 scroll-smooth rounded-2xl"
        id="contact"
      >
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
          whileInView={{ opacity: 1.5 }}
          className="max-w-7xl mx-auto sm:px-10 "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 my-4">
            {language === "es" ? "Contacto" : "Get in touch"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden sm:block">
              <Image
                className=" w-full h-full"
                src="/logohead.svg"
                alt="Contacto"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-90 rounded-2xl"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-xl md:text-xl font-normal">
                  {language === "es"
                    ? "¿Estás interesado en trabajar juntos? Por favor, no dudes en contactarme para solicitar un presupuesto. Estoy abierto a cualquier idea de proyecto y me encantaría discutir cómo podemos hacer realidad tu visión."
                    : " Interested in working together? Please dont hesitate to contact me for a quote Im open to any project ideas and would  love to discuss how we can bring  your vision to life."}
                </h3>
              </div>
            </div>

            <form className="shadow-xl border-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl md:p-10 relative overflow-hidden text-white  p-10 flex flex-col justify-center">
              <h3 className="font-bold text-center text-3xl">
                {language === "es"
                  ? "Informacion de contacto"
                  : "Contact information"}
              </h3>
              <Button
                onClick={handleInfo}
                className="bg-green-500 font-bold hover:bg-gray-300  text-gray-800 rounded-lg p-2 my-4"
              >
                {show ? "Hide" : "Show information"}
              </Button>
              <div className="flex flex-col gap-2 mt-8">
                <p>
                  <span className="font-bold">Phone: </span>{" "}
                  {show ? info.phone : "**********"}
                </p>
                <p>
                  <span className="font-bold">Mail: </span>
                  <Link href="mailto:sebdevspace@gmail.com">
                    {" "}
                    {show ? info.email : "**********"}
                  </Link>
                </p>
        

                <Button className="bg-green-500 hover:bg-gray-300 hover:transform  text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
                  <FaMailBulk className="mr-2" color="#25D366" size={25} />
                  <Link href="mailto:sebdevspace@gmail.com">
                    Contact me by email
                  </Link>
                </Button>
                <Button className="bg-green-500 hover:bg-gray-300  hover:transform  text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
                  <FaWhatsapp className="mr-2" color="#25D366" size={25} />
                  <Link href="https://wa.me/+543886575936">
                    Contact me by Whatsapp
                  </Link>
                </Button>
                <div className="flex gap-10 items-center justify-center">
                  <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mt-8">
                    <Link
                      className="hover:scale-110 transition duration-300 ease-in-out"
                      target="blank"
                      href="https://www.linkedin.com/in/sebdevspace/"
                    >
                      <div className="bg-[#0077B5] sm:bg-transparent w-auto rounded-lg p-2">
                        <FaLinkedin color="white" size={50} />
                      </div>
                    </Link>
                    <Link
                      className="hover:scale-110 transition duration-300 ease-in-out"
                      target="blank"
                      href="mailto:sebdevspace@gmail.com"
                    >
                      <div className="bg-[#D44638] md:bg-transparent  rounded-lg p-2">
                        <SiGmail color="white" size={50} />
                      </div>
                    </Link>
                    <Link
                      className="hover:scale-110 transition duration-300 ease-in-out"
                      target="blank"
                      href="https://github.com/sebiten"
                    >
                      <div className="bg-[#333] md:bg-transparent  rounded-lg p-2">
                        <FaGithub color="white" size={50} />
                      </div>
                    </Link>

                    <Link
                      className="hover:scale-110 transition duration-300 ease-in-out"
                      target="blank"
                      href="https://twitter.com/SebitenB"
                    >
                      <div className="bg-[#1DA1F2]  md:bg-transparent  rounded-lg p-2">
                        <FaTwitter color="white" size={50} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
