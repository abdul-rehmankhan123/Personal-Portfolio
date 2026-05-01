const skillsData = [
  { icon: '🐍', name: 'Python' },
  { icon: '🤖', name: 'LLMs' },
  { icon: '⛓️', name: 'LangChain' },
  { icon: '🧠', name: 'Ollama' },
  { icon: '✨', name: 'Prompt Eng.' },
  { icon: '⚡', name: 'FastAPI' },
  { icon: '📊', name: 'Streamlit' },
  { icon: '🐙', name: 'Git & Github' },
  { icon: '🔄', name: 'Automation n8n' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, idx) => (
            <div
              key={idx}
              className="scroll-reveal glass-card p-8 rounded-2xl text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
