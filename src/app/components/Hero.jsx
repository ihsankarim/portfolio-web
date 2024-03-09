"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-20 mx-20">
      <div className="col-span-12 lg:col-span-8 flex flex-col pl-40 pr-20 py-10 justify-center items-center lg:items-start">
        <h1 className="text-black max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <strong className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-blue-600">
            Helo, I'm
          </strong>
        </h1>
        <h1 className="text-black max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span
            className={`text-transparent text-6xl bg-clip-text bg-gradient-to-r from-gray-500 to-blue-600 ${"motion-safe:animate-none motion-reduce:animate-none"}`}
          >
            {""}
          </span>
          <TypeAnimation
            sequence={["Ihsan Kurnia", 1500, "Software Developer"]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#000000] mb-6 txt-lg lg:text-xl">
          Welcome to my portfolio website
        </p>
        <div>
          <button className="mt-4 bg-gradient-to-br from-gray-500 to-blue-600 px-4 py-2 text-white rounded-lg outline-1">
            Download CV
          </button>
        </div>
      </div>
      <div className="col-span-4">
        <Image src="/logo.png"
        className="rounded-full relative"
        width={300}
        height={300}
        />
      </div>
      {/* <div className="col-span-4 flex mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] rounded-full relative">
          <Image
            src="/logo.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
