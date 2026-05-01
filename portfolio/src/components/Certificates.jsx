export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="scroll-reveal glass-card rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
            <div className="h-80 overflow-hidden">
              <img
                src="assets/images/certificate 1.jpeg"
                alt="Certificate"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Professional Certificate</h3>
              <p className="text-gray-400">Issued & Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
