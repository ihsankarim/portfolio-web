import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <Hero />
      </div>
    </main>
  );
}
