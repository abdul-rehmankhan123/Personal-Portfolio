const educationData = [
  {
    year: '2023 - 2027',
    title: 'Bachelor of Computer Science',
    school: 'NFC IET Multan',
    gpa: 'CGPA: 3.54 / 4.0',
    icon: '🎓'
  },
  {
    year: '2021 - 2023',
    title: 'Higher Secondary Education',
    school: 'FSC (ICS) Nishat College of Science, Multan',
    gpa: 'Percentage: 85.6%',
    icon: '🎓'
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="scroll-reveal glass-card p-8 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{edu.icon}</div>
              <p className="text-sm text-blue-400 mb-2">{edu.year}</p>
              <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
              <p className="text-gray-400 mb-2">{edu.school}</p>
              <p className="text-gray-500 text-sm">{edu.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
