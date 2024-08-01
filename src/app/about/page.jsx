import Image from "next/image";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto mt-24 px-4 py-4">
        <section className="grid grid-cols-1 lg:grid-cols-12 my-10">
          <div className="lg:col-span-8 place-self-center place-items-center px-4 pt-4 lg:place-items-start text-black">
            <h1 className="max-w-2xl lg:text-5xl md:text-4xl sm:text-3xl mb-4 font-extrabold">
              About Me
            </h1>
            <p className="text-justify text-blue-950 font-medium">
              <b>Hi guys!</b> My name is Muhammad Ihsan Kurnia Al-Karim. I&apos;m software
              developer main focus on web and mobile development. As an
              undergraduate student of Informatics Engineering, I pursuse not
              only technical expertise, but also a passion for continuous
              learning and innovation. With full dedication to technology
              development, I strive to create creative solutions that combine
              techincal expertise with a deep understanding of user needs.
            </p>
          </div>
          <div className="lg:col-span-4 flex-col place-self-center md:start-0 md:flex-col md: flex mt-4 lg:mt-0">
            <Image
              src="/profile.png"
              className=" rounded-full border-solid border-blue-500 border"
              alt="profile image"
              width={300}
              height={300}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
