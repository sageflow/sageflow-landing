import React from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Footer.css'

const Footer = () => {
  const { handleLinkClick } = useSmoothScroll(80)

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="logo-text">SageFlow</span>
            </div>
            <p className="footer-description">
              Empowering students to thrive mentally and academically through data-driven insights and support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleLinkClick(e, 'hero')}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Sign In
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, 'about')}
                >
                  Student Sign Up
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Teacher Sign Up
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="footer-section">
            <h4 className="footer-title">Features</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Mental Health Tracking
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Habit Building
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Academic Profiling
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Progress Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Contact Us
                </a>
              </li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SageFlow. All rights reserved. Empowering student success through mental health and academic support.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
