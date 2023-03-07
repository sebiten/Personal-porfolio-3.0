import Link from "next/link";
import React from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-gray-800 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center"></div>
        <hr class="my-6 border-gray-700" />
        <div class="flex flex-wrap items-center justify-center">
          <div class="w-full lg:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm flex items-center gap-4 text-gray-600 font-semibold py-1">
              <Link href="https://www.linkedin.com/in/sebdevspace/">
              <FaLinkedinIn className="text-xl grayscale hover:text-blue-500 " />
              </Link>
              © 2023 por Sebastian Burgos. All rights reserved.
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
