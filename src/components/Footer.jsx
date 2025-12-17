import React, { useState } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import PrivacyModal from './PrivacyModal'
import TermsModal from './TermsModal'
import './Footer.css'

const Footer = () => {
  const { handleLinkClick } = useSmoothScroll(80)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <i className="fas fa-leaf"></i>
              </div>
              <span className="footer-logo-text">SageFlow</span>
            </div>
            <p className="footer-description">
              Empowering students to build healthy habits and mental wellness through comprehensive tracking, support, and personalized insights.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              <li>
                <a href="#features" className="footer-link" onClick={(e) => handleLinkClick(e, 'features')}>
                  <i className="fas fa-chevron-right"></i>
                  <span>Features</span>
                </a>
              </li>
              <li>
                <a href="#about" className="footer-link" onClick={(e) => handleLinkClick(e, 'about')}>
                  <i className="fas fa-chevron-right"></i>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link" onClick={(e) => handleLinkClick(e, 'testimonials')}>
                  <i className="fas fa-chevron-right"></i>
                  <span>Testimonials</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@sageflow.in" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  <i className="fas fa-chevron-right"></i>
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="footer-section">
            <h3>Legal</h3>
            <ul className="footer-links">
              <li>
                <button
                  className="footer-link"
                  onClick={() => setShowPrivacy(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <i className="fas fa-chevron-right"></i>
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  className="footer-link"
                  onClick={() => setShowTerms(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <i className="fas fa-chevron-right"></i>
                  <span>Terms of Service</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 SageFlow. All rights reserved.
          </p>
          <div className="footer-legal">
            <button
              className="footer-legal-link"
              onClick={() => setShowPrivacy(true)}
            >
              Privacy Policy
            </button>
            <button
              className="footer-legal-link"
              onClick={() => setShowTerms(true)}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  )
}

export default Footer
