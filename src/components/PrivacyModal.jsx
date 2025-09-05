import React from 'react'
import './Modal.css'

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Privacy Policy</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          
          <h3>1. Information We Collect</h3>
          <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
          <ul>
            <li>Personal information (name, email address, phone number)</li>
            <li>Academic and wellness data you choose to track</li>
            <li>Usage information about how you interact with our platform</li>
          </ul>

          <h3>2. How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Generate insights and analytics for your wellness journey</li>
            <li>Communicate with you about our services</li>
            <li>Ensure the security and integrity of our platform</li>
          </ul>

          <h3>3. Information Sharing</h3>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>

          <h3>4. Data Security</h3>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

          <h3>5. Your Rights</h3>
          <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>

          <h3>6. Contact Us</h3>
          <p>If you have questions about this Privacy Policy, please contact us at kapilambarish@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyModal
