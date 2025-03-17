import { RevealOnScroll } from "../RevealOnScroll";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="flex flex-col space-y-4">
            {/* Email */}
            <a
              href="mailto:amitesh.rwl@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/amitesh-rawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-blue-700 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/your-instagram/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-pink-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-gray-800 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
