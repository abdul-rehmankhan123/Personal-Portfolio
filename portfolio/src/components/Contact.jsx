import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Please fill in all fields', 'error')
      return
    }

    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      showNotification('Failed to send message. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  const showNotification = (message, type) => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">
          <span className="title-dot"></span>Let's Connect
        </h2>
        <p className="text-center text-gray-300 text-lg mb-12">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-reveal space-y-6">
            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="text-3xl text-blue-400">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a
                  href="mailto:ak9082491@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  ak9082491@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="text-3xl text-blue-400">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <a
                  href="tel:+923168664647"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  +92 316 8664647
                </a>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl flex items-center gap-4">
              <div className="text-3xl text-blue-400">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="scroll-reveal glass-card p-8 rounded-2xl space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="form-input form-textarea"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-6 right-6 px-6 py-4 rounded-lg backdrop-blur-xl border transition-all duration-300 ${
          notification.type === 'success'
            ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
            : 'bg-red-500/20 border-red-500/50 text-red-300'
        }`}>
          {notification.message}
        </div>
      )}
    </section>
  )
}
