"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-4 md:mx-19.25 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-bold text-xl text-primaryText">Gavin</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primaryText hover:text-accentGreen transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-primaryText hover:text-accentGreen transition-colors duration-200"
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primaryText hover:text-accentGreen transition-colors duration-200"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-primaryText hover:text-accentGreen transition-colors duration-200"
            >
              Skills
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-40 flex flex-col items-center justify-center space-y-8 overflow-y-auto">
          <button
            onClick={() => scrollToSection("home")}
            className="text-primaryText text-2xl hover:text-accentGreen transition-colors duration-200"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-primaryText text-2xl hover:text-accentGreen transition-colors duration-200"
          >
            My Projects
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-primaryText text-2xl hover:text-accentGreen transition-colors duration-200"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-primaryText text-2xl hover:text-accentGreen transition-colors duration-200"
          >
            Skills
          </button>
          <button className="absolute top-4 right-4 p-2" onClick={() => setIsMobileMenuOpen(false)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
