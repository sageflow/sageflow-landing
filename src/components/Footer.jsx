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


          {/* Contact & Legal */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:contact@sageflow.in">
                  contact@sageflow.in
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <button 
                  className="link-button"
                  onClick={() => setShowPrivacy(true)}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  className="link-button"
                  onClick={() => setShowTerms(true)}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 SageFlow. All rights reserved. Empowering student success through mental health and academic support.</p>
        </div>
      </div>
      
      <PrivacyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
    </footer>
  )
}

export default Footer
