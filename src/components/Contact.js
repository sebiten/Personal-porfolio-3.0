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

function Contact() {
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
        className="bg-gray-800 py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
        id="contact"
      >
        <div className="max-w-7xl mx-auto sm:px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-100 my-4">
            Get in touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden sm:block">
              <Image
                className="object-cover bg-center w-full h-full"
                src="/logo.svg"
                alt="Contacto"
                width={500}
                height={300}
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-xl md:text-xl font-normal">
                  Interested in working together? Please dont hesitate to
                  contact me for a quote Im open to any project ideas and would
                  love to discuss how we can bring your vision to life.
                </h3>
              </div>
            </div>

            <form className="bg-gray-700 text-white rounded-lg shadow-xl p-10 flex flex-col justify-center">
              <h3 className="font-bold text-center text-3xl">
                Contact information
              </h3>
              <button
                onClick={handleInfo}
                className="bg-green-200 font-bold hover:bg-gray-300  text-gray-800 rounded-lg p-2 my-4"
              >
                {show ? "Hide" : "Show information"}
              </button>
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
                <p>
                  <span className="font-bold">Adress: </span>{" "}
                  {show ? info.direction : "**********"}
                </p>

                <button className="bg-green-200 hover:bg-gray-300 hover:transform  text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out mt-8 flex items-center justify-center">
                  <FaMailBulk className="mr-2" color="#25D366" size={25} />
                  <Link href="mailto:sebdevspace@gmail.com">
                    Contact me by email
                  </Link>
                </button>
                <button className="bg-green-200 hover:bg-gray-300  hover:transform  text-gray-800 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center justify-center">
                  <FaWhatsapp className="mr-2" color="#25D366" size={25} />
                  <Link href="https://wa.me/+543886575936">
                    Contact me by Whatsapp
                  </Link>
                </button>
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
        </div>
      </section>
    </>
  );
}

export default Contact;
