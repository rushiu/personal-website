function ProjectCard({ title, description }) {
  return (
    <div className="bg-white rounded-xl hover:shadow-md p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}

export default function Projects() {
  const projectList = [
    // {
    //   title: "Test",
    //   description: "Test",
    // },
  ];
  
  return (
    <section id="projects" className="py-2 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-black">Projects</h2>
      <p className="text-gray-800">This Section is in progress!</p>
      {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
    </section>
  );
}
