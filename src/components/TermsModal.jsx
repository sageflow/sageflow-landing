import React from 'react'
import './Modal.css'

const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Terms of Service</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing or using SageFlow, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

          <h3>2. Description of Service</h3>
          <p>SageFlow is a platform designed to help students track their mental health, build healthy habits, and monitor academic progress. The service is provided "as is" without warranties of any kind.</p>

          <h3>3. User Accounts</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

          <h3>4. Acceptable Use</h3>
          <p>You agree to use SageFlow only for lawful purposes and in accordance with these Terms. You may not:</p>
          <ul>
            <li>Use the service for any illegal or unauthorized purpose</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
            <li>Share or distribute harmful, offensive, or inappropriate content</li>
          </ul>

          <h3>5. Intellectual Property</h3>
          <p>The SageFlow platform, including its design, features, and content, is owned by SageFlow and is protected by copyright, trademark, and other intellectual property laws.</p>

          <h3>6. Limitation of Liability</h3>
          <p>SageFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

          <h3>7. Termination</h3>
          <p>We reserve the right to terminate or suspend your account at any time for violation of these Terms or for any other reason at our sole discretion.</p>

          <h3>8. Changes to Terms</h3>
          <p>We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the new Terms.</p>

          <h3>9. Contact Information</h3>
          <p>For questions about these Terms of Service, please contact us at kapilambarish@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
