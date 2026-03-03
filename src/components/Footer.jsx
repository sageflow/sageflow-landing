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
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="SageFlow Logo" className="footer-logo-icon" />
              <span className="footer-logo-text">SageFlow Labs</span>
            </div>
            <p className="footer-address">
              11, Agali Path, Ambikagiri Nagar,<br />
              Zoo Road, Guwahati, Assam, Pin: 781024
            </p>
            <div className="footer-social">
              {/* <a href="https://twitter.com" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a> */}
              <a href="mailto:contact@sageflow.in" className="social-link" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://wa.me/6379459715" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/sageflow_labs/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/sageflow-labs-7467893a9" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 SageFlow. All rights reserved.
          </p>
          <p className="footer-location">
            <i className="fas fa-heart"></i> Designed with love for brighter future of young minds
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
