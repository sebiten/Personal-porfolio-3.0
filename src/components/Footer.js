import Link from "next/link";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center"></div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full lg:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm flex items-center justify-center gap-4 text-gray-600 font-semibold py-1">
              <Link href="https://www.linkedin.com/in/sebdevspace/">
                <FaLinkedinIn className="text-xl grayscale hover:text-blue-500 " />
              </Link>
              {year} por Sebastian Burgos.
              <Link href="https://github.com/sebiten">
                <FaGithubAlt className="text-xl text-gray-500 hover:text-gray-400 " />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
