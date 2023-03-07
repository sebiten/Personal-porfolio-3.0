import Image from "next/image";
import React from "react";

function Technologies() {
  return (
    <div>
      <div className="bg-gray-800 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 ">
        <div className="max-w-7xl mx-auto shadow-xl p-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            Technologies & Tools
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-10">
            <div className="col-span-1 flex justify-center flex-col items-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/01-tec.webp"
                alt="React"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/02-tec.webp"
                alt="Node.js"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/03-tec.webp"
                alt="Tailwind CSS"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/05-tec.webp"
                alt="JavaScript"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/next.svg"
                alt="HTML"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/tailwind.webp"
                alt="HTML"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/npm.webp"
                alt="HTML"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/04-tec.webp"
                alt="HTML"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/mongodb.webp"
                alt="CSS"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/postman.webp"
                alt="CSS"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/prisma.svg"
                alt="CSS"
              />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-white shadow-md rounded-lg">
              <Image
                width={100}
                height={100}
                className="max-h-24"
                src="/styled.webp"
                alt="CSS"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
