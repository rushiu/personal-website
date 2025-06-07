import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-black">Get in Touch</h2>
      <p className="text-gray-800 mb-4">Open to collabs and projects.</p>
      <div className="flex items-center justify-center gap-8 pt-4">
        <a
        href="mailto:aarushi.e.upadhyaya@gmail.com"
        className="inline-flex text-blue-600 hover:text-blue-800 transition"
        >
          <FiMail size={40} />
        </a>

        <a
        href="https://www.linkedin.com/in/aarushi-upadhyaya/"
        className="inline-flex pb-1 text-blue-600 hover:text-blue-800 transition"
        >
          <FiLinkedin size={40} />
        </a>

        <a
        href="https://github.com/rushiu/"
        className="inline-flex pb-1 text-blue-600 hover:text-blue-800 transition"
        >
          <FiGithub size={40} />
        </a>
      </div>
    </section>
  );
}
