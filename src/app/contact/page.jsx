import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="container mx-auto mt-24">
        <h1 className="text-3xl text-black my-5 text-center font-bold mb-4 hover:text-blue-950">Contact Me</h1>
        <ContactForm />
      </div>
    </main>
  );
}

export default Contact;
