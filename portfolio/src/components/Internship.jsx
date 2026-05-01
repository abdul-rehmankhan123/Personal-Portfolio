export default function Internship() {
  return (
    <section id="internship" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>Internship
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="scroll-reveal">
            {/* Company Logo */}
            <div className="glass-card p-8 rounded-2xl mb-6 text-center">
              <p className="text-3xl font-bold text-white">Techup</p>
            </div>

            {/* Details Card */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Generative AI & ML Intern
              </h3>
              <p className="text-blue-400 mb-4 text-sm">
                1 Jul 2025 - 19 Oct 2025
              </p>

              <div className="flex items-center text-gray-300 mb-6">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Lahore, Pakistan (Remote)</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                During my internship at Techup Solution, I worked extensively with Generative AI and Machine Learning. Implemented ML models and created intelligent chatbots with natural language understanding.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Built AI-powered applications with Generative AI models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Implemented Machine Learning solutions for various use cases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Worked with LLMs, prompt engineering, and RAG systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Collaborated with the team to deliver end-to-end solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="scroll-reveal flex items-center justify-center">
            <div className="w-64 h-64 glass-card rounded-2xl flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              <i className="fas fa-code text-8xl text-blue-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
