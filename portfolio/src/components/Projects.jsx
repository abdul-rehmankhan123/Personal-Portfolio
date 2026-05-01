const projectsData = [
  {
    id: 1,
    title: 'RideNServe',
    description: 'A mobile app that enables restaurants to deliver orders directly through an Indrive-like on-demand delivery platform.',
    image: 'assets/images/project1.png',
    tags: ['Flutter', 'Dart', 'FastAPI', 'MySQL']
  },
  {
    id: 2,
    title: 'Pakistani Law ChatBot',
    description: 'An intelligent chatbot powered by Pakistan\'s legal knowledge base that provides accurate answers to any law-related questions regarding Pakistani laws and regulations.',
    image: 'assets/images/project2.jpg',
    tags: ['Ollama', 'Gradio', 'Python', 'LangChain']
  },
  {
    id: 3,
    title: 'Personal Portfolio',
    description: 'A modern, responsive personal portfolio website featuring a clean light theme with glass-morphism design. Showcases projects, skills, education, and professional experience.',
    image: 'assets/images/personal.png',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    title: 'Resume Analyzer ChatBot',
    description: 'An intelligent resume analysis tool powered by AI that allows users to upload their resume and receive comprehensive feedback on improvements.',
    image: 'assets/images/Resume.jpg',
    tags: ['Python', 'Ollama', 'Streamlit']
  },
  {
    id: 5,
    title: 'Local vs International Comparison',
    description: 'A smart mobile application that scans product barcodes and instantly compares local versus international prices, helping users identify cost-effective purchasing options.',
    image: 'assets/images/local vs intern.jpg',
    tags: ['Flutter', 'Dart']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title mb-0">
            <span className="title-dot"></span>Featured Projects
          </h2>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
            View All Projects →
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="scroll-reveal glass-card rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href="#" className="text-white text-3xl hover:scale-110 transition-transform">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
