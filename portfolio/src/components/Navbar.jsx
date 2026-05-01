import { useState } from 'react'

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Internship', href: '#internship' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e) => {
    e.preventDefault()
    const target = e.currentTarget.getAttribute('href')
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 shadow-lg' : 'bg-slate-900/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Portfolio<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CV Button & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="assets/resume/ABDUL REHMAN KHAN(Resume).pdf"
              download
              className="hidden md:block px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all"
            >
              Download CV
            </a>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick}
                className="block text-gray-300 hover:text-blue-400 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="assets/resume/ABDUL REHMAN KHAN(Resume).pdf"
              download
              className="block px-4 py-2 rounded-lg bg-blue-500 text-white text-center hover:bg-blue-600 transition-all"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
