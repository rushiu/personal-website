export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(./public/abstract.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pt-40">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-black">
          Aarushi Upadhyaya
        </h1>
        <p className="text-xl mt-10 mb-10 text-black max-w-xl mx-auto">
          Software engineer with experience in machine learning, backend infrastructure, and data systems.
        </p>
        <div className="mt-6 space-x-6">
          <a
            href="./public/AarushiUpadhyaya_Resume_Online.pdf"
            className="inline-block border border-black bg-transparent hover:font-bold hover:border-2 text-black px-6 py-3 rounded-full transition"
          >
            Resume
          </a>
          <a
            href="mailto:aarushi.e.upadhyaya@gmail.com"
            className="inline-block bg-transparent hover:font-bold hover:border-2 border border-black text-black px-6 py-3 rounded-full transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
