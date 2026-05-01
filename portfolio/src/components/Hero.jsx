export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-2xl text-gray-400 mb-4">Hi, I'm 👋</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Abdulrehman Khan
            </h1>
            <p className="text-2xl text-blue-400 mb-6 font-semibold">AI/ML Engineer</p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I craft intelligent solutions using cutting-edge AI/ML technologies that are fast, accessible and impactful.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="btn btn-primary text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline text-center"
              >
                Hire Me
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <StatCard icon="👨‍💼" value="1 Year" label="Experience" />
              <StatCard icon="📦" value="7" label="Projects" />
              <StatCard icon="😊" value="5+" label="Happy Clients" />
              <StatCard icon="⭐" value="5 ⭐" label="Rating" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-up hidden md:block">
            <div className="relative w-80 h-80 mx-auto">
              {/* Gradient circle background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30"></div>

              {/* Profile image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-blue-500/30">
                <img
                  src="assets/images/profile.jpg"
                  alt="Abdulrehman Khan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="floating-element absolute top-10 right-10 text-4xl">
                ✨
              </div>
              <div className="floating-element absolute bottom-10 left-10 text-4xl" style={{ animationDelay: '0.5s' }}>
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }) {
  return (
    <div className="scroll-reveal glass-card p-6 text-center">
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-gray-400">{label}</p>
    </div>
  )
}
