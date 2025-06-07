export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white text-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Aarushi Upadhyaya</h1>
        <div className="space-x-6">
          <a href="#home" className="text-gray-900 hover:text-blue-800">Home</a>
          <a href="#about" className="text-gray-900 hover:text-blue-800">About</a>
          <a href="#experience" className="text-gray-900 hover:text-blue-800">Experience</a>
          <a href="#projects" className="text-gray-900 hover:text-blue-800">Projects</a>
          <a href="#contact" className="text-gray-900 hover:text-blue-800">Contact</a>
        </div>
      </div>
    </nav>
  );
}

