"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

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
          <div className="font-bold text-xl text-primaryText">Gavin Arya.</div>

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
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header