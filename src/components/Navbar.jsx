import React, { useState } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isScrolled = useScrollSpy(50)
  const { handleLinkClick } = useSmoothScroll(80)

  const handleNavLinkClick = (e, targetId) => {
    handleLinkClick(e, targetId)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo" onClick={(e) => handleNavLinkClick(e, 'hero')}>
          <div className="logo-icon">
            <i className="fas fa-leaf"></i>
          </div>
          <span className="logo-text">SageFlow</span>
        </a>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => handleNavLinkClick(e, 'about')}
            aria-label="Navigate to About section"
          >
            About
          </a>
          <a
            href="#features"
            className="nav-link"
            onClick={(e) => handleNavLinkClick(e, 'features')}
            aria-label="Navigate to Features section"
          >
            Features
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            aria-label="Navigate to Contact section"
          >
            Contact
          </a>
          <div className="nav-cta">
            <a href="#features" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
