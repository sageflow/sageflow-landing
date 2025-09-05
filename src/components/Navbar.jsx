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
        <div className="nav-logo">
          <div className="logo-icon">
            <i className="fas fa-leaf"></i>
          </div>
          <span className="logo-text">SageFlow</span>
        </div>
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
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
