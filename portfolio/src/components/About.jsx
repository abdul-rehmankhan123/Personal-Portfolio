export default function About() {
  const infoItems = [
    { icon: '👤', label: 'Name', value: 'Abdulrehman Khan' },
    { icon: '📧', label: 'Email', value: 'ak9082491@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Pakistan' },
    { icon: '💼', label: 'Availability', value: 'Open to Work' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="scroll-reveal">
            <div className="glass-card overflow-hidden rounded-2xl relative">
              <img
                src="assets/images/profile.jpg"
                alt="Abdulrehman Khan"
                className="w-full h-96 object-cover"
              />
              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 glass-card p-4 rounded-xl">
                <p className="text-2xl font-bold text-blue-400">1 Year</p>
                <p className="text-sm text-gray-300">Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-reveal">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm an AI/ML Engineer passionate about building intelligent solutions using cutting-edge technologies. With expertise in Generative AI, LLMs, and prompt engineering, I create production-ready AI applications that solve real-world problems.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {infoItems.map((item, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="assets/resume/ABDUL REHMAN KHAN(Resume).pdf"
              download
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
