const Projects = () => {
  const projects = [
    {
      title: "Gotong Mobile App",
      description: "I led the UI/UX efforts, actively conducting user research to gather insights and the designing a comprehensive, user-friendly, and accessible interface.",
      tags: ["UI/UX", "Mobile", "Figma", "Competition", "Group Project"],
      image: "/public/images/gotong.png",
      link: "https://www.figma.com/proto/4AbO0QOOwmnbzJ1xBca2eb/Gotong?node-id=1066-3582&t=nKD6DRHc6roLktfW-1",
    },
    {
      title: "Second Serve Mobile App",
      description: "I led the UI/UX efforts, actively conducting user research to gather insights and the designing a comprehensive, user-friendly, and accessible interface.",
      tags: ["UI/UX", "Mobile", "Figma", "Competition", "Group Project"],
      image: "/public/images/second-serve.png",
      link: "https://www.figma.com/proto/iC9iEyKdIURjpKuW3RCT8t/Techfest?node-id=212-1726&t=t05EqWmWE5uVAYMv-1",
    },
    {
      title: "GrocerEase",
      description: "As both the UI/UX and Front-End developer, I conducted user research and designed the interface, then developed it to be accessible to and easy to use.",
      tags: ["UI/UX", "Front-End","Figma", "React", "Website", "Group Project"],
      image: "/public/imagesgrocerease.png",
      links: {
        demo: "https://grocer-ease-frontend-six.vercel.app/",
        github: "https://github.com/IntanWp/GrocerEase"
      }
    },
  ]

  return (
    <section id="projects" className="py-22.5">
      <div className="mx-4 md:mx-19.25">
        <div className="section-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primaryText mb-16">My Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover-lift hover:border-accentGreen/30 transition-all duration-300"
              >
                <div className="aspect-video bg-gray-50 flex items-center justify-center">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"ga 
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primaryText mb-3">{project.title}</h3>

                  <p className="text-primaryText/70 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-primaryText/70 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.links ? (
                    <div className="flex gap-3">
                      <button 
                        onClick={() => window.open(project.links.demo, "_blank")}
                        className="flex-1 bg-primaryText text-white py-2 rounded-lg font-medium hover:bg-accentGreen transition-colors duration-300"
                      >
                        Live Demo
                      </button>
                      <button 
                        onClick={() => window.open(project.links.github, "_blank")}
                        className="flex-1 bg-gray-200 text-primaryText py-2 rounded-lg font-medium hover:bg-accentGreen hover:text-white transition-colors duration-300"
                      >
                        GitHub
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => window.open(project.link, "_blank")}
                      className="w-full bg-primaryText text-white py-2 rounded-lg font-medium hover:bg-accentGreen transition-colors duration-300"
                    >
                      View Project
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
